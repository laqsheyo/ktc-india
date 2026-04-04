"use client";
import { useEffect, useState } from "react";

export default function About() {
  const [index, setIndex] = useState(0);

  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
  ];

  // AUTO SLIDE (5 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="about-page">

      {/* SLIDER */}
      <section className="about-slider">
        <img src={images[index]} className="about-slide" />

        <button className="arrow left" onClick={prev}>‹</button>
        <button className="arrow right" onClick={next}>›</button>
      </section>

      {/* TITLE */}
      <section className="center section">
        <h1>KTC India Display LLP</h1>
        <p>
          Based in Gurugram, Haryana<br />
          Close proximity to New Delhi Airport<br />
          Strategic hub for business operations in India
        </p>
      </section>

      {/* ABOUT */}
      <section className="center section">
        <h2>About Us</h2>
        <p>
          KTC India Display LLP is a professional services and sourcing company 
          focused on Consumer Electronics, IT, and related industries.
        </p>
      </section>

      {/* LEADERSHIP */}
      <section className="center section">
        <h2>Leadership</h2>
        <p><strong>Ajay Arora</strong></p>
        <p>35+ years experience in Consumer Electronics, IT & Automotive</p>

        <p><strong>Laqshay Arora</strong></p>
        <p>10+ years experience in Operations & Marketing</p>
      </section>

      {/* INDUSTRY EXPERIENCE */}
      <section className="center section">
        <h2>Industry Experience</h2>
        <p>
          Worked with leading brands:<br />
          Onida<br />
          AMKETTE<br />
          INTEX<br />
          BEETEL<br />
          PGEL<br />
          MATATA<br />
          ELISTA
        </p>
      </section>

      {/* SERVICES */}
      <section className="center section">
        <h2>Our Services</h2>
        <p>
          India Office Opening<br />
          Sales & Business Development<br />
          Product & Vendor Development<br />
          Financial & Accounting<br />
          Operational Assistance<br />
          Technical & Audit Services<br />
          Marketing & Designing<br />
          Post-Sales Support
        </p>
      </section>

      {/* BRAND */}
      <section className="center section">
        <h2>Brand</h2>
        <p>Registered Brand: <strong>ECLARA</strong></p>
      </section>

      {/* CERTIFICATIONS */}
      <section className="center section">
        <h2>Certifications</h2>
        <p>
          ISO Certified Company<br />
          GSTIN Registered<br />
          IEC Import Export Code<br />
          MSME Registered<br />
          LMPC Certified
        </p>
      </section>

      {/* PARTNERS */}
      <section className="center section">
        <h2>Manufacturing Partners</h2>
        <p>
          Winsharp<br />
          PG<br />
          Dixon<br />
          Genus<br />
          Zetwerk
        </p>
      </section>

      {/* CONTACT */}
      <section className="center section">
        <h2>Let’s Get In Touch</h2>
        <p>
          707, Paras Trinity,<br />
          Sector 63, Gurugram,<br />
          Haryana - 122095
        </p>

        <p>
          Phone: <a href="tel:+919711488883">+91 97114 88883</a><br />
          Email: <a href="mailto:ajay@ktcdisplay.com">ajay@ktcdisplay.com</a><br />
          Email: <a href="mailto:laqsheyo@gmail.com">laqsheyo@gmail.com</a>
        </p>
      </section>

    </main>
  );
}