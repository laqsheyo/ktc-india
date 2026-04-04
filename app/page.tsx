export default function Home() {
  return (
    <main>
      <header>
        <h1>KTC India</h1>
        <nav>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="mailto:laqsheyo@gmail.com?subject=KTC Inquiry">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <img src="/images/banner.png" alt="KTC Banner" />
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <img src="/images/about.jpeg" alt="About KTC" />
        <h2>About KTC</h2>
        <p>
          KTC is one of the first companies dedicated to the display terminal products in China, specializing in manufacturing of flat panel display terminal products.
        </p>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="section">
        <img src="/images/mirror.jpeg" alt="Smart Mirror" />
        <h2>Smart Mirror Display Products</h2>
        <p>
          Products include Smart Fitness Mirror, AR Smart Beauty Mirror, Smart Rehabilitation Mirror, Smart Fitting Mirror, Smart Bathroom Mirror, Smart Control Center etc.
        </p>
      </section>

      <section className="section">
        <img src="/images/mobile.jpeg" alt="Mobile Display" />
        <h2>Mobile smart display products</h2>
        <p>
          Products include Mobile smart screen, Mobile smart TV etc.
        </p>
      </section>

      <section className="section">
        <img src="/images/tv.jpeg" alt="TV" />
        <h2>TV</h2>
        <p>
          The company currently offers a total of 16 sizes TV products ranging from 24 inches to 100 inches.
        </p>
      </section>

      <section className="section">
        <img src="/images/commercial.jpeg" alt="Commercial Displays" />
        <h2>Commercial Displays</h2>
        <p>
          Products include interactive flat panel display, splicing units, signage monitors, digital signage, commercial TV, gaming monitor etc.
        </p>
      </section>

      <section className="section">
        <img src="/images/medical.jpeg" alt="Medical Displays" />
        <h2>Medical Displays</h2>
        <p>
          Products include Diagnostic Display, Endoscopic Surgical Display, PACS Intergrated Display, Consultation Display Center, Ultrasound Image Display etc.
        </p>
      </section>

      {/* NEWS */}
      <section className="news">
        <h2>News Center</h2>

        <p>KTC and Consult Red Showcase Evolving AI Media Station powered by Qualcomm Dragonwing at CES 2026</p>
        <span>2026-01-05</span>

        <p>AI Empowers the Future of Display丨KTC Technology Makes a Splash at 2025 Global AI Device Expo</p>
        <span>2025-05-23</span>

        <p>KTC Technology Sweeps Three Prestigious Awards丨Brand Building Achievements Earn International & Domestic Recognition</p>
        <span>2025-05-23</span>

        <p>More news&gt;</p>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <h2>Contact Us</h2>

        <form action="https://formsubmit.co/laqsheyo@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>

          <button type="submit" className="button">Send Message</button>
        </form>
      </section>
    </main>
  );
}