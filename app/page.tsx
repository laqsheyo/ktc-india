"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = (brand: string) => {
    if (brand === "FPD") {
      router.push("/fpd");
    }

    if (brand === "KTC") {
      router.push("/ktc");
    }

    if (brand === "Horion" || brand === "Eclara") {
      router.push("/");
    }
  };

  return (
    <main className="home-page">
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <h2>TECHNOLOGY & INNOVATION</h2>
        </div>
      </section>

      <section className="home-brand-strip">
        <button
          type="button"
          className="brand-logo-button"
          onClick={() => handleClick("KTC")}
        >
          <img src="/images/ktc.png" alt="KTC" />
        </button>

        <button
          type="button"
          className="brand-logo-button"
          onClick={() => handleClick("FPD")}
        >
          <img src="/images/fpd.png" alt="FPD" />
        </button>

        <button
          type="button"
          className="brand-logo-button"
          onClick={() => handleClick("Horion")}
        >
          <img src="/images/horion.png" alt="Horion" />
        </button>

        <button
          type="button"
          className="brand-logo-button"
          onClick={() => handleClick("Eclara")}
        >
          <img src="/images/eclara.png" alt="Eclara" />
        </button>
      </section>
    </main>
  );
}