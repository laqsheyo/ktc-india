"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);

  const images = [
    "/images/banner.png",
    "/images/slide2.png",
    "/images/slide3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Slightly slower for better UX

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main>
      <header>
        <div className="logo">
          <h2 style={{ margin: 0 }}>KTC India</h2>
        </div>
        <nav>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="mailto:laqsheyo@gmail.com?subject=KTC Inquiry">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        
        {/* LAYER 1: VIDEO BACKGROUND */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* LAYER 2: IMAGE SLIDER */}
        <div className="slider">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Slide ${i}`}
              className={i === index ? "slide active" : "slide"}
            />
          ))}
        </div>

        {/* LAYER 3: OVERLAY TEXT */}
        <div className="hero-text">
          <h1>MINI LED TV</h1>
          <p>Ultra-large screen, ultimate immersion</p>
        </div>

      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section center">
        <h2>About KTC</h2>
        <p style={{ maxWidth: "800px", margin: "0 auto" }}>
          KTC is one of the first companies dedicated to display terminal products in China, 
          specializing in the manufacturing of flat panel display terminal products.
        </p>
        <img src="/images/about.jpeg" alt="About KTC" />
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products">
        <div className="section center">
          <h2>Smart Mirror Display Products</h2>
          <p>Fitness Mirrors, AR Beauty Mirrors, Rehabilitation Mirrors, and more.</p>
          <img src="/images/mirror.jpeg" alt="Smart Mirror" />
        </div>

        <div className="section center">
          <h2>Mobile Smart Display Products</h2>
          <p>Mobile smart screens and portable smart TV solutions.</p>
          <img src="/images/mobile.jpeg" alt="Mobile Display" />
        </div>

        <div className="section center">
          <h2>TV</h2>
          <p>Currently offering 16 sizes ranging from 24 inches to 100 inches.</p>
          <img src="/images/tv.jpeg" alt="KTC TV" />
        </div>

        <div className="section center">
          <h2>Commercial Displays</h2>
          <p>Interactive flat panels, signage monitors, and gaming monitors.</p>
          <img src="/images/commercial.jpeg" alt="Commercial Display" />
        </div>

        <div className="section center">
          <h2>Medical Displays</h2>
          <p>Diagnostic, Endoscopic, and Ultrasound Image Displays.</p>
          <img src="/images/medical.jpeg" alt="Medical Display" />
        </div>
      </section>

      {/* NEWS SECTION */}
      <section className="news center">
        <h2>News Center</h2>
        <div>
          <p>KTC and Consult Red Showcase AI Media Station at CES 2026</p>
          <span>2026-01-05</span>
        </div>
        <div>
          <p>KTC Technology Makes a Splash at 2025 Global AI Device Expo</p>
          <span>2025-05-23</span>
        </div>
        <div>
          <p>KTC Sweeps Three Prestigious Brand Building Awards</p>
          <span>2025-05-23</span>
        </div>
        <p style={{ color: "#aaa", cursor: "pointer", marginTop: "30px" }}>More news &gt;</p>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact section center">
        <h2>Contact Us</h2>
        <form action="https://formsubmit.co/laqsheyo@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows={5} placeholder="Your Message" required></textarea>
          <button type="submit" className="button">Send Message</button>
        </form>
      </section>

      <footer style={{ padding: "40px", textAlign: "center", borderTop: "1px solid #333" }}>
        <p>&copy; {new Date().getFullYear()} KTC India. All rights reserved.</p>
      </footer>
    </main>
  );
}