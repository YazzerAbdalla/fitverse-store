"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const MobileNav = ({
  links,
}: {
  links: {
    name: string;
    href: string;
  }[];
}) => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        aria-label="Mobile nav"
        className="flex justify-center items-center"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col overflow-y-scroll backdrop-blur-xl bg-gray-950/80 border-b border-white/10 shadow-2xl shadow-black/20">
        {/** logo */}
        <SheetTitle></SheetTitle>
        <div className="mt-36 mb-10 text-center text-2xl">
          <Link className="transition" href={"/"}>
            <h1 className="text-primary flex-col">
              FitVerse<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/** nav */}
        <nav className="flex flex-col justify-center items-center gap-8 ">
          {links.map((link, index) => {
            return (
              <Link
                className={`${
                  link.href === pathname &&
                  "text-primary border-b-2 border-accent hover:text-accent"
                } ${
                  link.name === "Coming Soon"
                    ? "text-muted-foreground cursor-not-allowed "
                    : "text-accent hover:text-primary"
                } text-accent text-xl capitalize  transition-all`}
                key={index}
                href={link.href}
                aria-label={`${link.name} link`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
