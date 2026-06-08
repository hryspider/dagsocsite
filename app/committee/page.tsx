import Image from "next/image";
import { motion } from "motion/react"
import Link from 'next/link';
import Member from './member';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-slate-950">
      <div className="w-full bg-slate-600 flex flex-row justify-center pt-28 py-8">
        <h1>About the Committee</h1>
        </div>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start px-16 sm:items-start">
        <Member name="Zac" role="President"></Member>
        <Member name="Nicholas" role="Secretary"></Member>
        <Member name="Eldar" role="Treasurer"></Member>
        <Member name="Connor" role="Events Officer"></Member>
        <Member name="Harry" role="Publicity"></Member>
        <Member name="Anton" role="Welfare"></Member>
      </main>
    </div>
  );
}
