import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";

function homeScreen() {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Nav />

      

      {/* Banner  Ads */}
      <Banner />

      {/* Row  for showcasing shows*/}
    </div>
  );
}

export default homeScreen;
