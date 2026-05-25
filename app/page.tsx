"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);

  const handleClick = (brand: string) => {
    setActive(brand);

    setTimeout(() => {
      if (brand === "FPD") {
        router.push("/fpd");
      } else if (brand === "KTC") {
        router.push("/ktc");
      } else {
        router.push("/brands");
      }
    }, 800);
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
          <button className="brand-circle" onClick={() => handleClick("KTC")}>
            <img src="/images/ktc.jpg" alt="KTC" />
            {active === "KTC" && <span className="brand-label">KTC</span>}
          </button>

          <button className="brand-circle" onClick={() => handleClick("FPD")}>
            <img src="/images/fpd.jpg" alt="FPD" />
            {active === "FPD" && <span className="brand-label">FPD</span>}
          </button>

          <button
            className="brand-circle"
            onClick={() => handleClick("Horion")}
          >
            <img src="/images/horion.png" alt="Horion" />
            {active === "Horion" && (
              <span className="brand-label">Horion</span>
            )}
          </button>

          <button
            className="brand-circle"
            onClick={() => handleClick("Eclara")}
          >
            <img src="/images/eclara.jpg" alt="Eclara" />
            {active === "Eclara" && (
              <span className="brand-label">Eclara</span>
            )}
          </button>
        </div>
      </section>
    </main>
  );
}