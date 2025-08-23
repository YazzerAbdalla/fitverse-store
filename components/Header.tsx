"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import MobileNav from "./MobileNav";

const navLinks = [
  { name: "Learn More", href: "#about" }, // scrolls to about section
  { name: "Coming Soon", href: "#" }, // placeholder / disabled
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Check if user has scrolled past hero section (adjust this value based on your hero height)
      setIsScrolled(currentScrollY > 100);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scroll position for smooth transition
  const headerOpacity = Math.min(scrollY / 150, 1);
  const logoOpacity = isScrolled ? 1 : Math.max(1 - scrollY / 200, 0.7);

  return (
    <header
      className={`
        fixed w-full h-16 top-0 z-50 flex items-center justify-between xl:px-12 px-5
        transition-all duration-300 ease-out
        ${
          isScrolled
            ? "backdrop-blur-xl bg-gray-950/80 border-b border-white/10 shadow-2xl shadow-black/20"
            : "backdrop-blur-none bg-transparent"
        }
      `}
      style={{
        backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
      }}
    >
      {/* Animated background overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-900/80 to-gray-950/90 transition-opacity duration-500"
        style={{ opacity: headerOpacity }}
      />

      {/* Subtle glow effect when scrolled */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />
      )}

      {/* Logo / Brand */}
      <div className="relative z-10">
        <h1
          className="text-h2 font-bold text-primary transition-all duration-300"
          style={{
            opacity: logoOpacity,
            transform: `scale(${isScrolled ? "0.95" : "1"})`,
          }}
        >
          <Link
            href="#hero"
            aria-label="Home"
            className="group transition-all duration-300 hover:text-primary/80 relative"
          >
            FitVerse
            <span className="text-accent group-hover:text-accent/80 transition-colors duration-300">
              .
            </span>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
          </Link>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav
        role="navigation"
        className="hidden xl:flex items-center gap-8 relative z-10"
      >
        <ul className="flex gap-6">
          {navLinks.map(({ name, href }, index) => (
            <li key={index} className="relative group">
              <Link
                className={`
                  text-lg md:text-xl font-semibold uppercase transition-all duration-300 relative
                  ${
                    name === "Coming Soon"
                      ? "text-muted-foreground cursor-not-allowed"
                      : `text-accent hover:text-primary transform hover:-translate-y-0.5
                      ${isScrolled ? "drop-shadow-sm" : ""}`
                  }
                `}
                aria-label={`${name} link`}
                href={href}
                style={{
                  textShadow: isScrolled
                    ? "0 0 10px rgba(255, 255, 255, 0.1)"
                    : "none",
                }}
              >
                {name}

                {/* Active/Hover indicator */}
                {name !== "Coming Soon" && (
                  <>
                    <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
                  </>
                )}
              </Link>

              {/* Coming Soon indicator */}
              {name === "Coming Soon" && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div className="xl:hidden relative z-10">
        <MobileNav links={navLinks} />
      </div>
    </header>
  );
};

export default Header;
