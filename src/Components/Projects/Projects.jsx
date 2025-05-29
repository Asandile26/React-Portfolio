import React from "react";
import "../Projects/project.css";
import projects from "../../assets/ProjectsData";

function Projects() {
  return (
    <div id="projects" className="my-projects">
      <div className="project-title">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={`Project: ${project.title}`} />
            <div className="project-info">
              <h2>{project.title}</h2>
              <div className="buttons">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>Live Demo</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
