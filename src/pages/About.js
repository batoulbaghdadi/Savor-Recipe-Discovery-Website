import hero from "../assets/About.png";
import { useState } from "react";
import "../styles/About.css";

function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) {
      setError("Name is required.");
      return;
    }
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!message) {
      setError("Message is required.");
      return;
    }

    alert("Thank you for reaching out! Your message has been sent.");
    setEmail("");
    setName("");
    setMessage("");
    setError("");
  }

  return (
    <div className="about-container">
    
      <section className="about-hero">
        <div className="about-hero-text">
          <span className="about-badge">Our Story</span>
          <h1>Good food. Beautiful moments. Endless inspiration.</h1>
          <p className="about-subtext">
            Savor was built for passionate home cooks and food lovers seeking simple, wholesome, and nourishing recipes for every occasion.
          </p>
        </div>
        <div className="about-hero-image">
          <img src={hero} alt="Melon popsicle with fresh melon slices" />
        </div>
      </section>

      
      <section className="about-info-grid">
        <div className="info-card">
          <h2>Why SAVOR?</h2>
          <ul className="savor-list">
            <li>Discover simple and delicious new recipes</li>
            <li>Find daily inspiration for everyday meals</li>
            <li>Explore authentic culinary traditions and cuisines</li>
            <li>Make your cooking experience effortless and enjoyable</li>
          </ul>
        </div>

        <div className="info-card philosophy-card">
          <h2>Our Philosophy</h2>
          <p>
            We believe that food is far more than just a daily meal. It is an expression of creativity, a source of comfort, and the ultimate way to bring people together around the table.
          </p>
        </div>
      </section>

      
      <section className="contact-section">
        <div className="contact-card">
          <h2>Get in Touch</h2>
          <p className="contact-subtitle">Have a question or feedback? We’d love to hear from you.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                value={message}
                required
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write your message here"
              />
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="btn btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default About;