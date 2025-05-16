import React from "react";
import "./About.css";
import Profile from "../../assets/Profile.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={Profile} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a bachelor of Commerce graduate who majored in Information
              Systems. I learnt a lot about solving business problems and having
              holistic ideas before coding
            </p>
            <p>
              I also have web development certifcate from Life Choices Academy
              where I got the feel to code and make apps{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
