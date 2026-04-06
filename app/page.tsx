"use client";

export default function Home() {
  return (
    <>
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
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 KTC India. All rights reserved.</p>
      </footer>
    </>
  );
}