"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = (brand: string) => {
    if (brand === "FPD") {
      router.push("/fpd");
    } else if (brand === "KTC") {
      router.push("/ktc");
    } else {
      router.push("/brands");
    }
  };

  return (
    <main>
      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay">
          <h2>TECHNOLOGY & INNOVATION</h2>
        </div>

        <div className="hero-brands">
          <button
            className="brand-logo-button"
            onClick={() => handleClick("KTC")}
          >
            <img src="/images/ktc.png" alt="KTC" />
          </button>

          <button
            className="brand-logo-button"
            onClick={() => handleClick("FPD")}
          >
            <img src="/images/fpd.png" alt="FPD" />
          </button>

          <button
            className="brand-logo-button"
            onClick={() => handleClick("Horion")}
          >
            <img src="/images/horion.png" alt="Horion" />
          </button>

          <button
            className="brand-logo-button"
            onClick={() => handleClick("Eclara")}
          >
            <img src="/images/eclara.png" alt="Eclara" />
          </button>
        </div>
      </section>
    </main>
  );
}