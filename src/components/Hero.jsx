import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <p className="hero-greeting">Hi, my name is</p>

          <h1 className="hero-name gradient-text">
            Krish Sojitra
          </h1>

          <h2 className="hero-role">
            Full Stack Web Developer
          </h2>

          <p className="hero-description">
            I build fast, responsive, and user-friendly web applications 
            using modern technologies. Passionate about turning ideas into 
            real-world digital experiences.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-circle"></div>

          <div className="hero-glass glass-panel">
            <code className="hero-code">
              {"<"}<span className="code-highlight">Developer</span> {"/>"}
            </code>
          </div>
        </div>

      </div>
    </section>
  );
}