import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  // useEffect is a hook that runs a piece of code based on a specific condition
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src="https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
