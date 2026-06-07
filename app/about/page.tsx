import Image from "next/image";
import { motion } from "motion/react"
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-slate-950">
      <div className="w-full bg-slate-600 flex flex-row justify-center py-16">
        <h1>About</h1>
        </div>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start px-16 sm:items-start">
        
        <div>WIP!</div>
      </main>
    </div>
  );
}
