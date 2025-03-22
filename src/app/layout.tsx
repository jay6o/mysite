import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";


const playfairDisplay = Nunito({ style: "normal", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoftByte",
  description: "B2B Software Development, Web Design, Web Development, Digital Marketing, & Social Media Marketing agency. Servicing businesses, professionals, & individuals for their technology needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.className} antialiased overscroll-none w-[100vw]`}
      >
        {children}
      </body>
    </html>
  );
}
