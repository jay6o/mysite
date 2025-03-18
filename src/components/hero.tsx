'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import calendar from "../../public/calendar.png";
import palette from "../../public/palette.png";
import hourglass from "../../public/hourglass.png";
import blocks from "../../public/blocks.png";

export default function Hero({ className }: { className: string }) {

  const { scrollYProgress } = useScroll();

  // AOS variants for elements
  const heroTextVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const heroImageVariants = {
    hidden: { opacity: 0, x: "50%" },
    visible: { opacity: 1, x: "0%" }
  };

  // Define parallax effects for each image
  const calendarY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const paletteY = useTransform(scrollYProgress, [0, 1], ["0%", "600%"]);
  const hourglassY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const blocksY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="w-full h-[calc(100vh-6rem)] flex flex-col lg:flex-row justify-around lg:justify-center items-center w-full">
      <motion.div
        className={`${className} lg:h-[calc(100vh-6rem)] flex justify-center items-center flex-col w-7/8 lg:w-2/3 relative`}
        variants={heroTextVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <h1 className="w-5/6 font-semibold text-3xl p-4 lg:text-5xl text-left z-10">____ is a software agency that grows brands digitally</h1>
        <p className="w-5/6 text-lg lg:text-2xl text-left p-4">Experienced professionals ready to nurture the growth of your business. We hold your hand every step of the way, from design to deployment.</p>
        <div className="w-5/6 text-left p-4">
          <Button className="font-bold text-lg h-[3.5rem] rounded-3xl border-black w-full lg:w-[18rem]"><Link href="/contact">Get Started</Link></Button>
        </div>
      </motion.div >
      <div className="lg:hidden">
        hello
      </div>
      <motion.div
        className="hidden lg:flex lg:h-[calc(100vh-6rem)] lg:w-1/2 relative overflow-hidden"
        variants={heroImageVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
      >
        <motion.div
          className="absolute top-20 left-20 z-10 bg-transparent"
          style={{ y: calendarY }}
        >
          <Image className="calendar-3d" src={calendar} alt="3D Block" height={150} width={150} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 z-10 bg-transparent"
          style={{ y: paletteY }}
        >
          <Image className="palette-3d" src={palette} alt="3D Block" height={160} width={160} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-1/3 z-20 bg-transparent"
          style={{ y: hourglassY }}>
          <Image className="hourglass-3d" src={hourglass} alt="3D Block" height={160} width={160} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-0 z-20 bg-transparent"
          style={{ y: blocksY }}>
          <Image className="blocks-3d" src={blocks} alt="3D Block" height={160} width={160} />
        </motion.div>
      </motion.div>
    </div >
  );
};
