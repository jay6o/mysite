import React from "react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[90vw] bg-[#f2f2f2] shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <div className="flex h-[6rem] border-b border-black border-1">
        <button onClick={onClose} className="self-end mb-8">
          Close
        </button>
      </div>
      <nav className="flex flex-col p-8 h-full">

        <Link href="/services" className="text-xl my-2">Services</Link>
        <Link href="/about" className="text-xl my-2">About Us</Link>
        <Link href="/contact" className="text-xl my-2">Contact</Link>
      </nav>
    </div>
  );
}
