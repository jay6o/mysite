import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Footer({ className }: { className: string }) {
  return (
    <div className={`${className} w-full border-t border-t-2 border-black`}>
      <div className="flex w-full p-8">
        <div className="w-full flex flex-col lg:flex-row justify-between lg:justify-around items-center">
          <div className="pb-12">
            <h2 className="font-bold text-2xl p-4">Need a project built?</h2>
            <div>
              <Button variant="outline" size="lg" className="m-4 p-8">Click for free estimate!</Button>
            </div>
          </div>
          <div className="flex justify-between lg:justify-around w-5/6 lg:w-1/2">
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Contact Us</p>
              <p className="">x-xxx-xxx-xxxx</p>
              <p>email@email.com</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg font-bold">Company</p>
              <p className="">Services</p>
              <Link href="about"><p>About Us</p></Link>
              <Link href="contact"><p>Contact</p></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ul className="flex justify-center">
          <li className="px-8 py-4"><p className="text-lg">© 2025 company</p></li>
          <li className="px-8 py-4"><Link href="privacy"><p className="text-lg text-black/50 hover:underline">privacy policy</p></Link></li>
          <li className="px-8 py-4"><Link href="terms"><p className="text-lg text-black/50 hover:underline">terms of service</p></Link></li>
        </ul>
      </div>
    </div >
  );
}
