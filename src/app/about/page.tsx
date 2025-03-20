import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function About() {
  return (
    <main className="h-fit min-h-[100vh]">
      <Nav />
      <div className="min-h-fit h-[calc(100vh)] py-[2.5rem] lg:pt-[6rem] bg-[radial-gradient(ellipse_at_35%_130%,_#c4c4ff_10%,_#f2f2f2_50%)] w-[100%] flex flex-col items-center">
        <div className="w-2/3 flex flex-col items-center bg-transparent">
          <h1 className="lg:text-3xl text-3xl font-bold py-24 text-left bg-transparent">About The Agency</h1>
          <p className="bg-transparent text-lg font-medium">The agency was founded by Jonathan Urias, a computer science student from Richmond, VA, </p>
        </div>
      </div>
      <Footer />
    </main >
  );
};
