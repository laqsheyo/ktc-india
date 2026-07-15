"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [supportOpen, setSupportOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/promoters", label: "Leadership" },
    { href: "/showroom", label: "Showroom" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="header">
      <Link href="/" className="header-logo-link">
        <img
          src="/images/Ogbyf.jpg"
          alt="KTC India Logo"
          className="header-logo-img"
        />
      </Link>

      {/* Desktop + Mobile nav - className="header-nav" is CRITICAL */}
      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        <div className="main-support-dropdown" ref={dropdownRef}>
          <button
            type="button"
            className="main-support-button"
            onClick={() => setSupportOpen((prev) => !prev)}
          >
            Support <span className="support-chevron">{supportOpen ? "▴" : "▾"}</span>
          </button>

          {supportOpen && (
            <div className="main-support-menu">
              <Link href="/e-waste" onClick={() => { setSupportOpen(false); setMenuOpen(false); }}>
                E-Waste Management
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hamburger button - visible only on mobile via CSS */}
      <button
        type="button"
        className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile overlay backdrop */}
      {menuOpen && (
        <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
}