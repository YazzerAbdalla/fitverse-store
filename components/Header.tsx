"use client";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
// import useScrollDetection from "@/hooks/useScroll";
import useHeroAway from "@/hooks/useHeroAway";

const navLinks = [
  { name: "Learn More", href: "#about" }, // scrolls to about section
  { name: "Coming Soon", href: "#" }, // placeholder / disabled
];

const Header = () => {
  // const isScroll = useScrollDetection();
  const isInView = useHeroAway();
  console.log("🚀 ~ Header ~ isInView:", isInView);
  return (
    <header
      className={`backdrop-blur-xl w-full h-16 sticky top-0 z-50  flex items-center justify-between xl:px-12 px-5`}
    >
      {/* Logo / Brand */}
      <h1 className="text-h2 font-bold text-primary">
        <Link href="/" aria-label="Home">
          FitVerse<span className="text-accent">.</span>
        </Link>
      </h1>

      {/* Desktop Navigation */}
      <nav role="navigation" className="hidden xl:flex items-center gap-8">
        <ul className="flex gap-6">
          {navLinks.map(({ name, href }, index) => (
            <li key={index}>
              <Link
                className={`text-lg md:text-xl font-semibold uppercase transition-colors ${
                  name === "Coming Soon"
                    ? "text-muted-foreground cursor-not-allowed"
                    : "text-accent hover:text-primary"
                }`}
                aria-label={`${name} link`}
                href={href}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div className="xl:hidden">
        <MobileNav links={navLinks} />
      </div>
    </header>
  );
};

export default Header;
