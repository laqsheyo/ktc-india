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

  // Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Audio Toggle Logic
  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <main>
      <header>
        <h1 style={{ fontSize: '20px', margin: 0 }}>KTC India</h1>
        <nav>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="mailto:laqsheyo@gmail.com">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        {/* Layer 1: The Video (Muted for Autoplay) */}
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

        {/* Layer 2: Audio Control Button */}
        <button className="audio-toggle" onClick={handleToggleMute}>
          {isMuted ? "🔈 UNMUTE AUDIO" : "🔊 MUTE AUDIO"}
        </button>

        {/* Layer 3: Image Slider (No text here anymore) */}
        <div className="slider">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Slider Image"
              className={i === index ? "slide active" : "slide"}
            />
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section center">
        <h2>About KTC</h2>
        <p style={{ color: '#aaa', lineHeight: '1.6' }}>
          KTC is one of the first companies dedicated to display terminal products in China, 
          specializing in the manufacturing of flat panel display terminal products.
        </p>
        <img src="/images/about.jpeg" alt="About KTC" />
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="section center">
        <div style={{ marginBottom: '80px' }}>
          <h2>Smart Mirror Display Products</h2>
          <p>Innovative smart fitness and beauty mirrors for modern homes.</p>
          <img src="/images/mirror.jpeg" alt="Mirror Display" />
        </div>

        <div style={{ marginBottom: '80px' }}>
          <h2>Mobile Smart Displays</h2>
          <p>Portable smart screens and mobile TV entertainment.</p>
          <img src="/images/mobile.jpeg" alt="Mobile Display" />
        </div>

        <div style={{ marginBottom: '80px' }}>
          <h2>High-End TV Lineup</h2>
          <p>From 24 to 100 inches, delivering crystal clear visuals.</p>
          <img src="/images/tv.jpeg" alt="KTC TV" />
        </div>

        <div style={{ marginBottom: '80px' }}>
          <h2>Commercial & Medical Displays</h2>
          <p>Professional grade interactive panels and surgical displays.</p>
          <img src="/images/commercial.jpeg" alt="Commercial" />
          <img src="/images/medical.jpeg" alt="Medical" style={{ marginTop: '40px' }} />
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="section center">
        <h2>News Center</h2>
        <div className="news-item">
          <p>KTC Showcase AI Media Station powered by Qualcomm at CES 2026</p>
          <span>2026-01-05</span>
        </div>
        <div className="news-item">
          <p>AI Empowers the Future: KTC Technology at 2025 AI Device Expo</p>
          <span>2025-05-23</span>
        </div>
        <p style={{ color: '#666', marginTop: '20px', cursor: 'pointer' }}>View all news &gt;</p>
      </section>

      {/* CONTACT SECTION */}
      <section className="section center contact">
        <h2>Contact Us</h2>
        <form action="https://formsubmit.co/laqsheyo@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <textarea name="message" rows={5} placeholder="How can we help you?" required></textarea>
          <button type="submit" className="btn-submit">Send Inquiry</button>
        </form>
      </section>

      <footer style={{ padding: '40px', textAlign: 'center', borderTop: '1px solid #111', color: '#444' }}>
        <p>&copy; 2026 KTC India. All Rights Reserved.</p>
      </footer>
    </main>
  );
}