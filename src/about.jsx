import React, { useState } from "react";
import "./about.css";
import Lorelie1 from "./assets/Lorelie1.jpg";
import Lorelie2 from "./assets/Lorelie2.jpg";
import Lorelie3 from "./assets/Lorelie3.jpg";
import Lorelie4 from "./assets/Lorelie4.jpg";
import Lorelie5 from "./assets/Lorelie5.jpg";
import Lorelie7 from "./assets/Lorelie7.JPG";

export default function AboutPage() {
  const [expandedItem, setExpandedItem] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handlePortfolioClick = (index) => {
    setExpandedItem(index);
  };

  const handleClosePopup = () => {
    setExpandedItem(null);
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
      mainImg: Lorelie2,
      gallery: [Lorelie2, Lorelie7],
    },
    {
      title: "VHDL Projects",
      mainImg: Lorelie3,
      gallery: [Lorelie3, Lorelie7],
    },
    {
      title: "Portfolio Website",
      mainImg: Lorelie4,
      gallery: [Lorelie4],
    },
    {
      title: "Capstone Showcase",
      mainImg: Lorelie5,
      gallery: [Lorelie5, Lorelie1],
    },
  ];

  return (
    <div className="page-container">
      <header className="header">
        <div className="logo">Lorelie Delcano Canete - Computer Engineering Student</div>
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
          Let's be friends!
        </a>
      </section>

      <section className="intro">
        <div className="text">
          <h2>Hi, I'm Lorelie!</h2>
          <p>
            I’m passionate about combining technology and creativity to build innovative, 
            hands-on solutions. With a background in Computer Engineering, I am proficient 
            in Python, C++, and React, and enjoy working on responsive web apps and full-stack 
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
        <div className="image">
          <img src={Lorelie5} alt="Lorelie random pic" />
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
          <div
            key={index}
            className="portfolio-item"
            onClick={() => handlePortfolioClick(index)}
          >
            <img src={item.mainImg} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </section>

      {expandedItem !== null && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h3>{portfolioItems[expandedItem].title}</h3>
            <div className="popup-gallery">
              {portfolioItems[expandedItem].gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${portfolioItems[expandedItem].title} ${i + 1}`}
                  style={{ width: "120px", height: "120px", objectFit: "cover", margin: "5px" }}
                />
              ))}
            </div>
            <button onClick={handleClosePopup} className="cta-button">Close</button>
          </div>
        </div>
      )}

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