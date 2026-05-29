"use client";

import Link from "next/link";
import { useState } from "react";

export default function FPDPage() {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <main className="fpd-page">
      {/* ========== FPD HEADER ========== */}
      <header className="fpd-header">
        <div className="fpd-header-inner">
          <Link href="/fpd" className="fpd-logo">
            <img src="/images/fpd.png" alt="FPD" />
          </Link>

          <nav className="fpd-nav">
            <div
              className="fpd-nav-item fpd-dropdown"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <span className="fpd-nav-link">Products ▾</span>

              {productsOpen && (
                <div className="fpd-dropdown-menu">
                  <Link href="/fpd/products/tv" className="fpd-dropdown-item">
                    TV
                  </Link>
                  <Link
                    href="/fpd/products/tablet"
                    className="fpd-dropdown-item"
                  >
                    Tablet
                  </Link>
                  <Link
                    href="/fpd/products/projector"
                    className="fpd-dropdown-item"
                  >
                    Projector
                  </Link>
                </div>
              )}
            </div>

            <Link href="/fpd/support" className="fpd-nav-link">
              Support
            </Link>
            <Link href="/fpd/e-waste" className="fpd-nav-link">
              E-Waste Management
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className="fpd-hero">
        <img src="/images/fpd-main.jpg" alt="FPD" />
      </div>

      {/* WHO IS FPD */}
      <section className="fpd-section">
        <h1>What is FPD ?</h1>

        <p>
          FPD is an innovative technology brand dedicated to redefining the future of display. The name “FPD” stands for Flat Panel Display, symbolizing our unwavering focus on cutting-edge screen technologies and diverse product forms. Each letter—F (Flat), P (Panel), and D (Display)—represents the versatility and possibilities of our advanced display solutions. At the heart of FPD is a vision to transform the way we see and interact with the world. Through groundbreaking innovations, FPD integrates smart display technology into every aspect of daily life, creating seamless experiences for families worldwide
        </p>

        <img
          className="fpd-image"
          src="/images/fpd-about.jpg"
          alt="FPD Technology"
        />
      </section>

      {/* BRAND CONCEPT */}
      <section className="fpd-section">
        <h1>Brand Concept</h1>

        <p>
          Redefining Vision, Enriching Lives FPD believes that every screen is more than just a display—it is a gateway to connection, creativity, and shared experiences. By pushing the boundaries of display technology, FPD enriches daily life with solutions that empower individuals and unite families. Innovation for a Brighter Future: Leveraging groundbreaking technologies like OLED, Mini-LED, and AR/VR, FPD transforms traditional screens into intelligent, immersive, and versatile tools. Human-Centric Design: Every FPD product is thoughtfully designed to blend engineering excellence with emotional resonance, creating displays that simplify life, inspire creativity, and strengthen connections. Shaping Tomorrow’s Connected Homes: Through the “Display+” philosophy, FPD envisions a future where displays seamlessly integrate into every aspect of the home, enabling smarter, more fulfilling lifestyles.
        </p>

        <img
          className="fpd-image"
          src="/images/fpd-concept.jpg"
          alt="FPD Concept"
        />
      </section>

      {/* BRAND VISION */}
      <section className="fpd-section">
        <h1>Brand Vision</h1>

        <p>
          FPD envisions a world where display technology transcends boundaries, transforming screens into windows that connect us to a brighter future. As we continue to innovate, FPD is committed to shaping the future of vision and living—creating products that redefine how families see, connect, and experience the world. With Unlimited Vision, FPD invites everyone to explore infinite possibilities and embrace a future full of wonder.
        </p>

        <img
          className="fpd-image"
          src="/images/fpd-vision.jpg"
          alt="FPD Vision"
        />
      </section>
    </main>
  );
}
