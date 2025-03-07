'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
const AOS = require("aos");
import "aos/dist/aos.css";

export default function Hero({ className }: { className: string }) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <div className={`${className} h-[calc(100vh-6rem)] flex justify-center items-center pb-[4rem] flex-col`} data-aos="fade-up" data-aos-duration="1500">
        <h1 className="w-1/2 font-normal text-5xl text-center pb-12">____ is a software agency that grows brands digitally</h1>
        <Button className="font-bold text-lg h-[3rem] rounded-3xl"><Link href="/contact">Free Consultation</Link></Button>
      </div>
    </div >
  );
};
