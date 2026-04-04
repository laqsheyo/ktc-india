"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);

  const images = [
    "/images/banner.png",
    "/images/slide2.png",
    "/images/slide3.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
        {/* SLIDER (MAIN) */}
        <div className="slider">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={i === index ? "slide active" : "slide"}
            />
          ))}
        </div>

        {/* VIDEO (BACKGROUND LIGHT EFFECT ONLY) */}
        <video muted loop autoPlay playsInline className="hero-video">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* TEXT */}
        <div className="hero-text">
          <h1>MINI LED TV</h1>
          <p>Ultra-large screen, ultimate immersion</p>
        </div>
      </section>
    </main>
  );
}