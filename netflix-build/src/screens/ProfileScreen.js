import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        {/* <hr /> */}
        <div className="profileScreen__info">
          <img
            src="https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button className="profileScreens__signOut" onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
