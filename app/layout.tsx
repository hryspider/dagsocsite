import type { Metadata } from "next";
import { Elms_Sans} from "next/font/google";
import Image from "next/image";
import "./globals.css";

const elmsSans = Elms_Sans({
  variable: "--font-elms-sans",
  subsets: ["latin"],
});

const PAGE_SUSU = "https://www.susu.org/groups/digital-arts-and-gamedev-society";
const PAGE_DISCORD = "https://discord.gg/kCwz5wxM";
const PAGE_INSTA = "https://www.instagram.com/uos_dagsoc/";



export const metadata: Metadata = {
  title: "DAGsoc",
  description: "Official website for the University of Southampton's Digital Art and Gamedev Society",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${elmsSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex w-full flex-row justify-end items-center">
          <a href={PAGE_SUSU}><img src="/susu.png" className="pixelicon brightness-1000 transition duration-50 hover:brightness-100"/></a>
          <a href={PAGE_DISCORD}><img src="/discord.png" className="pixelicon brightness-1000 transition duration-50 hover:brightness-100"/></a>
          <a href={PAGE_INSTA}><img src="/insta.png" className="pixelicon brightness-1000 transition duration-50 hover:brightness-100"/></a>
        </div>
        {children}
        </body>
    </html>
  );
}
