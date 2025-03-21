import Nav from "@/components/nav";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <>
      <Nav />
      <div className="min-h-fit h-[calc(100vh)] py-[2.5rem] lg:pt-[6rem] flex flex-col lg:flex-row justify-center lg:justify-around items-center w-full bg-[radial-gradient(ellipse_at_30%_100%,_#c4c4ff_0%,_#f2f2f2_60%)] w-screen">
        <div className="h-1/2 w-2/3 lg:w-1/3 flex flex-col justify-center items-start bg-transparent">
          <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.5rem] font-semibold py-4">Ready to build?</h2>
          <p className="text-[1.25rem] md:text-[2rem] lg:text-[2rem]">Reach out to us about your project and we&apos;ll give you a <b>free</b> consultation</p>
        </div>

        <div className="w-2/3 lg:w-1/4 h-1/3 lg:h-[30%] max-h-[48rem] flex flex-col justify-around border rounded-xl border-black/30 items-center shadow-2xl">
          <div className="secondary h-[40%] w-[90%] border border-black/15 rounded-xl shadow-lg flex items-center px-[5%]">
            <Phone className="h-[2rem] w-[2rem] md:h-[2.8rem] md:w-[4rem]" />
            <span className="px-4 text-[1rem] md:text-[1.5rem] lg:text-[1.2rem]">804-385-4576</span>
          </div>
          <div className="secondary h-[40%] w-[90%] border border-black/15 rounded-xl shadow-lg flex items-center px-[5%]">
            <Mail className="h-[2rem] w-[2rem] md:h-[2.8rem] md:w-[4rem]" />
            <span className="px-4 text-[1rem] md:text-[1.5rem] lg:text-[1.2rem]">jurias6@proton.me</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
