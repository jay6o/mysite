'use client'
import { Menu } from "lucide-react";
import Link from "next/link";
import MobileMenu from "@/components/mobileMenu";
import { useState } from "react";

export default function Nav() {
  const [menuOn, setMenuOn] = useState<boolean>(false);
  const toggleMenu = () => setMenuOn(!menuOn);
  const closeMenu = () => setMenuOn(false);

  return (
    <nav className="h-[5rem] lg:h-[6rem] fixed top-0 left-0 right-0 z-30 bg-transparent backdrop-blur-md" data-scroll-sticky data-scroll-target="main">
      <div className="flex justify-row justify-between h-full items-center border-b-2 border-black bg-[#f2f2f2]/70">
        <div className="ml-12 bg-transparent">
          <Link href="/">
            <h1 className="font-bold text-xl lg:text-2xl bg-transparent">
              SoftByte
            </h1>
          </Link>
        </div>
        <div className="flex bg-transparent">
          {/* Desktop Nav Menu */}
          <ul className="hidden lg:flex items-center mr-12 bg-transparent">
            <li className="mx-6 text-xl font-medium"><Link href="/#services">Services</Link></li>
            <li className="mx-6 text-xl font-medium"><Link href="/about">About Us</Link></li>
            <li className="mx-6 text-xl font-medium"><Link href="contact">Contact</Link></li>
          </ul>
          {/* Handheld Burger Menu */}
          <button id="menu-button" aria-label="menu-button" onClick={toggleMenu}>
            <Menu className="lg:hidden m-8" size={24} />
          </button>
        </div>
        <MobileMenu isOpen={menuOn} onClose={closeMenu} />
      </div>
    </nav>
  );
}
