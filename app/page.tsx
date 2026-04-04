"use client";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const images = [
    "/images/banner.png",
    "/images/slide2.png",
    "/images/slide3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <main>
      <header>
        <h1 style={{ fontSize: '18px', letterSpacing: '1px' }}>KTC INDIA</h1>
        <nav>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="mailto:laqsheyo@gmail.com">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <button className="audio-toggle" onClick={toggleMute}>
          {isMuted ? "ALLOW AUDIO" : "MUTE AUDIO"}
        </button>

        <div className="slider-overlay">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i}`}
              className={i === index ? "slide active" : "slide"}
            />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section center">
        <h2>Global Display Solutions</h2>
        <p>
          KTC is a pioneer in the display industry, providing high-end flat panel 
          terminals for medical, commercial, and residential use worldwide.
        </p>
        <img src="/images/about.jpeg" alt="KTC Manufacturing" />
      </section>

      {/* PRODUCTS */}
      <section id="products" className="section center">
        <div style={{ marginBottom: '100px' }}>
          <h2>Smart Mirror Technology</h2>
          <p>The future of fitness and beauty displays.</p>
          <img src="/images/mirror.jpeg" alt="Smart Mirror" />
        </div>

        <div style={{ marginBottom: '100px' }}>
          <h2>Mobile Displays</h2>
          <p>Portable smart screens designed for modern mobility.</p>
          <img src="/images/mobile.jpeg" alt="Mobile Display" />
        </div>

        <div style={{ marginBottom: '100px' }}>
          <h2>Ultra HD TV Line</h2>
          <p>Immersive viewing experiences from 24 to 100 inches.</p>
          <img src="/images/tv.jpeg" alt="High Definition TV" />
        </div>

        <div>
          <h2>Commercial & Medical</h2>
          <p>Professional diagnostic and interactive display solutions.</p>
          <img src="/images/commercial.jpeg" alt="Commercial Display" />
          <img src="/images/medical.jpeg" alt="Medical Display" style={{ marginTop: '30px' }} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section center">
        <h2>Contact Us</h2>
        <p>Reach out for business inquiries and technical support.</p>
        <form action="https://formsubmit.co/laqsheyo@gmail.com" method="POST" className="contact-form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows={6} placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-submit">SEND MESSAGE</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2026 KTC INDIA TECHNOLOGY. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}