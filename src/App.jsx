import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import profile from "./assets/Lorelie7.JPG";
import AboutPage from "./about";

function LandingPage() {
  const [gridVisible, setGridVisible] = useState(false);
  let timeoutId = null;

  useEffect(() => {
    const handleMouseMove = () => {
      setGridVisible(true);
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setGridVisible(false);
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="page-wrapper">
      <div className="background-grid" style={{ opacity: gridVisible ? 1 : 0 }}></div>

      <div className="container">
        <div className="header-section">
          <h1 className="name">Lorelie D. Canete</h1>
          <div className="image-container">
            <img src={profile} alt="Lorelie D. Canete" />
          </div>
        </div>

        <h2 className="portfolio-title">PORTFOLIO</h2>
        <p className="subtitle">Computer Engineering Student</p>

        <Link to="/about" className="about-me">
          About me
          <span className="arrow"></span>
        </Link>
      </div>
    </div>
  );
}
export default function App() {
  return (
    <Router basename="/my-port">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}