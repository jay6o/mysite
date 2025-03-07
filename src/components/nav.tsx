import { Menu } from "lucide-react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-row justify-between h-[6rem] items-center">
      <div className="ml-12">
        <h1 className="font-bold text-xl">
          LOGO
        </h1>
      </div>

      <div className="flex">
        {/* Desktop Nav Menu */}
        <ul className="hidden md:flex items-center mr-12">
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
