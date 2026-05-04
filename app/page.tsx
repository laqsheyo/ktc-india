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

        {/* 🔥 4 BRAND BUTTONS */}
        <div className="hero-brands">

          <button className="brand-btn" onClick={goToBrands}>
            <img src="/images/ktc.jpg" alt="KTC" />
            <span>KTC</span>
          </button>

          <button className="brand-btn" onClick={goToBrands}>
            <img src="/images/fpd.jpg" alt="FPD" />
            <span>FPD</span>
          </button>

          <button className="brand-btn" onClick={goToBrands}>
            <img src="/images/horion.jpg" alt="Horion" />
            <span>Horion</span>
          </button>

          <button className="brand-btn" onClick={goToBrands}>
            <img src="/images/eclara.jpg" alt="Eclara" />
            <span>Eclara</span>
          </button>

        </div>

      </section>

    </main>
  );
}