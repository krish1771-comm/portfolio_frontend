import React from 'react';
import './Projects.css';

export default function Projects() {
  const customProjects = [
  {
    title: "Intelligent Attendance Tracking System",
    description:
      "A full-stack attendance management system with QR and face recognition, featuring real-time tracking, secure authentication, and an admin dashboard for monitoring student and faculty attendance.",
    tags: ["React.js", "Node.js", "MongoDB", "JWT", "Socket.io"],
    link: "#"
  },
  {
    title: "Workforce Management & Employee Portal",
    description:
      "A dynamic web application to manage employee data, roles, and tasks with secure login, CRUD operations, and a responsive interface for efficient workforce management.",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    link: "#"
  },
  {
    title: "Smart PC Builder & Online Ordering Platform",
    description:
      "An interactive platform that allows users to build customized PCs, place and track orders, and receive email notifications, with a powerful admin panel for managing products and users.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    link: "#"
  }
];

  return (
    <section id="projects" className="section container">
      <h2 className="section-title gradient-text">
        Projects I've Built
      </h2>

      <div className="projects-grid">
        {customProjects.map((project, idx) => (
          <div key={idx} className="project-card glass-panel">
            
            <div className="project-header">
              <div className="folder-icon">📁</div>
              <a href={project.link} className="external-link">↗</a>
            </div>

            <h3 className="project-title">{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech-list">
              {project.tags.map(tag => (
                <span key={tag} className="project-tech">
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}