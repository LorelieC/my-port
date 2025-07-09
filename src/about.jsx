import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./about.css";

import Lorelie1 from "./assets/Lorelie1.jpg";
import Lorelie2 from "./assets/Lorelie2.jpg";
import Lorelie3 from "./assets/Lorelie3.jpg";
import Lorelie4 from "./assets/Lorelie4.jpg";
import Lorelie5 from "./assets/Lorelie5.jpg";
import Lorelie7 from "./assets/Lorelie7.JPG";

import Cert1 from "./assets/cert1.png";
import Cert2 from "./assets/cert2.png";
import Cert3 from "./assets/cert3.png";

import IMG_3854 from "./assets/IMG_3854.jpg";
import IMG_3855 from "./assets/IMG_3855.jpg";
import IMG_3856 from "./assets/IMG_3856.jpg";
import IMG_3869 from "./assets/IMG_3869.jpg";
import IMG_3870 from "./assets/IMG_3870.jpg";
import IMG_3871 from "./assets/IMG_3871.jpg";
import IMG_3873 from "./assets/IMG_3873.jpg";
import IMG_3889 from "./assets/IMG_3889.jpg";
import IMG_4753 from "./assets/IMG_4753.jpg";
import IMG_4754 from "./assets/IMG_4754.jpg";
import IMG_4762 from "./assets/IMG_4762.jpg";
import IMG_4776 from "./assets/IMG_4776.jpg";
import IMG_4777 from "./assets/IMG_4777.jpg";
import IMG_4845 from "./assets/IMG_4845.jpg";
import IMG_3836 from "./assets/IMG_3836.jpg";
import IMG_3837 from "./assets/IMG_3837.jpg";
import IMG_3838 from "./assets/IMG_3838.jpg";
import IMG_3839 from "./assets/IMG_3839.jpg";
import IMG_3840 from "./assets/IMG_3840.jpg";
import IMG_3843 from "./assets/IMG_3843.jpg";

import ResumePDF from "./assets/dummy.pdf";

