"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <header className="header">
      <h1>KTC India</h1>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/promoters">Leadership</Link>
        <Link href="/showroom">Showroom</Link>

        <div className="main-support-dropdown">
          <button
            type="button"
            className="main-support-button"
            onClick={() => setSupportOpen(!supportOpen)}
          >
            Support ▾
          </button>

          {supportOpen && (
            <div className="main-support-menu">
              <Link href="/fpd/e-waste" onClick={() => setSupportOpen(false)}>
                E-Waste Management
              </Link>
            </div>
          )}
        </div>

        <Link href="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}