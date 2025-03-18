'use client';

import Image from "next/image";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Footer from "../components/footer";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import shape1 from "../../public/shape1.png";
import tools from "../../public/tools.png";
import { useTransform, useScroll, motion } from "framer-motion";

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

  const { scrollYProgress } = useScroll();

  // Define parallax effects for each image
  const toolsY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const shape1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  const section2TextVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 }
  };

  const section3TextVariants = {
    hidden: { opacity: 0, x: 0, y: -100 },
    visible: { opacity: 1, x: 0, y: 0 }
  };

  return (
    <main data-scroll-speed="0.3" className="main w-[100vw]">
      <Nav className={"h-[6rem] sticky top-0 z-30"} />
      <Hero className="hero z-0"></Hero>

      {/* Section 3 */}
      <div className="flex justify-center items-center w-full h-screen">
        <div className="hidden lg:flex lg:h-2/3 lg:w-1/3 relative">
          <motion.div
            className="absolute bottom-0 left-20"
            style={{ y: toolsY }}>
            <Image className="shape-3d" src={tools} alt="image" width={390} height={390} />
          </motion.div>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col justify-center items-center">
          <motion.div className="w-2/3 text-5xl"
            variants={section2TextVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >

            <p className="">World class engineers & designers turning dreams to reality</p>
          </motion.div>
        </div>
      </div>

      {/*After hero (Section 2)*/}
      <div className="section-2 justify-center lg:justify-start w-full flex flex-row min-h-fit pb-36">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center align-center">
          <motion.div
            className="w-5/6 lg:w-2/3 lg:pl-8"
            variants={section3TextVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}>
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
          </motion.div>
        </div>
        <div className="hidden lg:flex justify-center items-center lg:w-1/2 h-[500px] w-[500px] relative">
          <motion.div
            className="absolute bottom-0 right-1/4"
            style={{ y: shape1Y }}>
            <Image className="shape-3d" src={shape1} alt="image" width={390} height={390} />
          </motion.div>
        </div>
      </div>

      {/*
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
      */}


      {/* Footer */}
      <Footer className="footer" />
    </main>
  );
}
