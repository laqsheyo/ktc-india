"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [supportOpen, setSupportOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSupportOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      {/* Clickable Image Logo Replacing Text */}
      <Link href="/" className="header-logo-link">
        <img 
          src="/images/Ogbyf.jpg" 
          alt="KTC India Logo" 
          className="header-logo-img" 
        />
      </Link>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/promoters">Leadership</Link>
        <Link href="/showroom">Showroom</Link>

        <div className="main-support-dropdown" ref={dropdownRef}>
          <button
            type="button"
            className="main-support-button"
            onClick={() => setSupportOpen((prev) => !prev)}
          >
            Support ▾
          </button>

          {supportOpen && (
            <div className="main-support-menu">
              <Link
                href="/e-waste"
                onClick={() => setSupportOpen(false)}
              >
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