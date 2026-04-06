"use client";

export default function Home() {
  return (
    <main>
      <header>
        <h1>KTC India</h1>
        <nav>
          <a href="#products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">

        {/* VIDEO ONLY */}
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
      <footer style={{ padding: '20px', textAlign: 'center', borderTop: '1px solid #333' }}>
        <p>&copy; 2026 KTC India. All rights reserved.</p>
      </footer>
    </main>
  );
}