"use client";

export default function Promoters() {
  return (
    <main className="promoters-page">

      {/* HERO IMAGE */}
      <div className="promo-hero">
        <img src="/images/office.jpg" alt="Office" />
      </div>

      {/* CONTENT */}
      <section className="promo-content">

        {/* LEFT TITLE */}
        <div className="promo-left">
          <h1>KTC India<br />Display LLP</h1>
        </div>

        {/* DIVIDER */}
        <div className="promo-divider"></div>

        {/* RIGHT TEXT */}
        <div className="promo-right">
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