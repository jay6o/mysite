'use client';

import Head from "next/head";
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
    const ls = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        wheelMultiplier: 0.8,
        touchMultiplier: 0.8
      }
    });
    lsRef.current = ls;
    return () => {
      if (lsRef.current) {
        lsRef.current.destroy();
      }
    };
  }, []); // Add empty dependency array
  const { scrollYProgress } = useScroll();

  // Define parallax effects for each image
  const toolsY = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  const shape1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-220%"]);

  const section2TextVariants = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 }
  };

  const socialProofTextVariants = {
    hidden: { opacity: 0, x: 0, y: -40 },
    visible: { opacity: 1, x: 0, y: 0 }
  }


  return (
    <div data-scroll-container data-scroll-speed="0.3" className="main w-[100vw] bg-[#f2f2f2]">
      <Head>
        <title>Increase Revenue Through Digital Marketing | Brand</title>
        <meta name="description" 
          content="Boost your business with SEO, PPC, and high-converting websites. Proven strategies to grow traffic and sales — start seeing results in 30 days."
          key="desc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.agency-iota-eosin.vercel.com/" />
        <meta property="og:title" content="Increase Revenue Through Digital Marketing | Brand" />
        <meta property="og:description" 
          content="Boost your business with SEO, PPC, and high-converting websites. Proven strategies to grow traffic and sales — start seeing results in 30 days."
          key="ogdesc"
        />
        {/*
            == UPDATE LATER ==

            <meta property="og:image" content="https://yourdomain.com/preview.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
          */} 
        <meta property="og:url" content="https://www.agency-iota-eosin.vercel.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Nav />
      <main>
        <div className="pt-[5rem] lg:pt-[6rem]">
          <Hero className="hero z-0"></Hero>
        </div>

        {/* Social Proof (Section 2)*/}
        {/* ADD TEXT ANIMATION */}
        <div
          className="bg-gradient-to-l from-[#917cdb] to-[#c4ceff]/60 w-full grid grid-cols-2 gap-6 lg:grid lg:grid-cols-4 place-items-center py-12 lg:py-0 overflow-auto h-[calc(100vh-32rem)] min-h-fit lg:h-[24rem]"
        >
          <div className="bg-transparent pl-6 flex flex-col items-center justify-center h-full w-full py-4">
            <motion.p
              className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center"
              variants={socialProofTextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            >60+
            </motion.p>
            <br className="hidden lg:inline" />
            <p className="font-semibold text-xl md:text-2xl leading-tight text-center lg:pt-4">Projects <br />Developed</p>
          </div>
          <div className="bg-transparent border-black flex flex-col items-center justify-center h-full w-full py-4">
            <motion.p
              className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center"
              variants={socialProofTextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
            >100%
            </motion.p>
            <br className="hidden lg:inline" />
            <p className="font-semibold text-xl md:text-2xl leading-tight text-center lg:pt-4">Job Success <br />Rate</p>
          </div>
          <div className="bg-transparent pl-6 flex flex-col items-center justify-center h-full w-full py-4">
            <motion.p
              className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center"
              variants={socialProofTextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.6, ease: "easeInOut" }}
            >90+</motion.p>
            <br className="hidden lg:inline" />
            <p className="font-semibold text-xl md:text-2xl leading-tight text-center lg:pt-4">UIs/UXs <br />Designed</p>
          </div>
          <div className="bg-transparent pl-6 flex flex-col items-center justify-center h-full w-full py-4">
            <motion.p
              className="text-3xl md:text-5xl lg:text-6xl font-semibold text-center"
              variants={socialProofTextVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.9, ease: "easeInOut" }}
            >30+</motion.p>
            <p className="font-semibold text-xl md:text-2xl leading-tight text-center lg:pt-4">Satisfied <br />Clients</p>
          </div>
        </div>

        {/*After hero (Section 2)*/}
        <div id="services" className="section-2 justify-center lg:justify-start w-full flex flex-row min-h-fit py-12 pt-24 lg:pt-36 lg:pb-8">
          <div className="w-2/3 lg:w-1/2 flex flex-col justify-center items-center align-center">
            <div
              className="w-full lg:w-2/3 lg:pl-8"
            >
              <h2 className="text-3xl lg:text-5xl font-semibold pb-4 lg:pb-8 text-left">Our Expertise</h2>

              {/* TODO: add smooth transition to underline */}
              <Accordion type="single" collapsible className="w-full min-h-fit">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-xl lg:text-[2.1rem] lg:pb-8 font-medium">Web Development</AccordionTrigger>
                  <AccordionContent className="text-lg lg:text-xl font-medium">
                    <ul className="list-disc list-inside">
                      <li>Responsive designs</li>
                      <li>Company and portfolio websites</li>
                      <li>API development and integration</li>
                      <li>Database design and management</li>
                      <li>Performance optimization</li>
                      <li>Full-stack development</li>
                      <li>Website maintenance and support</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem >
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-xl lg:text-[2.1rem] lg:pb-8 font-medium">Proprietary Software</AccordionTrigger>
                  <AccordionContent className="text-lg lg:text-xl font-medium">
                    <ul className="list-disc list-inside">
                      <li>Custom software applications</li>
                      <li>Custom CRM systems</li>
                      <li>Inventory management systems</li>
                      <li>E-Commerce platforms</li>
                      <li>Content management systems (CMS)</li>
                      <li>Automation tools</li>
                      <li>Business intelligence dashboards</li>
                      <li>API development and integration</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem >
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-xl lg:text-[2.1rem] lg:pb-8 font-medium">Digital Marketing</AccordionTrigger>
                  <AccordionContent className="text-lg lg:text-xl font-medium">
                    <ul className="list-disc list-inside">
                      <li>PPC ads</li>
                      <li>Email marketing</li>
                      <li>Influencer/affiliate marketing</li>
                      <li>Retargeting</li>
                      <li>Content creation</li>
                      <li>Social media presence</li>
                    </ul>
                  </AccordionContent >
                </AccordionItem >
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-xl lg:text-[2.1rem] lg:pb-8 font-medium">Copywriting</AccordionTrigger>
                  <AccordionContent className="text-lg lg:text-xl font-medium">
                    <ul className="list-disc list-inside">
                      <li>Brand image</li>
                      <li>Attention grabbing statements</li>
                      <li>Persuasive product descriptions</li>
                      <li>Ad copy</li>
                      <li>White papers and case studies</li>
                      <li>Tagline and slogan development</li>
                    </ul>
                  </AccordionContent >
                </AccordionItem >
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-xl lg:text-[2.1rem] lg:pb-8 font-medium">SEO</AccordionTrigger>
                  <AccordionContent className="text-lg lg:text-xl font-medium">
                    <ul className="list-disc list-inside">
                      <li>Technical SEO audits</li>
                      <li>Keyword research and strategy</li>
                      <li>Optimize website accessibility</li>
                      <li>Site speed optimization</li>
                      <li>Content optimization</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem >
              </Accordion >
            </div >
          </div >
          <div className="hidden lg:flex justify-center items-center lg:w-1/2 h-[500px] w-[500px] relative">
            <motion.div
              className="absolute bottom-[-60%] right-1/4 bg-transparent"
              style={{ y: shape1Y }}>
              <Image className="shape-3d bg-transparent" src={shape1} alt="image" width={390} height={390} />
            </motion.div>
          </div>
        </div >

        {/* Section 3 */}
        < div className="flex justify-center items-center w-full lg:p-0 h-fit lg:h-screen" >
          <div className="hidden lg:flex lg:h-2/3 lg:w-1/3 relative">
            <motion.div
              className="absolute lg:bottom-[-100%] left-20 bg-transparent"
              style={{ y: toolsY }}>
              <Image className="shape-3d bg-transparent" src={tools} alt="image" width={390} height={390} />
            </motion.div>
          </div>
          <div className="w-full h-full lg:w-2/3 flex flex-col justify-center items-center py-12 pb-28 lg:p-0">
            <motion.div className="w-2/3 text-5xl flex flex-col justify-center items-start"
              variants={section2TextVariants}
              whileInView="visible"
              initial="hidden"
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <p className="text-2xl lg:text-5xl font-semibold pb-8">Dream on, we&apos;ll build it</p>
              <p className="text-lg lg:text-2xl lg:w-5/6">Just give us your ideas, and our experienced professionals will build it for you. We keep you in the know about every move we make so that you are 100% satisfied with our service.</p>
            </motion.div >
          </div >
        </div >

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
      </main >
      <Footer />
    </div>
  );
}
