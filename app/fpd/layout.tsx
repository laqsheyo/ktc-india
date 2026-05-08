"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isFPDPage = pathname?.startsWith("/fpd");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ margin: 0, padding: 0 }}
      >
        {/* ONLY show KTC header if NOT on FPD pages */}
        {!isFPDPage && (
          <header className="header">
            <h1>KTC India</h1>
            <nav>
              <a href="/">Home</a>
              <a href="/about">About Us</a>
              <a href="/leadership">Leadership</a>
              <a href="/consulting">Consulting Assignments</a>
              <a href="/certifications">Certifications</a>
              <a href="/brands">Brands</a>
              <a href="/showroom">Showroom</a>
              <a href="/manufacturing">Manufacturing Partners</a>
              <a href="/contact">Contact Us</a>
            </nav>
          </header>
        )}

        {children}
      </body>
    </html>
  );
}