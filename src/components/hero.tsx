'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";
const AOS = require("aos");
import "aos/dist/aos.css";
import { motion, useScroll, useTransform } from "framer-motion";
import calendar from "../../public/calendar.png";
import palette from "../../public/palette.png";
import hourglass from "../../public/hourglass.png";
import blocks from "../../public/blocks.png";

export default function Hero({ className }: { className: string }) {
  useEffect(() => {
    AOS.init();
  });

  const { scrollYProgress } = useScroll();

  // Define parallax effects for each image
  const calendarY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const paletteY = useTransform(scrollYProgress, [0, 1], ["0%", "600%"]);
  const hourglassY = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const blocksY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);


  return (
    <div className="w-full flex justify-center items-center w-full">
      <div className={`${className} h-[calc(100vh-6rem)] flex justify-center items-center flex-col w-2/3`} data-aos="fade-up" data-aos-duration="1500">
        <h1 className="w-5/6 font-normal text-5xl pb-12 pl-12 text-left">____ is a software agency that grows brands digitally</h1>
        <div className="w-5/6 pl-12">
          <Button className="font-bold text-lg h-[3.4rem] rounded-3xl"><Link href="/contact">Get a Free Estimate</Link></Button>
        </div>
      </div>
      <div className="hidden lg:flex lg:h-[calc(100vh-6rem)] lg:w-1/2 relative overflow-hidden">
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
      </div>
    </div >
  );
};