export default function AboutPage() {
  const portfolioItems = [
    { title: "Electronics Circuit Project", gallery: [IMG_4845, IMG_4777, IMG_4776, IMG_4762, IMG_4754, IMG_4753] },
    { title: "Research NOAH", gallery: [IMG_3855, IMG_3856, IMG_3854] },
    { title: "Trailone – Software Design Project", gallery: [IMG_3889] },
    { title: "BCD‑7 Segments", gallery: [IMG_3873, IMG_3871, IMG_3870, IMG_3869] },
    { title: "ComArch Project (ALU)", gallery: [IMG_3840, IMG_3836, IMG_3838, IMG_3837] },
    { title: "VHDL Project", gallery: [IMG_3873, IMG_3871, IMG_3870, IMG_3869] },
    { title: "Logic and Circuit Project", gallery: [IMG_3873, IMG_3871, IMG_3870, IMG_3869] },
    { title: "Data Structure Project", gallery: [IMG_3873, IMG_3871, IMG_3870, IMG_3869] }
  ];

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [introImageIndex, setIntroImageIndex] = useState(0);
  const [portfolioImageIndexes, setPortfolioImageIndexes] = useState(Array(portfolioItems.length).fill(0));
  const [certIndex, setCertIndex] = useState(0);
  const [activeSkill, setActiveSkill] = useState(null);
  const [showResume, setShowResume] = useState(false);

  const binaryCanvasRef = useRef(null);

  const [gridVisible, setGridVisible] = useState(false);
  let gridTimeoutId = useRef(null);

  useEffect(() => {
  const handleMouseMove = () => {
    setGridVisible(true);
    if (gridTimeoutId.current) clearTimeout(gridTimeoutId.current);
    gridTimeoutId.current = setTimeout(() => {
      setGridVisible(false);
    }, 2000);
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    if (gridTimeoutId.current) clearTimeout(gridTimeoutId.current);
  };
}, []);

  const introImages = [Lorelie5, Lorelie4, Lorelie3];
  const certImages = [Cert1, Cert2, Cert3];
  const skills = [
  {
    title: "HTML",
    description: "Proficient in crafting structured, semantic, and accessible web pages using HTML5. Experienced in building responsive layouts and integrating multimedia, forms, and links for dynamic web applications."
  },
  {
    title: "MySQL",
    description: "Skilled in designing, querying, and managing relational databases, ensuring data integrity, performance, and scalability in full‑stack applications."
  },
  {
    title: "React",
    description: "Experienced in building dynamic, responsive user interfaces and modular front‑end components that enhance user experience and application performance."
  },
  {
    title: "C++",
    description: "Proficient in writing efficient, high‑performance code for systems programming and algorithm‑intensive applications with a strong grasp of object‑oriented principles."
  },
  {
    title: "Python",
    description: "Capable of developing robust scripts, automation tools, and data‑driven applications using clean, readable code and a vast ecosystem of libraries."
  },
  {
    title: "VHDL",
    description: "Adept at designing and simulating digital circuits using VHDL, with experience in behavioral, structural, and RTL modeling for embedded and FPGA systems."
  },
  {
    title: "Cybersecurity & Penetration Testing",
    description: "Skilled in ethical hacking and system protection using Linux-based systems, TryHackMe labs, and command-line tools like Sudo for privilege escalation. Experienced in secure coding, threat modeling, and vulnerability assessment with a user-focused approach to digital defense."
  },
  {
    title: "2D AutoCAD",
    description: "Experienced in creating precise 2D technical drawings and schematics using AutoCAD. Knowledgeable in layout planning, dimensioning, layering, and drafting standards for engineering and architectural designs."
  },
  {
    title: "Digital Logic Design",
    description: "Well-versed in designing combinational and sequential circuits using logic gates, multiplexers, decoders, flip-flops, and counters, including circuit simplification using Karnaugh maps."
  },
  {
    title: "Multisim Simulation",
    description: "Experienced in using Multisim for simulating analog and digital circuits, verifying logic designs, and analyzing behavior using virtual instruments."
  },
  {
    title: "PCB Design",
    description: "Familiar with printed circuit board (PCB) design principles, including schematic capture, layout routing, component placement, and exporting Gerber files for fabrication using tools like Eagle or KiCad."
  }
];

  useEffect(() => {
    const canvas = binaryCanvasRef.current;
    const ctx = canvas.getContext("2d");

    function getMarginWidth() {
      const container = document.querySelector(".page-container");
      if (!container) return 0;
      const pageWidth = container.offsetWidth;
      return (window.innerWidth - pageWidth) / 2;
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener("resize", resize);

    const fontSize = 18;
    let particles = [];

    function initParticles() {
      particles = [];
      const marginWidth = getMarginWidth();
      const rowHeight = fontSize * 1.5;
      const numRows = Math.floor(canvas.height / rowHeight);
      const perMargin = Math.max(1, Math.floor(marginWidth / fontSize / 1.2));

      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < perMargin; j++) {
          particles.push({ x: Math.random() * marginWidth, y: i * rowHeight + 20, speed: 0.8 + Math.random() * 1.2, digit: Math.round(Math.random()).toString(), side: "left" });
        }
        for (let j = 0; j < perMargin; j++) {
          particles.push({ x: window.innerWidth - marginWidth + Math.random() * marginWidth, y: i * rowHeight + 20, speed: 0.8 + Math.random() * 1.2, digit: Math.round(Math.random()).toString(), side: "right" });
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = "rgba(80,120,80,0.33)";

      particles.forEach(p => {
        ctx.fillText(p.digit, p.x, p.y);
        p.x += p.speed;
        const marginWidth = getMarginWidth();
        if (p.side === "left" && p.x > marginWidth - fontSize) {
          p.x = -Math.random() * marginWidth * 0.2;
          p.digit = Math.round(Math.random()).toString();
        }
        if (p.side === "right" && p.x > window.innerWidth - fontSize) {
          p.x = window.innerWidth - marginWidth + Math.random() * -marginWidth * 0.2;
          p.digit = Math.round(Math.random()).toString();
        }
      });

      requestAnimationFrame(draw);
    }

    initParticles();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const toggleSkill = i => setActiveSkill(prev => (prev === i ? null : i));
  const handleIntroNext = () => setIntroImageIndex(i => (i + 1) % introImages.length);
  const handleIntroPrev = () => setIntroImageIndex(i => (i - 1 + introImages.length) % introImages.length);

  const handlePortfolioNext = idx =>
    setPortfolioImageIndexes(prev => {
      const n = [...prev];
      n[idx] = (n[idx] + 1) % portfolioItems[idx].gallery.length;
      return n;
    });

  const handlePortfolioPrev = idx =>
    setPortfolioImageIndexes(prev => {
      const n = [...prev];
      n[idx] = (n[idx] - 1 + portfolioItems[idx].gallery.length) % portfolioItems[idx].gallery.length;
      return n;
    });

  const handleCertNext = () => setCertIndex(i => (i + 1) % certImages.length);
  const handleCertPrev = () => setCertIndex(i => (i - 1 + certImages.length) % certImages.length);

  const handleInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent("Message from Portfolio Contact Form");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:loriedelcano@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="binary-bg">
        <canvas ref={binaryCanvasRef} id="binary-canvas" />
      </div>

      <div className="page-container">
        <nav className="inline-nav">
          <Link to="/" className="nav-button">
            Home <span className="arrow" />
          </Link>
          <button type="button" className="nav-button" onClick={() => setShowResume(true)}>
            Resume <span className="arrow" />
          </button>
        </nav>

      <header className="header split-name-header" style={{ position: "relative", overflow: "hidden" }}>
        <div
          className="background-grid"
          style={{
            opacity: gridVisible ? 1 : 0,
            transition: "opacity 0.3s ease",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
        <div className="name-row top-name" style={{ position: "relative", zIndex: 1 }}>LORELIE</div>
        <div className="name-row bottom-name" style={{ position: "relative", zIndex: 1 }}>CANETE</div>
      </header>

        <section className="hero">
          <img className="profile-pic" src={Lorelie1} alt="Lorelie Canete" />
          <h1 className="hero-title">Securing Innovation Where Engineering Meets Cyber Defense</h1>
          <a href="https://www.linkedin.com/in/lorelie-canete-485254373/" target="_blank" rel="noopener noreferrer" className="cta-button">
            Let's connect!
          </a>
        </section>

        <section className="intro">
          <div className="text">
            <h2 style={{ marginBottom: "1rem", fontSize: "1.75rem" }}>Hi, I'm Lorelie!</h2>
            <p style={{ marginBottom: "1.5rem", textAlign: "justify", fontSize: "1rem" }}>
              Driven by a deep passion for cybersecurity, I am committed to leveraging technology and creativity to develop innovative, real‑world solutions that protect digital systems and data. With a strong foundation in computer engineering, I specialize in designing secure, scalable applications and full‑stack projects that prioritize both performance and protection. I place a high value on intuitive UI/UX design, ensuring that every solution is not only robust but also user‑friendly. As a working student, I have learned to balance rigorous academic demands with hands‑on experience, consistently demonstrating resilience, adaptability, and a drive to translate theoretical knowledge into practical impact. My journey reflects a clear dedication to advancing cybersecurity through thoughtful, user‑centered design and implementation.
            </p>
            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.6rem" }}>Core Interests</h3>
            <p style={{ textAlign: "justify", fontSize: "1rem" }}>
              Aside from honing my skills in school, I am deeply passionate about traveling, seeking out new places, and immersing myself in different cultures. I thrive on adventure and enjoy activities that push me out of my comfort zone, whether it’s hiking in nature, trying something new, or exploring the unknown. Motor rides are another core interest of mine; there’s something exhilarating about hitting the open road and experiencing the freedom and excitement that comes with every journey. These interests fuel my curiosity and drive for personal growth, making life outside of academics both vibrant and fulfilling.
            </p>
          </div>

          <div className="image" style={{ position: "relative", width: "100%", maxWidth: "400px" }}>
            <img src={introImages[introImageIndex]} alt="Lorelie slideshow pic" style={{ width: "100%", height: "620px", objectFit: "cover", borderRadius: "8px" }} />
            <button onClick={handleIntroPrev} style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", background: "transparent", color: "rgba(0,0,0,0.2)", border: "none", cursor: "pointer", fontSize: "24px", fontWeight: "bold" }}>❮</button>
            <button onClick={handleIntroNext} style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", background: "transparent", color: "rgba(0,0,0,0.2)", border: "none", cursor: "pointer", fontSize: "24px", fontWeight: "bold" }}>❯</button>
          </div>
        </section>

        <section className="testimonial">
          <blockquote>“Run the Race of Life at Your Own Pace.”</blockquote>
          <cite>– Lailah Gifty Akita</cite>
        </section>

        <section className="portfolio">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-item" style={{ position: "relative", maxWidth: "300px" }}>
              <img src={item.gallery[portfolioImageIndexes[index]]} alt={item.title} style={{ width: "100%", height: "275px", objectFit: "cover", borderRadius: "8px" }} />
              <button onClick={() => handlePortfolioPrev(index)} style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)", background: "transparent", color: "rgba(0,0,0,0.2)", border: "none", cursor: "pointer", fontSize: "24px", fontWeight: "bold" }}>❮</button>
              <button onClick={() => handlePortfolioNext(index)} style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", background: "transparent", color: "rgba(0,0,0,0.2)", border: "none", cursor: "pointer", fontSize: "24px", fontWeight: "bold" }}>❯</button>
              <p>{item.title}</p>
            </div>
          ))}
        </section>

        <section className="cert-library">
          <h2>Certificates & Achievements</h2>
          <div style={{ position: "relative", maxWidth: "1100px", margin: "0 auto" }}>
            <img src={certImages[certIndex]} alt={`Certificate ${certIndex + 1}`} style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "8px" }} />
            <button onClick={handleCertPrev} style={{ position: "absolute", top: "50%", left: "10px", transform: "translateY(-30%)", background: "transparent", color: "rgba(0,0,0,0.2)", border: "none", cursor: "pointer", fontSize: "24px", fontWeight: "bold" }}>❮</button>
            <button onClick={handleCertNext} style={{ position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)", background: "transparent", color: "rgba(0,0,0,0.2)", border: "none", cursor: "pointer", fontSize: "24px", fontWeight: "bold" }}>❯</button>
          </div>
        </section>

        <section className="skills-section">
          <h2>My Skills & Focus Areas</h2>
          <div className="skills-list">
            {skills.map((skill, index) => {
              const headerShade = 230 - index * 3;
              const bodyShade = 225 - index * 3;
              const clamp = (v, min = 210) => Math.max(v, min);
              return (
                <div key={index} className="skill-card" onClick={() => toggleSkill(index)}>
                  <div className="skill-header" style={{ backgroundColor: `rgb(${clamp(headerShade)},${clamp(headerShade)},${clamp(headerShade)})`, color: "#000" }}>
                    {skill.title}
                  </div>
                  <div className="skill-body" style={{ backgroundColor: `rgb(${clamp(bodyShade)},${clamp(bodyShade - 5)},255)` }}>
                    <p>{skill.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="contact">
          <h2>Contact Me!</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
            <textarea name="message" placeholder="Your message..." rows="5" value={formData.message} onChange={handleInputChange} required />
            <button type="submit">Send</button>
          </form>
        </section>

        <footer className="footer">
          <p>© 2025 Lorelie D. Canete. All rights reserved.</p>
        </footer>
      </div>

      {showResume && (
        <div className="pdf-modal">
          <button className="close-btn" onClick={() => setShowResume(false)}>×</button>
          <object data={ResumePDF} type="application/pdf" width="100%" height="100%">
            <p>
              PDF preview unavailable. <a href={ResumePDF} target="_blank" rel="noopener noreferrer">Download instead.</a>
            </p>
          </object>
        </div>
      )}
    </>
  );
}
