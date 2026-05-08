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
            <img src="/images/fpd-logo.png" alt="FPD" />
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
                  <Link href="/fpd/products/tv" className="fpd-dropdown-item">TV</Link>
                  <Link href="/fpd/products/tablet" className="fpd-dropdown-item">Tablet</Link>
                  <Link href="/fpd/products/projector" className="fpd-dropdown-item">Projector</Link>
                </div>
              )}
            </div>

            <Link href="/fpd/support" className="fpd-nav-link">Support</Link>
            <Link href="/fpd/e-waste" className="fpd-nav-link">E-Waste Management</Link>
          </nav>
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className="fpd-hero">
        <img src="/images/fpd-main.jpg" alt="FPD" />
      </div>

      {/* WHO IS FPD */}
      <section className="fpd-section">
        <h1>Who is FPD</h1>
        <p>FPD is an innovative technology brand dedicated to redefining the future of display...</p>
        <p>Each letter—F (Flat), P (Panel), and D (Display)—represents...</p>
        <p>At the heart of FPD is a vision to transform...</p>
        <img className="fpd-image" src="/images/fpd-about.jpg" alt="FPD Technology" />
      </section>

      {/* BRAND CONCEPT */}
      <section className="fpd-section">
        <h1>Brand Concept</h1>
        <h2>Redefining Vision, Enriching Lives</h2>
        <p>FPD believes that every screen is more than just a display...</p>
        <p>By pushing the boundaries of display technology...</p>
        <p><strong>Innovation for a Brighter Future:</strong> Leveraging...</p>
        <p><strong>Human-Centric Design:</strong> Every FPD product...</p>
        <p><strong>Shaping Tomorrow's Connected Homes:</strong> Through...</p>
        <img className="fpd-image" src="/images/fpd-concept.jpg" alt="FPD Concept" />
      </section>

      {/* BRAND VISION */}
      <section className="fpd-section">
        <h1>Brand Vision</h1>
        <p>FPD envisions a world where display technology transcends...</p>
        <p>As we continue to innovate, FPD is committed...</p>
        <p>With Unlimited Vision, FPD invites everyone...</p>
        <img className="fpd-image" src="/images/fpd-vision.jpg" alt="FPD Vision" />
      </section>

    </main>
  );
}