"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";

const navItems = [
  { href: "/#menu", label: "Menu" },
  { href: "/#story", label: "Story" },
  { href: "/#catering", label: "Catering" },
  { href: "/blog", label: "Blog" },
  { href: "/#preorder", label: "Preorder", cta: true },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <Link aria-label="Madre Frescas home" href="/">
        <BrandMark compact />
      </Link>
      <nav aria-label="Primary navigation" className="desktop-nav">
        {navItems.map((item) => (
          <a className={item.cta ? "nav-cta" : undefined} href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="mobile-nav">
        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className={isOpen ? "hamburger-button is-open" : "hamburger-button"}
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        {isOpen && (
          <nav aria-label="Mobile navigation" className="mobile-nav-panel">
            {navItems.map((item) => (
              <a
                className={item.cta ? "nav-cta" : undefined}
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
