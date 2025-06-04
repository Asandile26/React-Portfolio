import React from "react";
import "./skills.css";

function Skills() {
  return (
    <div id="skills" className="skills">
      <div className="skills-title">
        <h1>Skills</h1>
      </div>
      <div className="technical">
        <div className="skill">
          <i className="bx bxl-html5"></i>
        </div>
        <div className="skill">
          <i className="bx bxl-vuejs"></i>
        </div>
        <div className="skill">
          <i className="bx bxl-bootstrap"></i>
        </div>
        <div className="skill">
          {/* <i className="bx bxs-certification"></i> */}
        </div>
        <div className="skill">
          <i className="bx bxs-data"></i>
        </div>
        <div className="skill">
          <i className="bx bxl-css3"></i>
        </div>
        <div className="skill">
          <i className="bx bxl-javascript"></i>
        </div>
        <div className="skill">
          <i className="bx bxl-react"></i>
        </div>
        <div className="skill">
          <i className="bx bxl-typescript"></i>
        </div>
        <br />
        <div className="soft-skills">
          <div className="soft"></div>
          <div className="soft"></div>
          <div className="soft"></div>
          <div className="soft"></div>
          <div className="soft"></div>
          <div className="soft"></div>
          <div className="soft"></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
