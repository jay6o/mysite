import Nav from "../../components/nav";
import Footer from "../../components/footer";
export default function Contact() {
  return (
    <>
      <Nav className={"h-[5rem] lg:h-[6rem]"} />
      <div className="min-h-fit h-[calc(100vh-6rem)] flex items-center">
        <div className="w-full lg:w-1/2 border-r border-r-2 border-black items-left">
          <div className="h-1/2 flex flex-col justify-around items-center">
            <h1 className="text-4xl text-left font-semibold">{`Let's make you greater!`}</h1>
            <p className="text-left text-2xl w-2/3 py-8">Get a free estimation & consultation for your upcoming software project, no strings attached.</p>
            <ul className="">
              <li className="text-4xl font-bold py-8">E-Mail</li>
              <li className="text-4xl font-bold">Instagram</li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:w-1/2">
        </div>
      </div>
      <Footer className="footer" />
    </>
  );
};
