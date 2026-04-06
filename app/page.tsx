"use client";

export default function Home() {
  return (
    <main>
      <header>
        <h1>KTC India</h1>
        <nav>
          <a href="/about-us">About</a>   {/* ✅ FIXED */}
          <a href="/contact">Contact</a>
        </nav>
      </header>

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
      </section>

      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          borderTop: "1px solid #333",
        }}
      >
        <p>&copy; 2026 KTC India. All rights reserved.</p>
      </footer>
    </main>
  );
}