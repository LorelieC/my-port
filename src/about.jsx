import React, { useEffect, useRef, useState } from "react";
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

export default function AboutPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [introImageIndex, setIntroImageIndex] = useState(0);
  const [portfolioImageIndexes, setPortfolioImageIndexes] = useState([0, 0, 0, 0]);
  const certImages = [Cert1, Cert2, Cert3];
  const [certIndex, setCertIndex] = useState(0);
  const introImages = [Lorelie5, Lorelie4, Lorelie3];
  const binaryCanvasRef = useRef(null);
  const [activeSkill, setActiveSkill] = useState(null);

  const toggleSkill = (index) => {
    setActiveSkill((prevIndex) => (prevIndex === index ? null : index));
  };

  const skills = [
    {
      title: "Web design",
      description: "“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”",
      doc: null
    },
    {
      title: "Web development",
      description: "If you are an entrepreneur, you know that your success cannot depend on the opinions of others.",
      doc: null
    },
    {
      title: "Social Media",
      description: "Do you want to be even more successful? Learn to love learning and growth.",
      doc: null
    },
    {
      title: "Branding",
      description: "Hypnosis quit smoking methods caused quite a stir in the medical world. There is a lot of argument.",
      doc: null
    },
    {
      title: "Illustration",
      description: "Do you sometimes have the feeling that you’re running into the same obstacles over and over?",
      doc: null
    },
    {
      title: "Marketing",
      description: "You've heard the expression, 'Just believe it and it will come.' Believing is not just thinking that.",
      doc: null
    },
  ];

  useEffect(() => {
    const canvas = binaryCanvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

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
          particles.push({
            x: Math.random() * marginWidth,
            y: i * rowHeight + 20,
            speed: 0.8 + Math.random() * 1.2,
            digit: Math.round(Math.random()).toString(),
            side: "left",
          });
        }
        for (let j = 0; j < perMargin; j++) {
          particles.push({
            x: window.innerWidth - marginWidth + Math.random() * marginWidth,
            y: i * rowHeight + 20,
            speed: 0.8 + Math.random() * 1.2,
            digit: Math.round(Math.random()).toString(),
            side: "right",
          });
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = "rgba(80, 120, 80, 0.33)";
      const marginWidth = getMarginWidth();

      particles.forEach(particle => {
        ctx.fillText(particle.digit, particle.x, particle.y);
        particle.x += particle.speed;
        if (particle.side === "left") {
          if (particle.x > marginWidth - fontSize) {
            particle.x = -Math.random() * marginWidth * 0.2;
            particle.digit = Math.round(Math.random()).toString();
          }
        } else {
          if (particle.x > window.innerWidth - fontSize) {
            particle.x = window.innerWidth - marginWidth + Math.random() * -marginWidth * 0.2;
            particle.digit = Math.round(Math.random()).toString();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    }

    initParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      initParticles();
    });

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleIntroNext = () => {
    setIntroImageIndex((prevIndex) => (prevIndex + 1) % introImages.length);
  };

  const handleIntroPrev = () => {
    setIntroImageIndex((prevIndex) => (prevIndex - 1 + introImages.length) % introImages.length);
  };

  const handlePortfolioNext = (index) => {
    setPortfolioImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] = (newIndexes[index] + 1) % portfolioItems[index].gallery.length;
      return newIndexes;
    });
  };

  const handlePortfolioPrev = (index) => {
    setPortfolioImageIndexes((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[index] = (newIndexes[index] - 1 + portfolioItems[index].gallery.length) % portfolioItems[index].gallery.length;
      return newIndexes;
    });
  };

  const handleCertNext = () => {
    setCertIndex((prevIndex) => (prevIndex + 1) % certImages.length);
  };

  const handleCertPrev = () => {
    setCertIndex((prevIndex) => (prevIndex - 1 + certImages.length) % certImages.length);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Message from Portfolio Contact Form");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:loriedelcano@gmail.com?subject=${subject}&body=${body}`;
  };

  const portfolioItems = [
    {
      title: "Electronics Circuit Project",
      gallery: [IMG_4845, IMG_4777, IMG_4776, IMG_4762, IMG_4754, IMG_4753],
    },
    {
      title: "Reaserch NOAH",
      gallery: [IMG_3855, IMG_3856, IMG_3854],
    },
    {
      title: "Trailone -Software Design Project",
      gallery: [IMG_3889],
    },
    {
      title: "BCD-7 Segments",
      gallery: [IMG_3873, IMG_3871, IMG_3870, IMG_3869],
    },
  ];

  return (
    <>
      <div className="binary-bg">
        <canvas ref={binaryCanvasRef} id="binary-canvas"></canvas>
      </div>
      <div className="page-container">
        <header className="header">
          <div className="logo">Lorelie Delcano Canete</div>
        </header>
        <section className="hero">
          <img className="profile-pic" src={Lorelie1} alt="Lorelie Canete" />
          <h1>Computer Engineer Meets Innovative Future</h1>
          <a href="https://www.facebook.com/LorelieDelcano" target="_blank" rel="noopener noreferrer" className="cta-button">
            Let's connect!
          </a>
        </section>
        <section className="intro">
          <div className="text">
            <h2>Hi, I'm Lorelie!</h2>
            <p>
              I’m passionate about combining technology and creativity to build innovative, hands-on solutions. With a background in Computer Engineering, I am proficient in VHDL, Python, C++, and React, and enjoy working on responsive web apps and full-stack projects. I also focus on UI/UX design to create intuitive, user-friendly interfaces. As a working student, I am constantly striving to balance my studies and practical experience, demonstrating dedication and resilience. These experiences showcase my commitment to developing practical, user-centered technology.
            </p>
            <h3>Core Interests</h3>
            <p>
              I'm passionate about leveraging technology and creativity to build innovative solutions. With a background in Computer Engineering, I enjoy working on both technical and user-focused projects.
            </p>
          </div>
          <div className="image" style={{ position: "relative", width: "100%", maxWidth: "400px" }}>
            <img src={introImages[introImageIndex]} alt="Lorelie slideshow pic" style={{ width: "100%", height: "550px", objectFit: "cover", borderRadius: "8px" }} />
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
              <img src={item.gallery[portfolioImageIndexes[index]]} alt={item.title} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} />
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
  <div className="skills-grid">
    {skills.map((skill, index) => (
      <div key={index} className="skill-card" onClick={() => toggleSkill(index)}>
        <h3>{skill.title}</h3>
        <p>{skill.description}</p>
        {activeSkill === index && (
          <div className="skill-doc">
            {skill.doc ? (
              <a href={skill.doc} target="_blank" rel="noopener noreferrer">📎 View Document</a>
            ) : (
              <span>No document available.</span>
            )}
          </div>
        )}
      </div>
    ))}
  </div>
</section>
        <section className="contact">
          <h2>Let's Connect!</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
            <textarea name="message" placeholder="Your message..." rows="5" value={formData.message} onChange={handleInputChange} required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
        <footer className="footer">
          <p>© 2025 Lorelie D. Canete. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
