"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactFormModal from "./ContactFormModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Why GRAIT", href: "/why-grait" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start">
          <Image
            src="/logo.png"
            alt="GRAIT Logo"
            width={120}
            height={48}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[15px] font-semibold transition-colors duration-200 pb-1 ${
                  isActive
                    ? "text-gray-800 border-b-2 border-gray-800"
                    : "text-gray-800 hover:text-[#0099CC] border-b-2 border-transparent hover:border-[#0099CC]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => setContactOpen(true)}
            className="bg-gradient-to-r from-[#00BFBF] to-[#0099CC] hover:opacity-90 text-white text-[15px] font-semibold px-6 py-2.5 rounded-lg transition-opacity duration-200"
          >
            Talk to us
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-[15px] font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-gray-800 border-l-4 border-gray-800 pl-3"
                    : "text-gray-800 hover:text-[#0099CC] border-l-4 border-transparent hover:border-[#0099CC]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            onClick={() => {
              setMenuOpen(false);
              setContactOpen(true);
            }}
            className="bg-gradient-to-r from-[#00BFBF] to-[#0099CC] hover:opacity-90 text-white text-[15px] font-semibold px-6 py-2.5 rounded-lg text-center transition-opacity duration-200 mt-2"
          >
            Talk to us
          </button>
        </div>
      )}
    </nav>

    <ContactFormModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
