import React from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="App">
      <Hero />
      <Experience />
      <TechStack />
      <Projects />
      <Certifications />
      <Contact />

      {/* Copyright/Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--glass-border)', color: '#666' }}>
        © {new Date().getFullYear()} Lontsi Hermann. All rights reserved.
      </footer>
    </div>
  );
}
