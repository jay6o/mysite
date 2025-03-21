import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const path = usePathname();
  const closeMenuSamePage = (to: string, as: string) => {
    if (to === as)
      onClose();
  }
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[90vw] bg-[#f2f2f2] shadow-lg z-40 border-l border-black transform transition-transform duration-700 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full border-l'
        }`}
    >
      <nav className="flex flex-col p-8 h-full">
        <button onClick={onClose} id="menu-close-button" aria-label="menu-close-button" className="self-end mb-8">
          <X size={42} />
        </button>
        <Link href="/#services" onClick={() => closeMenuSamePage("/", path)} className="text-xl my-2"><p className="text-3xl py-2 transition-all duration:300 ease-in-out hover:underline">Services</p></Link>
        <Link href="/about" onClick={() => closeMenuSamePage("/about", path)} className="text-xl my-2 "><p className="text-3xl py-2 transition-all duration:300 ease-in-out hover:underline">About Us</p></Link>
        <Link href="/contact" onClick={() => closeMenuSamePage("/contact", path)} className="text-xl my-2"><p className="text-3xl py-2 transition-all duration:300 ease-in-out hover:underline">Contact</p></Link>
        <Link href="/privacy" onClick={() => closeMenuSamePage("/privacy", path)} className="text-xl my-2"><p className="text-3xl py-2 transition-all duration:300 ease-in-out hover:underline">Privacy Policy</p></Link>
        <Link href="/terms" onClick={() => closeMenuSamePage("/terms", path)} className="text-xl my-2"><p className="text-3xl py-2 transition-all duration:300 ease-in-out hover:underline">Terms of Services</p></Link>
      </nav>
    </div>
  );
}
