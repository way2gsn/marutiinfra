"use client"

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-primary transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-white hover:text-primary transition-colors">
              ABOUT US
            </Link>
            <Link href="/projects" className="text-white hover:text-primary transition-colors">
              OUR PROJECTS
            </Link>
            <Link href="/gallery" className="text-white hover:text-primary transition-colors">
              GALLERY
            </Link>
            <Link href="/careers" className="text-white hover:text-primary transition-colors">
              CAREERS
            </Link>
            <Link href="/contact" className="text-white hover:text-primary transition-colors">
              CONTACT US
            </Link>
          </div>
          <div className="md:hidden">
            {menuOpen ? (
              <X className="text-white w-8 h-8" onClick={toggleMenu} />
            ) : (
              <Menu className="text-white w-8 h-8" onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed top-0 right-0 w-2/3 h-full bg-black bg-opacity-90 z-50 p-8 flex flex-col space-y-6">
          <X className="text-white w-8 h-8 self-end" onClick={toggleMenu} />
          <Link href="/" className="text-white hover:text-primary transition-colors" onClick={toggleMenu}>
            HOME
          </Link>
          <Link href="/about" className="text-white hover:text-primary transition-colors" onClick={toggleMenu}>
            ABOUT US
          </Link>
          <Link href="/projects" className="text-white hover:text-primary transition-colors" onClick={toggleMenu}>
            OUR PROJECTS
          </Link>
          <Link href="/gallery" className="text-white hover:text-primary transition-colors" onClick={toggleMenu}>
            GALLERY
          </Link>
          <Link href="/careers" className="text-white hover:text-primary transition-colors" onClick={toggleMenu}>
            CAREERS
          </Link>
          <Link href="/contact" className="text-white hover:text-primary transition-colors" onClick={toggleMenu}>
            CONTACT US
          </Link>
        </div>
      )}
    </nav>
  );
}
