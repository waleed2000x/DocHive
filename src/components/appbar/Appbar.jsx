import { Link } from "react-router-dom";
import UserButton from "./UserButton";
import User from "./User";

export default function Appbar() {
  return (
    <div className="appbar">
      <div className="appbar-center">
        <Link to="/">
          <h1>
            Doc<span>Hive</span>
          </h1>
        </Link>
        <User />
        <div className="nav-items">
          <UserButton />
        </div>
      </div>
    </div>
  );
}
