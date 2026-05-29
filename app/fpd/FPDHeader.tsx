"use client";

import Link from "next/link";
import { useState } from "react";

export default function FPDHeader() {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="fpd-header">
      <div className="fpd-header-inner">
        <Link href="/fpd" className="fpd-logo">
          <img src="/images/fpd.png" alt="FPD" />
        </Link>

        <nav className="fpd-nav">
          <div className="fpd-nav-item fpd-dropdown">
            <button
              type="button"
              className="fpd-nav-link fpd-products-button"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products ▾
            </button>

            {productsOpen && (
              <div className="fpd-dropdown-menu">
                <Link
                  href="/fpd/products/tv"
                  className="fpd-dropdown-item"
                  onClick={() => setProductsOpen(false)}
                >
                  TV
                </Link>

                <Link
                  href="/fpd/products/tablet"
                  className="fpd-dropdown-item"
                  onClick={() => setProductsOpen(false)}
                >
                  Tablet
                </Link>

                <Link
                  href="/fpd/products/projector"
                  className="fpd-dropdown-item"
                  onClick={() => setProductsOpen(false)}
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
  );
}