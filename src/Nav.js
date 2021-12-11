import React, { useEffect, useState } from "react";
import logo from "./netflixlogo.png";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <Link className={`nav ${show && "nav_black"}`} to={"/"}>
      <img className="nav_logo" src={logo} alt="Netflix logo" />
    </Link>
  );
}

export default Nav;
