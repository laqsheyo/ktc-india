export default function Home() {
  return (
    <main>
      <header>
        <h1>KTC India</h1>
        <nav>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="mailto:laqsheyo@gmail.com?subject=KTC Inquiry">Contact</a>
        </nav>
      </header>

      <section className="hero">
  <img src="/images/banner.png" alt="KTC TV" />

  <div className="hero-content">
    <h1>Premium Electronics for India</h1>
    <p>
      Inspired by innovation. Designed for performance. Experience the future with KTC India.
    </p>
  </div>
</section>

      <section className="products">
        <div className="card">
          <h3>Smart TV</h3>
          <p>High performance smart TV built for next-gen users.</p>
        </div>
        <div className="card">
          <h3>Gaming Monitor</h3>
          <p>High performance gaming monitor built for next-gen users.</p>
        </div>
        <div className="card">
          <h3>Display Panels</h3>
          <p>High performance display panels built for next-gen users.</p>
        </div>
      </section>
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