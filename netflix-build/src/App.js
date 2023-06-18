import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        //logged in
      }else{
        //logged out
      }
    })

    return unsubscribe;

  },[]);

  return (
    <div className="App">
      <Router>
        {!user ? (<LoginScreen />) : (
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
