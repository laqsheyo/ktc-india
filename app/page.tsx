export default function Home() {
  return (
    <main>
      <header>
        <h1>KTC India</h1>
        <nav>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Premium Electronics for India</h1>
        <p>
          Inspired by innovation. Designed for performance. Experience the future with KTC India.
        </p>
        <button className="button">Explore Products</button>
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
    </main>
  );
}