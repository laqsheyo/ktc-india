"use client";

export default function Promoters() {
  return (
    <main className="promoters-page">

      {/* IMAGE */}
      <div className="promo-top">
        <img src="/images/se.jpg" alt="Office" />
      </div>

      {/* CONTENT */}
      <div className="promo-content-center">

        <img src="/images/3.jpg" className="promo-img" />

        <h2>KTC India Display LLP</h2>

        <ul>
          <li>Based in Gurugram, Haryana</li>
          <li>Close proximity to New Delhi Airport</li>
          <li>Strategic hub for business operations in India</li>
        </ul>

      </div>

    </main>
  );
}