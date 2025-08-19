import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <header className="bg-card w-full h-16 sticky top-0 z-50 shadow-lg flex items-center justify-between lx:px-12 px-5">
      <h1 className="text-h2 font-bold text-primary">
        <Link href="/" aria-label="Home">
          FitVerse<span className="text-accent">.</span>
        </Link>
      </h1>

      <nav role="navigation" className="hidden xl:flex items-center gap-8">
        <ul className="flex gap-6">
          {navLinks.map(({ name, href }, index) => (
            <li key={index}>
              <Link
                className="text-lg md:text-xl font-semibold uppercase text-accent hover:text-primary transition-colors"
                aria-label={`${name} link`}
                href={href}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="xl:hidden">
        <MobileNav links={navLinks} />
      </div>
    </header>
  );
};

export default Header;
