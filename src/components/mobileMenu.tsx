import React from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[90vw] bg-[#f2f2f2] shadow-lg z-40 border-l border-black transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full border-l'
        }`}
    >
      <nav className="flex flex-col p-8 h-full">
        <button onClick={onClose} className="self-end mb-8">
          <X size={42} />
        </button>
        <Link href="/services" className="text-xl my-2"><p className="text-3xl py-2 transition-all duration:300 ease-in-out hover:underline">Services</p></Link>
        <Link href="/about" className="text-xl my-2 "><p className="text-3xl py-2 transition-all duration:300 ease-in-out hover:underline">About Us</p></Link>
        <Link href="/contact" className="text-xl my-2"><p className="text-3xl py-2 transition-all duration:300 ease-in-out hover:underline">Contact</p></Link>
      </nav>
    </div>
  );
}
