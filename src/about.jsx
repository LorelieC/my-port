import React, { useState } from "react";
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

export default function AboutPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [introImageIndex, setIntroImageIndex] = useState(0);
  const [portfolioImageIndexes, setPortfolioImageIndexes] = useState([0, 0, 0, 0]);
  const certImages = [Cert1, Cert2, Cert3];
  const [certIndex, setCertIndex] = useState(0);
  const introImages = [Lorelie5, Lorelie4, Lorelie3];

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
      title: "UI Wireframes",
      gallery: [Lorelie2, Lorelie7],
    },
    {
      title: "VHDL Projects",
      gallery: [Lorelie3, Lorelie7],
    },
    {
      title: "Portfolio Website",
      gallery: [Lorelie4],
    },
    {
      title: "Capstone Showcase",
      gallery: [Lorelie5, Lorelie1],
    },
  ];

  return (
    <div className="page-container">
      <header className="header">
        <div className="logo">Lorelie Delcano Canete</div>
      </header>

      <section className="hero">
        <img className="profile-pic" src={Lorelie1} alt="Lorelie Canete" />
        <h1>Computer Engineer Meets Innovative Future</h1>
        <a
          href="https://www.facebook.com/your.facebook.LorelieDelcano"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Let's connect!
        </a>
      </section>

      <section className="intro">
        <div className="text">
          <h2>Hi, I'm Lorelie!</h2>
          <p>
            I’m passionate about combining technology and creativity to build innovative,
            hands-on solutions. With a background in Computer Engineering, I am proficient
            in VHDL, Python, C++, and React, and enjoy working on responsive web apps and full-stack
            projects. I also focus on UI/UX design to create intuitive, user-friendly interfaces.
            As a working student, I am constantly striving to balance my studies and practical
            experience, demonstrating dedication and resilience. These experiences showcase my
            commitment to developing practical, user-centered technology.
          </p>
          <h3>Core Interests</h3>
          <p>
            I'm passionate about leveraging technology and creativity to build innovative
            solutions. With a background in Computer Engineering, I enjoy working on both
            technical and user-focused projects.
          </p>
        </div>
        <div className="image" style={{ position: "relative", width: "100%", maxWidth: "400px" }}>
          <img
            src={introImages[introImageIndex]}
            alt="Lorelie slideshow pic"
            style={{ width: "100%", height: "550px", objectFit: "cover", borderRadius: "8px" }}
          />
          <button
            onClick={handleIntroPrev}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              background: "transparent",
              color: "rgba(0,0,0,0.2)",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            ❮
          </button>
          <button
            onClick={handleIntroNext}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              background: "transparent",
              color: "rgba(0,0,0,0.2)",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            ❯
          </button>
        </div>
      </section>

      <section className="testimonial">
        <blockquote>
          “Run the Race of Life at Your Own Pace.”
        </blockquote>
        <cite>– Lailah Gifty Akita</cite>
      </section>

      <section className="portfolio">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item" style={{ position: "relative", maxWidth: "300px" }}>
            <img
              src={item.gallery[portfolioImageIndexes[index]]}
              alt={item.title}
              style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }}
            />
            <button
              onClick={() => handlePortfolioPrev(index)}
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                background: "transparent",
                color: "rgba(0,0,0,0.2)",
                border: "none",
                cursor: "pointer",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              ❮
            </button>
            <button
              onClick={() => handlePortfolioNext(index)}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                background: "transparent",
                color: "rgba(0,0,0,0.2)",
                border: "none",
                cursor: "pointer",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              ❯
            </button>
            <p>{item.title}</p>
          </div>
        ))}
      </section>

      <section className="cert-library">
        <h2>Certificates & Achievements</h2>
        <div style={{ position: "relative", maxWidth: "950px", margin: "0 auto" }}>
          <img
            src={certImages[certIndex]}
            alt={`Certificate ${certIndex + 1}`}
            style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "8px" }}
          />
          <button
            onClick={handleCertPrev}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-30%)",
              background: "transparent",
              color: "rgba(0,0,0,0.2)",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            ❮
          </button>
          <button
            onClick={handleCertNext}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              background: "transparent",
              color: "rgba(0,0,0,0.2)",
              border: "none",
              cursor: "pointer",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            ❯
          </button>
        </div>
      </section>

      <section className="testimonial">
        <blockquote>
          “Her attention to detail and passion for excellence elevated our team project.
          Lorelie is a natural leader and innovator.”
        </blockquote>
        <cite>– Engineering Classmate</cite>
      </section>

      <section className="contact">
        <h2>Let's Connect!</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message..."
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2025 Lorelie D. Canete. All rights reserved.</p>
      </footer>
    </div>
  );
}
  