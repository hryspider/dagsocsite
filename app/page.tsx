"use client";
import Image from "next/image";
import Link from 'next/link';
import { motion } from "motion/react";



export default function Home() {
  return (
    <div className="py-16  flex flex-col flex-1 items-center justify-center font-sans bg-slate-950">
      <motion.div className="w-full gradientbg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className=" flex flex-row justify-center py-16">
          <Image
          src="/dagsoclogo.svg"
          alt="DAGsoc logo"
          width={200}
          height={20}
          priority/>
          <div className="flex flex-col justify-center">
            <h1 className="max-w-xs text-indigo-50">DAGsoc</h1>
            <h3 className="max-w-xs text-slate-400">Digital Art & Gamedev Society</h3>
          </div>
        </div>
        <div className="w-full parallax2"></div>
        <div className="w-full parallax1"></div>
        </motion.div>
      
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center px-16">
         

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h1>Welcome to DAGsoc!</h1>
          <div className="pb-10">DAGsoc aims to promote and share digital art and game development on and off campus. With frequent art challanges, game jams, talks and excursions, we welcome everyone who is interested in not only game development, but all forms of digital art! Everyone is welcome, regardless of what subject they are studying or their experience! </div>
        </motion.div>
        
        
        <a
            className="mainbutton flex button justify-center hover:border-transparent border-white/[.145] hover:bg-white hover:text-slate-800"
            // target="_blank"
            rel="noopener noreferrer"
            href="https://www.susu.org/groups/digital-arts-and-gamedev-society"
          >
            Sign up on SUSU!
          </a>
        <div className="flex flex-column w-full">
          <a
          href="/committee"
            className="mainbutton flex button justify-center hover:border-transparent border-white/[.145] hover:bg-blue-600"
            // target="_blank"
            rel="noopener noreferrer"
          >
            Committee
          </a>
        <Link
            href="/jams"
            className="mainbutton flex button justify-center hover:border-transparent border-white/[.145] hover:bg-blue-600"
            // target="_blank"
            rel="noopener noreferrer"
          >
            Our Events
          </Link>
          </div>
        <a className="flex grid justify-center pb-10" href="https://discord.gg/Snhmz2C85X">
          <Image className="" src="/discordpromo.png" width={600} height={50} alt="Join our discord!"></Image>
        </a>
      </main>
    </div>
  );
}
