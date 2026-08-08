"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Movies", href: "/movies" },
  { label: "Series", href: "/series" },
  { label: "Genres", href: "/genres" },
  { label: "Latest", href: "/latest" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-lg">
            C
          </span>

          <span>
            Cine<span className="text-red-500">Box</span>BD
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/login"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-red-500 hover:text-white"
          >
            Login
          </a>

          <a
            href="/register"
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white md:hidden"
        >
          <span className="text-xl">
            {isOpen ? "✕" : "☰"}
          </span>
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-4">

            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-4 flex gap-3 border-t border-slate-800 pt-4">
              <a
                href="/login"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-lg border border-slate-700 px-4 py-3 text-center text-sm font-semibold text-slate-300"
              >
                Login
              </a>

              <a
                href="/register"
                onClick={() => setIsOpen(false)}
                className="flex-1 rounded-lg bg-red-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Register
              </a>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}