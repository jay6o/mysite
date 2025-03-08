'use client';

import Image from "next/image";
import Nav from "../components/nav";
import Hero from "../components/hero";
import { Menu } from "lucide-react";
import Link from "next/link";
import Footer from "../components/footer";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import shape1 from "../../public/shape1.png";
import blocks from "../../public/blocks.png"
import tools from "../../public/tools.png"
import palette from "../../public/palette.png";
import calendar from "../../public/calendar.png";
import hourglass from "../../public/hourglass.png";

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
    return () => ls.destroy();
  });

  return (
    <main data-scroll-speed="0.3" className="main w-100vw">
      <Nav />
      <Hero className="hero"></Hero>

      {/* Section 3 */}
      <div className="flex justify-center items-center w-full h-screen">
        <div className="hidden lg:flex lg:h-2/3 lg:w-1/3 relative">
          <Image className="calendar-3d absolute top-3 left-1/3" src={calendar} alt="3D Block" height={150} width={150} />
          <Image className="palette-3d absolute top-1/4 right-0" src={palette} alt="3D Block" height={150} width={150} />
          <Image className="hourglass-3d absolute bottom-0 left-2/3" src={hourglass} alt="3D Block" height={150} width={150} />
          <Image className="blocks-3d absolute bottom-1/4 left-20" src={blocks} alt="3D Block" height={150} width={150} />
        </div>
        <div className="w-full lg:w-2/3 flex flex-col justify-center items-center">
          <p className="w-2/3 text-5xl">World class engineers & designers turning dreams to reality</p>
        </div>
      </div>

      {/*After hero (Section 2)*/}
      <div className="section-2 justify-center lg:justify-start w-full flex flex-row min-h-fit">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center align-center">
          <div className="w-5/6 lg:w-2/3 lg:pl-8">
            <h2 className="text-5xl font-semibold pb-12 text-left">Our Expertise</h2>

            {/* TODO: add smooth transition to underline */}
            <Accordion type="single" collapsible className="w-full min-h-fit">
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
        <div className="hidden lg:flex justify-center items-center lg:w-1/2 h-[500px] w-[500px]">
          <Image className="shape-3d" src={shape1} alt="image" width={390} height={390} />
        </div>
      </div>

      <div className="mission flex flex-col bg-black">
        <h2 className="text-[#f2f2f2] text-center font-semibold text-3xl">Our Mission</h2>
        <div className="flex justify-center">
          <div className="bg-black">
            <h3 className="bg-black text-[#f2f2f2]">Embrace Dreams</h3>
          </div>
          <div className="bg-black">
            <h3 className="bg-black text-[#f2f2f2]">Validate Ideas</h3>
          </div>
          <div className="bg-black">
            <h3 className="bg-black text-[#f2f2f2]">Build</h3>
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer className="footer" />
    </main>
  );
}
