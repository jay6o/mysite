import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "About | SoftByte",
  description: "SoftByte is a leading agency in the software and web development space, as well as the social media and digital marketing space."
};

export default function About() {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow py-[2.5rem] lg:pt-[6rem] bg-[radial-gradient(ellipse_at_35%_130%,_#c4c4ff_10%,_#f2f2f2_50%)] w-full flex flex-col items-center overflow-y-auto">
        <div className="w-2/3 lg:w-full max-w-2xl px-4 lg:px-0 bg-transparent">
          <h1 className="text-3xl font-bold py-24 text-center lg:text-center bg-transparent">About the agency</h1>
          <div className="space-y-6 text-base lg:text-lg font-medium bg-transparent">
            <p className="bg-transparent">
              At SoftByte, we&apos;re passionate about bridging the gap between technology and business needs. Our mission is to empower companies with innovative software solutions and strategic marketing strategies that drive real results.
            </p>
            <p className="bg-transparent">
              Founded in 2024, our journey began with a vision to transform how businesses interact with technology. We saw an opportunity to create impactful software and marketing campaigns that not only meet but exceed client expectations. Today, we&apos;re proud to have helped numerous businesses achieve their goals through our tailored services.
            </p>
            <h2 className="text-xl font-semibold pt-4 bg-transparent">Our Values</h2>
            <ul className="list-disc pl-5 space-y-4 bg-transparent">
              <li><strong>Innovation:</strong> We believe in staying ahead of the curve, embracing the latest technologies and trends to deliver cutting-edge solutions.</li>
              <li><strong>Collaboration:</strong> Our team works closely with clients to understand their unique challenges and develop personalized strategies.</li>
              <li><strong>Customer Focus:</strong> We prioritize building long-term relationships by delivering exceptional service and support.</li>
            </ul>
            <h2 className="text-xl font-semibold pt-4 bg-transparent">Our Expertise</h2>
            <ul className="list-disc pl-5 space-y-4 bg-transparent">
              <li><strong>Software Development:</strong>Crafting bespoke software solutions that streamline operations and enhance productivity.</li>
              <li><strong>Digital Marketing</strong>Developing comprehensive marketing strategies that boost brand visibility and drive conversions.</li>
            </ul>

            <h2 className="text-xl font-semibold pt-4 bg-transparent">Success Stories</h2>
            <p className="bg-transparent">
              We&apos;re proud of the success stories we&apos;ve helped create. From increasing website traffic by 300% for a leading e-commerce brand to developing a custom CRM system that boosted sales efficiency by 50%, our work speaks for itself.
            </p>

            <h2 className="text-xl font-semibold pt-4 bg-transparent">Join Us</h2>
            <p className="bg-transparent">
              Whether you&apos;re looking to revamp your software infrastructure or elevate your marketing game, we&apos;re here to help. Let&apos;s work together to achieve your business goals.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main >
  );
}

