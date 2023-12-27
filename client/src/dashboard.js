import React from "react";
import "./App.css";
import backgroundVideo from "./images/background-video.mp4"; // Correct import statement
import Header from "./header";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />{" "}
        </video>
        <div className="centered-container">
          <div className="headline">
            <h1>THE LEADING REAL ESTATE REALTY IN GHANA</h1>
          </div>
        </div>
      </div>
    </>
  );
}
