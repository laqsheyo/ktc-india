"use client";

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header>
        <h1>KTC India</h1>

        <nav>
          <a href="/about-us">About Us</a>
          <a href="/promoters">Promoters</a>
          <a href="/consulting">Consulting</a>
          <a href="/certifications">Certifications</a>
          <a href="/brands">Brands</a>
          <a href="/showroom">Showroom</a>
          <a href="/partners">Partners</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* HERO VIDEO */}
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

        {/* 🔥 WATERMARK TEXT */}
        <div className="hero-overlay">
          <h2>TECHNOLOGY & INNOVATION</h2>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; 2026 KTC India. All rights reserved.</p>
      </footer>
    </main>
  );
}