"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "Skin treatments", href: "/services/skin" },
  { label: "Hair treatments", href: "/services/hair" },
  { label: "Advanced aesthetics", href: "/services/aesthetics" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "#", dropdown: services },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const solid = !isHome || scrolled;
  const navBg = solid ? "bg-paper border-b border-line" : "bg-transparent";
  const textColor = solid ? "text-ink" : "text-paper";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-2.5 group">
            <span className={`font-display text-[26px] font-medium transition-colors ${textColor}`}>
              AURA
            </span>
            <span className={`text-[12px] transition-colors ${solid ? "text-muted" : "text-paper/70"}`}>
              Skin & Hair Clinic
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className={`flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-iodine ${textColor}`}>
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div
                    className={`absolute top-full left-0 pt-3 transition-all duration-150 ${
                      servicesOpen
                        ? "opacity-100 pointer-events-auto translate-y-0"
                        : "opacity-0 pointer-events-none -translate-y-1"
                    }`}
                  >
                    <div className="bg-paper border border-line min-w-[220px] py-2 shadow-[0_12px_32px_rgba(28,27,25,0.1)]">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-5 py-2.5 text-sm text-ink/80 hover:text-iodine hover:bg-paper-dim transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors hover:text-iodine ${textColor} ${
                    pathname === link.href ? "text-iodine" : ""
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:inline-flex items-center bg-iodine text-paper px-5 py-2.5 text-sm font-medium hover:bg-iodine-deep transition-colors">
              Book appointment
            </Link>
            <button
              className={`md:hidden transition-colors ${textColor}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-paper border-t border-line transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="px-6 flex flex-col gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <button
                  className="flex items-center justify-between w-full py-3 text-[15px] font-medium text-ink hover:text-iodine transition-colors"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 pb-2 flex flex-col gap-1 border-l-2 border-iodine/30">
                    {link.dropdown.map((item) => (
                      <Link key={item.href} href={item.href} className="py-2 text-sm text-ink/70 hover:text-iodine transition-colors">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 text-[15px] font-medium transition-colors hover:text-iodine ${
                  pathname === link.href ? "text-iodine" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link href="/contact" className="mt-3 w-full text-center bg-iodine text-paper px-5 py-3 text-sm font-medium hover:bg-iodine-deep transition-colors">
            Book appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
