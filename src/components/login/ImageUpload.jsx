/* eslint-disable react/prop-types */
import { Alert, AlertTitle, Card, CardContent } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";

export default function ImageUpload({ handleChange, values, errors, handleBlur }) {
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (isFileFormatValid(file)) {
      const objectURL = URL.createObjectURL(file);
      setImage(objectURL);
      setMessage("");
      // Call handleChange to set the image value in formik
      handleChange({ target: { name: "image", value: objectURL } });
      handleBlur({ target: { name: "image" } }); // Trigger blur event to validate the field
    } else {
      setImage(null);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
      setMessage(
        "Invalid file format. Please upload a png, webp, jpg, or jpeg file."
      );
    }
  }, [handleChange, handleBlur]);

  const isFileFormatValid = (file) => {
    const validFormats = ["image/png", "image/webp", "image/jpeg", "image/jpg"];
    return validFormats.includes(file.type);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/png, image/webp, image/jpeg, image/jpg",
    onDrop,
  });

  const dropzoneSize = "80px";
  const imageSize = "80px";

  return (
    <div>
      {alert && (
        <Alert
          severity="error"
          style={{
            position: "absolute",
            top: "0px",
            left: "30%",
            right: "30%",
            zIndex: "3",
          }}
        >
          <AlertTitle>
            <b>Invalid File Format</b>
          </AlertTitle>
          Please upload a proper file (webp, png, jpg, jpeg)
        </Alert>
      )}
      <Card
        style={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "3px solid #43ff64d9",
        }}
      >
        <CardContent>
          <div
            {...getRootProps()}
            style={{
              ...dropzoneStyles,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: dropzoneSize,
              height: dropzoneSize,
            }}
          >
            <input {...getInputProps()} />
            <div
              style={{ ...circleStyles, width: imageSize, height: imageSize }}
            >
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <p style={{ fontSize: "8px", color: "white" }}>
                  {message ||
                    "Drag & drop an image here, or click to select one"}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Display the image error message if it exists */}
      {errors.image && (
        <div style={{ color: "red", fontSize: "14px" }}>{errors.image}</div>
      )}
    </div>
  );
}

const dropzoneStyles = {
  border: "2px dashed transparent",
  borderRadius: "50%",
  textAlign: "center",
  padding: "0px",
  cursor: "pointer",
  margin: "0 auto",
};

const circleStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  overflow: "hidden",
};
