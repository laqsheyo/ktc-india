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

        {/* TEXT */}
        <div className="hero-text">
          <h2>Innovative Displays</h2>
          <p>Ultra-large screen, ultimate immersion</p>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section center">
        <h2>About KTC</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto' }}>
          KTC is one of the first companies dedicated to display terminal products in China, 
          specializing in the manufacturing of flat panel display terminal products.
        </p>
        <img src="/images/about.jpg" />
      </section>

      {/* PRODUCTS */}
      <section id="products" className="section center">
        <h2>Smart Mirror Display Products</h2>
        <p>Fitness Mirrors, AR Beauty Mirrors, and Smart Bathroom solutions.</p>
        <img src="/images/mirror.jpg" />
      </section>

      <section className="section center">
        <h2>Mobile Smart Displays</h2>
        <p>Portable smart screens and mobile TV entertainment.</p>
        <img src="/images/mobile.jpg" />
      </section>

      <section className="section center">
        <h2>TV</h2>
        <p>Ranging from 24 inches to 100 inches with cutting-edge technology.</p>
        <img src="/images/tv.jpg" />
      </section>

      <section className="section center">
        <h2>Commercial Displays</h2>
        <p>Interactive flat panels, signage monitors, and gaming monitors.</p>
        <img src="/images/commercial.jpg" />
      </section>

      <section className="section center">
        <h2>Medical Displays</h2>
        <p>Professional diagnostic and surgical display solutions.</p>
        <img src="/images/medical.jpg" />
      </section>

      {/* NEWS */}
      <section className="news center" style={{ padding: '40px' }}>
        <h2>News Center</h2>
        <p>KTC Showcase AI Media Station at CES 2026</p>
        <span style={{ color: '#888' }}>2026-01-05</span>
        <p>KTC Technology at 2025 Global AI Device Expo</p>
        <span style={{ color: '#888' }}>2025-05-23</span>
        <p style={{ marginTop: '20px' }}>More news &gt;</p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact center">
        <h2>Contact Us</h2>
        <form action="https://formsubmit.co/laqsheyo@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows={5} placeholder="Your Message" required></textarea>
          <button type="submit" className="button">Send Message</button>
        </form>
      </section>

      <footer style={{ padding: '20px', textAlign: 'center', borderTop: '1px solid #333' }}>
        <p>&copy; 2026 KTC India. All rights reserved.</p>
      </footer>
    </main>
  );
}