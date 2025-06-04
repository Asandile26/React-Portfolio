import React from "react";
import "./Intro.css";
import profile from "../../assets/Profile.jpg";

function Intro() {
  return (
    <div id="home" className="intro">
      <img src={profile} alt="profile" />
      <h1>I'm Asandile Langeni, Fullstack developer</h1>
      <p>
        I am a fullstack developer with a year working experience as fullstack
        developer{" "}
      </p>
      <div className="intro-action">
        <a
          href="https://drive.google.com/file/d/1kifeqib-6y1A1xgbDz5uDmIG-cHB7xZv/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className="intro-resume">My Resume</div>
        </a>
      </div>
    </div>
  );
}

export default Intro;
