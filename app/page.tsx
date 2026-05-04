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
      </section>

      {/* BRAND BUTTONS SECTION */}
      <section className="home-brands-section">

        <h2 className="home-brands-heading">Our Brands</h2>

        <div className="home-brands">

          <button className="brand-btn" onClick={goToBrands}>
            FPD
          </button>

          <button className="brand-btn" onClick={goToBrands}>
            Horion
          </button>

          <button className="brand-btn" onClick={goToBrands}>
            Eclara
          </button>

        </div>

      </section>

    </main>
  );
}