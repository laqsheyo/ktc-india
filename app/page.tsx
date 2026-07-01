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

      {/* Styled to match the dark premium branding shade from image_fd654f.jpg */}
      <section 
        className="home-brand-strip"
        style={{
          backgroundColor: "#0d0d0d", // Dark premium slate black accent shade
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "60px",
          padding: "30px 20px",
          width: "100%"
        }}
      >
        <button
          type="button"
          className="brand-logo-button"
          onClick={() => handleClick("KTC")}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <img src="/images/ktc.png" alt="KTC" style={{ height: "32px", width: "auto", display: "block", opacity: 0.9 }} />
        </button>

        <button
          type="button"
          className="brand-logo-button"
          onClick={() => handleClick("FPD")}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <img src="/images/fpd.png" alt="FPD" style={{ height: "32px", width: "auto", display: "block", opacity: 0.9 }} />
        </button>

        <button
          type="button"
          className="brand-logo-button"
          onClick={() => handleClick("Horion")}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <img src="/images/horion.png" alt="Horion" style={{ height: "32px", width: "auto", display: "block", opacity: 0.9 }} />
        </button>

        <button
          type="button"
          className="brand-logo-button"
          onClick={() => handleClick("Eclara")}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <img src="/images/eclara.png" alt="Eclara" style={{ height: "32px", width: "auto", display: "block", opacity: 0.9 }} />
        </button>
      </section>
    </main>
  );
}