import Nav from "@/components/nav";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <>
      <Nav />
      <div className="min-h-fit h-[calc(100vh-10rem)] lg:h-[calc(100vh)] pt-[5rem] lg:pt-[6rem] flex flex-col lg:flex-row justify-around lg:justify-between items-center w-full bg-[radial-gradient(ellipse_at_30%_100%,_#c4c4ff_0%,_#f2f2f2_60%)]">
        <div className="w-full lg:w-1/2 pt-[4rem] md:pt-[2rem] lg:pt-[6rem] h-1/2 flex flex-col justify-center items-center bg-transparent">
          <div className="w-2/3 h-full bg-transparent">
            <h2 className="text-5xl font-medium py-6 bg-transparent">Ready to build?</h2>
            <p className="text-2xl bg-transparent h-fit">Reach out to us about your project and we&apos;ll give you a <b>free</b> consultation!</p>
          </div>
        </div>
        <div className="w-2/3 lg:w-1/2 h-full max-h-[48rem] flex flex-col justify-start lg:justify-center items-center lg:pt-[5rem] bg-transparent">
          <div className="h-1/3 w-full md:w-[32rem] lg:w-[24rem] border border-black/40 rounded-lg flex flex-col justify-around items-center py-2">
            <div className="h-[40%] w-[90%] secondary rounded-lg border border-black/25 flex items-center px-8">
              <Phone size={32} />
            </div>
            <div className="h-[40%] w-[90%] secondary rounded-lg border border-black/25 flex items-center px-8">
              <Mail size={32} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
