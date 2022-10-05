import { useState } from "react";
import "./Navbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className="navbar-container">
      <a href="/">
        <img src="/images/logoOk2.png" height="100px" alt="ByYourTime" />
      </a>
      <div className="events" onClick={() => setIsClicked(!isClicked)}>Events<ArrowDropDownIcon />
      </div>
      {isClicked && (
        <>
          <div className="dropdown">
            <a href="/workshops">Workshops</a>
            <a href="/workshops">Workshops</a>
            <a href="/workshops">Workshops</a>
            <a href="/workshops">Workshops</a>
            <a href="/workshops">Workshops</a>
            <a href="/workshops">Workshops</a>
            <a href="/workshops">Workshops</a>
          </div>
        </>
      )}

      <a href="/blog">Blog</a>
      <a href="/newsletter">Newsletter</a>
      <ul>
        <li>
          <a href="/login" className="login">
            Login
          </a>
        </li>
        <li>|</li>
        <li>
          <a href="/register" className="register">
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
}
