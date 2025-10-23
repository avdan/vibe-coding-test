"use client";

import Link from "next/link";
import { useState } from "react";
import { navigationLinks } from "@/lib/content";
import { buttonClasses } from "@/components/ui/Button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-muted/40 bg-brand-light/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-gutter py-4">
        <Link href="#overview" className="text-lg font-heading font-semibold text-brand-primary">
          Muscle & Strength Pyramids
        </Link>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-accent md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5" />
          </svg>
        </button>
        <div className="hidden items-center gap-6 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition hover:text-brand-secondary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#pricing"
            className={buttonClasses({ variant: "primary", size: "sm" })}
          >
            Start Building
          </Link>
        </div>
      </nav>
      {isOpen ? (
        <div className="border-t border-brand-muted/40 bg-brand-light md:hidden">
          <div className="space-y-2 px-4 py-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base font-medium text-text-secondary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#pricing"
              className={buttonClasses({ variant: "primary", size: "sm", className: "w-full justify-center" })}
              onClick={() => setIsOpen(false)}
            >
              Start Building
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
