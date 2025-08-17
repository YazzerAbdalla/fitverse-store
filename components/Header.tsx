import Link from "next/link";
import React from "react";

const navLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <div className="bg-card w-full h-16 sticky-top shadow-lg">
      <h1 className="text-primary font-bold">
        FitVerse <span className="text-accent">.</span>
      </h1>

      <div className="flex flex-col gap-3 ">
        {navLinks.map(({ name, href }, index) => (
          <Link className="" key={index} href={href}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
