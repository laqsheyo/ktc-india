"use client";
import { useEffect, useState } from "react";

export default function AboutUs() {
  const [index, setIndex] = useState(0);

  const images = [
    "/images/s1.jpg",
    "/images/s2.jpg",
    "/images/s3.jpg",
    "/images/s4.jpg",
    "/images/s5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="about-page">

      <section className="section center">
        <h2>Leadership</h2>
        <p>
          The company is led by experienced professionals. Ajay Arora brings over 35 years of expertise across consumer electronics, IT, and automotive sectors, while Laqshay Arora contributes strong experience in operations and marketing.
        </p>
        <img src="/images/3.jpg" className="about-img" />
      </section>

      <section className="section center">
        <h2>Industry Experience</h2>
        <p>
          KTC India has worked with leading brands such as Onida, AMKETTE, INTEX, BEETEL, PGEL, MATATA, and ELISTA.
        </p>
        <img src="/images/4.jpg" className="about-img" />
      </section>

      <section className="section center">
        <h2>Certifications</h2>
        <p>
          KTC India Display LLP operates with GST, MSME, import-export licensing, and other approvals ensuring reliability.
        </p>
        <img src="/images/7.jpg" className="about-img" />
      </section>

      <section className="section center">
        <h2>Manufacturing Partners</h2>
        <p>
          Partners include Winsharp, PG, Dixon, Genus, and Zetwerk for scalable production and quality control.
        </p>
        <img src="/images/8.jpg" className="about-img" />
      </section>

      {/* BRANDS */}
      <section className="section center">
        <h2>Brands</h2>
        <p>
          KTC India provides services to international brands and supports their expansion in India.
        </p>

        <div style={{ marginTop: "20px" }}>
          <a href="https://fpdvision.com/" target="_blank" rel="noopener noreferrer">
            <button className="button">FPD Vision</button>
          </a>

          <a href="https://global.horion.com" target="_blank" rel="noopener noreferrer">
            <button className="button" style={{ marginLeft: "10px" }}>
              Horion
            </button>
          </a>
        </div>
      </section>

      {/* SHOWROOM */}
      <section className="section center">
        <h2>Showroom</h2>

        <div className="slider-box">
          <img src={images[index]} className="slider-img" />

          <button className="arrow left" onClick={prev}>‹</button>
          <button className="arrow right" onClick={next}>›</button>
        </div>
      </section>

      <section className="section center">
        <h2>Let’s Get In Touch</h2>

        <p>
          707, Paras Trinity, Sector 63, Gurugram, Haryana
        </p>

        <p>
          Phone: <a href="tel:+919711488883">+91 97114 88883</a><br />
          Email: <a href="mailto:ajay@ktcdisplay.com">ajay@ktcdisplay.com</a><br />
          Email: <a href="mailto:laqsheyo@gmail.com">laqsheyo@gmail.com</a>
        </p>

        <img src="/images/9.jpg" className="about-img" />
      </section>

    </main>
  );
}