"use client";

export default function Home() {
  return (
    <main>

      {/* HERO */}
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

        </div>
      </section>

    </main>
  );
}