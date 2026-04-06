"use client";

export default function Promoters() {
  return (
    <main className="promoters-page">

      {/* TOP IMAGE */}
      <div className="promo-top">
        <img src="/images/se.jpg" alt="Office" />
      </div>

      {/* MAIN SECTION */}
      <section className="promo-section">

        {/* LEFT IMAGE */}
        <div className="promo-image">
          <img src="/images/3.jpg" alt="Display Setup" />
        </div>

        {/* RIGHT TEXT */}
        <div className="promo-text">
          <h1>KTC India Display LLP</h1>

          <ul>
            <li>Based in Gurugram, Haryana</li>
            <li>Close proximity to New Delhi Airport</li>
            <li>Strategic hub for business operations in India</li>
          </ul>
        </div>

      </section>

    </main>
  );
}