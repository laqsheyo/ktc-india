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
  }, []);

  return (
    <main>

      <section className="section">
        <h2>Leadership</h2>
        <p>
          The company is led by experienced professionals. Ajay Arora brings over 35 years of expertise across consumer electronics, IT, and automotive sectors, while Laqshay Arora contributes strong experience in operations and marketing.
        </p>
        <img src="/images/3.jpg" />
      </section>

      <section className="section">
        <h2>Industry Experience</h2>
        <p>
          KTC India has worked with leading brands such as Onida, AMKETTE, INTEX, BEETEL, PGEL, MATATA, and ELISTA.
        </p>
        <img src="/images/4.jpg" />
      </section>

    </main>
  );
}