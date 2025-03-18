'use client'

import { Menu } from "lucide-react";
import Link from "next/link";
import MobileMenu from "../components/mobileMenu";
import { useState } from "react";

export default function Nav({ className }: { className: string }) {
  const [menuOn, setMenuOn] = useState<boolean>(false);
  const toggleMenu = () => setMenuOn(!menuOn);
  const closeMenu = () => setMenuOn(false);
  return (
    <nav className={`relative ${className}`}>
      <div className="flex justify-row justify-between min-h-full items-center border border-b-2 border-black bg-[#f2f2f2]/95 backdrop-blur-xs sticky top-0 z-30">
        <div className="ml-12 bg-transparent">
          <Link href="/">
            <h1 className="font-bold text-xl bg-transparent">
              LOGO
            </h1>
          </Link>
        </div>

        <div className="flex bg-transparent">
          {/* Desktop Nav Menu */}
          <ul className="hidden md:flex items-center mr-12 bg-transparent">
            <li className="mx-6 text-xl">Services</li> {/* add onclick/onhover handler */}
            <li className="mx-6 text-xl"><Link href="/about">About Us</Link></li>
            <li className="mx-6 text-xl"><Link href="contact">Contact</Link></li>
          </ul>

          {/* Handheld Burger Menu */}
          <button onClick={toggleMenu}> {/* Add onclick handler */}
            <Menu className="md:hidden m-8" size={36} />
          </button>
        </div>
        <MobileMenu isOpen={menuOn} onClose={closeMenu} />
      </div>
    </nav >
  );
}
