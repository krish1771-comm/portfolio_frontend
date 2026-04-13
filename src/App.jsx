import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import ContactForm from './components/ContactForm.jsx';

export default function App() {
  return (
    <main>
      {/* Navigation Bar */}
      <nav className="navbar glass-panel">
        <div className="container nav-container">
          <div className="logo gradient-text">KS</div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Sections */}
      <Hero />
      <About />
      <Projects />
      <ContactForm />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Designed & Built by Krish Sojitra &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}
