import type { Metadata } from "next";
import { Elms_Sans} from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from 'next/link';
import Layout from '../components/layout'
import NestedLayout from '../components/nested-layout'


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
        <div className="fixed z-100 bg-black flex w-full flex-row justify-between items-center px-10">
          <Link href="/"><img src="/pixeldag.png" className="pixelicon colourcycle transition duration-50 hover:brightness-1000"/></Link>
          <div className="justify-end flex flex-row">
            <a href={PAGE_SUSU}><img src="/susu.png" className="pixelicon brightness-1000 transition duration-50 hover:brightness-100"/></a>
            <a href={PAGE_DISCORD}><img src="/discord.png" className="pixelicon brightness-1000 transition duration-50 hover:brightness-100"/></a>
            <a href={PAGE_INSTA}><img src="/insta.png" className="pixelicon brightness-1000 transition duration-50 hover:brightness-100"/></a>
          </div>
        </div>
        {children}
        <div className="flex justify-center py-5">Copyright © 2026 Southampton Digital Art and Gamedev Society</div>
        </body>
    </html>
  );
}
