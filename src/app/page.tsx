'use client';

import Image from "next/image";
import Nav from "../components/nav";
import Hero from "../components/hero";
import { Menu } from "lucide-react";
import Link from "next/link";
import Footer from "../components/footer";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import scrollHandlerHome from "@/lib/scroll";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  const lsRef = useRef<LocomotiveScroll | null>(null);
  useEffect(() => {
    const ls: LocomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        wheelMultiplier: 0.8,
        touchMultiplier: 0.8
      }
    });
    lsRef.current = ls;
    document.addEventListener("scroll", function() {
      scrollHandlerHome(ls);
    });
    return () => ls.destroy();
  });

  return (
    <main data-scroll-speed="0.3" className="main w-100vw">
      <Nav />
      <Hero className="hero"></Hero>

      {/*After hero (Section 2)*/}
      <div className="section-2 justify-center lg:justify-start w-full flex flex-row min-h-fit pt-12 pb-48">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center align-center">
          <div className="w-5/6 lg:w-2/3">
            <h2 className="text-5xl font-bold pb-12 text-left">Our Expertise</h2>

            {/* TODO: add smooth transition to underline */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-3xl font-medium">Branding</AccordionTrigger>
                <AccordionContent className="text-lg">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-3xl font-medium">Digital Products</AccordionTrigger>
                <AccordionContent className="text-lg">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-3xl font-medium">Proprietary Software</AccordionTrigger>
                <AccordionContent className="text-lg">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-3xl font-medium">SEO</AccordionTrigger>
                <AccordionContent className="text-lg">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent >
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-3xl font-medium">Copywriting</AccordionTrigger>
                <AccordionContent className="text-lg">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent >
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="hidden lg:w-1/2">
          <Image src="" alt="" width={12} height={12} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
