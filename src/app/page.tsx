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

  const socialProofVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 }
  };

  const section2TextVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 }
  };

  const section3TextVariants = {
    hidden: { opacity: 0, x: 0, y: -100 },
    visible: { opacity: 1, x: 0, y: 0 }
  };

  return (
    <main data-scroll-speed="0.3" className="main w-[100vw] bg-[#f2f2f2]">
      <Nav className={"h-[5rem] lg:h-[6rem] sticky top-0 z-30"} />
      <Hero className="hero z-0"></Hero>

      {/* Social Proof (Section 2)*/}
      {/* ADD TEXT ANIMATION */}
      <motion.div
        className="bg-[#c4c4ff] w-full grid grid-cols-2 gap-6 lg:grid lg:grid-cols-4 place-items-center py-12 lg:py-0 overflow-auto h-[calc(100vh-32rem)] min-h-fit lg:h-[24rem]"
        variants={socialProofVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.3, ease: "easeInOut" }}
      >
        <div className="bg-[#c4c4ff] pl-6 flex flex-col items-center justify-center h-full w-full py-4">
          <p className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center">60+</p>
          <br className="hidden lg:inline" />
          <p className="font-semibold text-xl md:text-2xl leading-tight text-center lg:pt-4">Projects <br />Developed</p>
        </div>
        <div className="bg-[#c4c4ff] border-black flex flex-col items-center justify-center h-full w-full py-4">
          <p className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center">100%</p>
          <br className="hidden lg:inline" />
          <p className="font-semibold text-xl md:text-2xl leading-tight text-center lg:pt-4">Job Success <br />Rate</p>
        </div>
        <div className="bg-[#c4c4ff] pl-6 flex flex-col items-center justify-center h-full w-full py-4">
          <p className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center">90+</p>
          <br className="hidden lg:inline" />
          <p className="font-semibold text-xl md:text-2xl leading-tight text-center lg:pt-4">UIs/UXs <br />Designed</p>
        </div>
        <div className="bg-[#c4c4ff] pl-6 flex flex-col items-center justify-center h-full w-full py-4">
          <p className="text-3xl md:text-5xl lg:text-6xl font-semibold">30+</p>
          <p className="font-semibold text-xl md:text-2xl leading-tight text-center lg:pt-4">Satisfied <br />Clients</p>
        </div>
      </motion.div>

      {/*After hero (Section 2)*/}
      <div className="section-2 justify-center lg:justify-start w-full flex flex-row min-h-fit pt-36 pb-8">
        <div className="w-2/3 lg:w-1/2 flex flex-col justify-center items-center align-center">
          <motion.div
            className="w-5/6 lg:w-2/3 lg:pl-8"
            variants={section3TextVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}>
            <h2 className="text-2xl lg:text-6xl font-semibold pb-4 lg:pb-8 text-left">Our Expertise</h2>

            {/* TODO: add smooth transition to underline */}
            <Accordion type="single" collapsible className="w-full min-h-fit">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl lg:text-[2.5rem] lg:pb-8 font-medium">Web Development</AccordionTrigger>
                <AccordionContent className="text-lg">
                  - Custom coded websites
                  - Custom animations
                  - Ecommerce
                  - Agencies
                  - Businesses
                  - Portfolios
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl lg:text-[2.5rem] lg:pb-8 font-medium">Proprietary Software</AccordionTrigger>
                <AccordionContent className="text-lg">
                  - Software applications
                  - Mobile apps
                  - Data analysis
                  - Data scrapers
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl lg:text-[2.5rem] lg:pb-8 font-medium">SEO</AccordionTrigger>
                <AccordionContent className="text-lg">
                  - Optimize websites for greater organic traffic
                  - Refactor code for easier parsing by web crawlers
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl lg:text-[2.5rem] lg:pb-8 font-medium">Copywriting</AccordionTrigger>
                <AccordionContent className="text-lg">
                  - Brand image
                  - Appealing copy for possible/existing clients
                  - Attention grabbing messages
                </AccordionContent >
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl lg:text-[2.5rem] lg:pb-8 font-medium">Digital Marketing</AccordionTrigger>
                <AccordionContent className="text-lg">
                  - Increase traffic
                  - Marketing campaigns
                  - Social media presence
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

      {/* Section 3 */}
      <div className="flex justify-center items-center w-full lg:p-0 h-fit lg:h-screen">
        <div className="hidden lg:flex lg:h-2/3 lg:w-1/3 relative">
          <motion.div
            className="absolute bottom-0 left-20"
            style={{ y: toolsY }}>
            <Image className="shape-3d" src={tools} alt="image" width={390} height={390} />
          </motion.div>
        </div>
        <div className="w-full h-full lg:w-2/3 flex flex-col justify-center items-center py-36 lg:p-0">
          <motion.div className="w-2/3 text-5xl flex flex-col justify-center items-start"
            variants={section2TextVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <p className="text-2xl lg:text-5xl pb-8">We believe that everyone has the power to create change in this world, and our job is to foster the environment for you</p>
            <p className="text-lg lg:text-2xl lg:w-5/6">Our world class designers, engineers, and marketing professionals have years of industry experience, and are sure to bring any idea you have to fruition</p>
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
