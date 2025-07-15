import React from "react";
import "../Skills/Skills.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Skills() {
  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>Skills</h1>
      </div>
      <div className="skills-container">
        <div className="technical-section">
          <h2 className="sub-title1">Technical Skills</h2>
          <div className="technical">
            <div className="skill">
              <i className="bx bxl-html5"></i>
              <span className="tooltip">HTML5</span>
            </div>
            <div className="skill">
              <i className="bx bxl-vuejs"></i>
              <span className="tooltip">VUE</span>
            </div>
            <div className="skill">
              <i className="bx bxl-bootstrap"></i>
              <span className="tooltip">BOOTSTRAP</span>
            </div>
            <div className="skill">
              <i className="bx bxs-certification"></i>
              <span className="tooltip">AZURE</span>
            </div>
            <div className="skill">
              <i className="bx bxs-data"></i>
              <span className="tooltip">SQL</span>
            </div>
            <div className="skill">
              <i className="bx bxl-css3"></i>
              <span className="tooltip">CSS</span>
            </div>
            <div className="skill">
              <i className="bx bxl-javascript"></i>
              <span className="tooltip">JAVASCRIPT</span>
            </div>
            <div className="skill">
              <i className="bx bxl-react"></i>
              <span className="tooltip">REACT</span>
            </div>
            <div className="skill">
              <i className="bx bxl-typescript"></i>
              <span className="tooltip">TYPESCRIPT</span>
            </div>
            <div className="skill">
              <i className="fab fa-node-js"></i>
              <span className="tooltip">NODE</span>
            </div>
            <div className="skill">
              <i className="fab fa-figma"></i>
              <span className="tooltip">FIGMA</span>
            </div>
            <div className="skill">
              <i className="fas fa-code"></i>
              <span className="tooltip">C#</span>
            </div>
          </div>
        </div>

        <div className="soft-skills">
          <h2 className="sub-title2">Soft Skills</h2>
          <ul className="list">
            <li>Creativity</li>
            <li>Communication</li>
            <li>Analytical Thinking</li>
            <li>Team Player</li>
            <li>Time Management</li>
            <li>Inquisitive</li>
            <li>Problem Solver</li>
            <li>Resilience</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
