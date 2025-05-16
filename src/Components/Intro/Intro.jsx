import React from "react";
import "./Intro.css";
import profile from "../../assets/Profile.jpg";

function Intro() {
  return (
    <div className="intro">
      <img src={profile} alt="profile" />
      <h1>I'm Asandile Langeni, Fullstack developer</h1>
      <p>
        I am a fullstack developer with a year working experience as fullstack
        developer{" "}
      </p>
      <div className="intro-ation">
        <div className="intro-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Intro;
