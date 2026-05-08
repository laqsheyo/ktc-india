"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isFPDPage = pathname.startsWith("/fpd");

  if (isFPDPage) {
    return null;
  }

  return (
    <header className="header">
      <h1>KTC India</h1>

      <nav>
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/promoters">Leadership</a>
        <a href="/consulting">Consulting Assignments</a>
        <a href="/certifications">Certifications</a>
        <a href="/brands">Brands</a>
        <a href="/showroom">Showroom</a>
        <a href="/partners">Manufacturing Partners</a>
        <a href="/contact">Contact Us</a>
      </nav>
    </header>
  );
}
