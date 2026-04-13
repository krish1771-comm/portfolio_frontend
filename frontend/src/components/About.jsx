import React from 'react';
import './About.css';

export default function About() {
  const skills = [
    'JavaScript (ES6+)',
    'React.js',
    'Node.js',
    'Express.js',
    'HTML5 & CSS3',
    'Bootstrap',
    'Git & GitHub'
  ];

  return (
    <section id="about" className="section container">
      <h2 className="section-title gradient-text">About Me</h2>

      <div className="about-content">

        <div className="about-text">
          <p>
            Hello, I'm <strong>Krish</strong>, a dedicated and enthusiastic 
            <strong> Full Stack Web Developer</strong> with a passion for building 
            modern, responsive, and high-performance web applications.
          </p>

          <p>
            I started my journey with <strong>HTML & CSS</strong> and gradually expanded 
            my skills into <strong>JavaScript</strong> and full-stack development. 
            I enjoy transforming ideas into real-world applications.
          </p>

          <p>
            I have worked on projects such as <strong>Smart Attendance Systems</strong>, 
            <strong> Management Systems</strong>, and <strong>Portfolio Websites</strong>, 
            focusing on clean UI, scalability, and performance.
          </p>

          <p>
            My goal is to continuously learn new technologies and build impactful digital solutions.
          </p>

          <p><strong>Technologies I work with:</strong></p>

          <ul className="skills-list">
            {skills.map(skill => (
              <li key={skill} className="skill-item">▹ {skill}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}