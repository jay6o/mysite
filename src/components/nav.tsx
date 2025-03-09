import { Menu } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-row justify-between h-[6rem] min-h-fit items-center border border-b-2 border-black bg-[#f2f2f2]/95 backdrop-blur-xs sticky top-0 z-30">
      <div className="ml-12 bg-transparent">
        <h1 className="font-bold text-xl bg-transparent">
          LOGO
        </h1>
      </div>

      <div className="flex bg-transparent">
        {/* Desktop Nav Menu */}
        <ul className="hidden md:flex items-center mr-12 bg-transparent">
          <li className="mx-6 text-xl">Services</li> {/* add onclick/onhover handler */}
          <li className="mx-6 text-xl"><Link href="/about">About Us</Link></li>
          <li className="mx-6 text-xl"><Link href="contact">Contact</Link></li>
        </ul>
        {/* Handheld Burger Menu */}
        <button > {/* Add onclick handler */}
          <Menu className="md:hidden m-8" size={36} />
        </button>
      </div>
    </nav>
  );
}
