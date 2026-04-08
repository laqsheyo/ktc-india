"use client";

export default function Home() {
  return (
    <main>

      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        <div className="hero-overlay">

          <h2>TECHNOLOGY & INNOVATION</h2>

          {/* NEW SUBTITLE */}
          <p className="hero-subtext">
            Global sourcing. Product development. Reliable execution.
          </p>

          {/* BUTTONS (IMPORTANT UPGRADE) */}
          <div className="hero-buttons">
            <a href="/about-us">
              <button>Explore More</button>
            </a>

            <a href="/contact">
              <button className="outline-btn">Contact Us</button>
            </a>
          </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 KTC India. All rights reserved.</p>
      </footer>

    </main>
  );
}