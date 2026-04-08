"use client";

import { useEffect, useState } from "react";

export default function Showroom() {
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
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="section"> {/* ✅ FIXED */}

      <h1>Showroom</h1>

      <p>
        Explore our showroom showcasing display solutions, products, and our team in action.
      </p>

      <div className="slider-box">
        <img src={images[index]} className="slider-img" />

        <button className="arrow left" onClick={prev}>‹</button>
        <button className="arrow right" onClick={next}>›</button>
      </div>

    </main>
  );
}