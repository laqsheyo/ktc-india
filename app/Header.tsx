"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [supportOpen, setSupportOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
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
      {/* Logo / brand area - left side */}
      <Link href="/" className="header-logo-link">
        <img
          src="/images/logo"
          alt="KTC India"
          className="header-logo-img"
        />
      </Link>

      {/* Hamburger - RIGHT side */}
      <button
        type="button"
        className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation drawer */}
      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        {/* Close button inside drawer */}
        <button
          type="button"
          className="mobile-menu-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}

        {/* Support dropdown with .open class */}
        <div
          className={`main-support-dropdown ${supportOpen ? "open" : ""}`}
          ref={dropdownRef}
        >
          <button
            type="button"
            className="main-support-button"
            onClick={() => setSupportOpen((prev) => !prev)}
          >
            Support{" "}
            <span className="support-chevron">
              {supportOpen ? "▴" : "▾"}
            </span>
          </button>

          {supportOpen && (
            <div className="main-support-menu">
              <Link
                href="/e-waste"
                onClick={() => {
                  setSupportOpen(false);
                  setMenuOpen(false);
                }}
              >
                E-Waste Management
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}