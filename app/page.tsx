"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToBrands = () => {
    router.push("/brands");
  };

  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <h2>TECHNOLOGY & INNOVATION</h2>
        </div>

        {/* 🔥 CIRCLE LOGO BUTTONS */}
        <div className="hero-brands">

          <button className="brand-circle" onClick={goToBrands}>
            <img src="/images/ktc.jpg" alt="KTC" />
          </button>

          <button className="brand-circle" onClick={goToBrands}>
            <img src="/images/fpd.jpg" alt="FPD" />
          </button>

          <button className="brand-circle" onClick={goToBrands}>
            <img src="/images/horion.png" alt="Horion" />
          </button>

          <button className="brand-circle" onClick={goToBrands}>
            <img src="/images/eclara.jpg" alt="Eclara" />
          </button>

        </div>

      </section>

    </main>
  );
}