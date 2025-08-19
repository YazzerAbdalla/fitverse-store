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
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col overflow-y-scroll">
        {/** logo */}
        <SheetTitle>.</SheetTitle>
        <div className="mt-20 mb-10 text-center text-2xl">
          <Link href={"/"}>
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
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
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
