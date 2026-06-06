import Image from "next/image";
import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-slate-950">
      <div className="w-full bg-slate-600 flex flex-row justify-center py-16">
          <Image
          // className="dark:invert"
          src="/dagsoclogo.svg"
          alt="DAGsoc logo"
          width={200}
          height={20}
          priority/>
          <div className="flex flex-col justify-center">
            <h1 className="max-w-xs text-4xl font-extrabold text-black dark:text-indigo-50">DAGsoc</h1>
            <h3 className="max-w-xs text-lg font-semibold text-slate-900 dark:text-slate-400">Digital Art & Gamedev Society</h3>
          </div>
        </div>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start px-16 sm:items-start">
        
        <div className="py-10">DAGsoc aims to promote and share digital art and game development on and off campus. With frequent art challanges, game jams, talks and excursions, we welcome everyone who is interested in not only game development, but all forms of digital art! Everyone is welcome, regardless of what subject they are studying or their experience! </div>
        <a
            className="flex button justify-center hover:border-transparent hover:bg-slate/[.04] dark:border-white/[.145]  dark:hover:bg-white dark:hover:text-slate-800"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.susu.org/groups/digital-arts-and-gamedev-society"
          >
            Sign up on SUSU!
          </a>
        <div className="flex flex-column w-full">
          <a
            className="flex button justify-center hover:border-transparent hover:bg-slate/[.04] dark:border-white/[.145] dark:hover:bg-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
        <a
            className="flex button justify-center hover:border-transparent hover:bg-slate/[.04] dark:border-white/[.145] dark:hover:bg-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Past Events
          </a>
          </div>
        
        {/* <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div> */}
      </main>
    </div>
  );
}
