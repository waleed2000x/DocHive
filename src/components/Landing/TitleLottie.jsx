"use client";
import Lottie from "lottie-react";
import Title from "./Title.json";

export default function TitleLottie() {
  return (
    <div>
      <Lottie animationData={Title} loop={true} />
    </div>
  );
}
