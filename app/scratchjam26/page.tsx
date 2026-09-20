"use client";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-slate-950">
      
      <div className="w-full gradientbg flex flex-row justify-center pt-28 py-8">
        <Image src="/jams/scratchjam26.png" height={50} width={400} alt="Scratch Jam 26 Logo."></Image>
        </div>
      <main className="text-center flex flex-1 w-full flex-col items-center  py-2">
        <p>Welcome back members new and old! It's almost time for DAGsoc's first event of the academic year!</p>
        <p>We're doing the annual Scratch Jam. If you've never participated in a game jam, no worries! This is a beginner-friendly event for fun!</p>
        <p>Everyone will have 3 hours to make a game in Scratch. At the end, there'll be a chance to go around and play everyone else's games!</p>
        <p>It's always a great opportunity to meet people with a similar interest in game development and digital art.</p>
        <p className="text-3xl pt-10">Details</p>
        <ol>
          <li>📆 Sunday 20th September</li>
          <li>⏲️ 12:00 - 15:00</li>
          <li>🗺️ Building 58, Room 1047 (Highfield Campus)</li>
          <li>(So for ECSS folks, you're going to have a fun weekend!)</li>
      </ol>
      <a className="pt-10 text-4xl font-bold text-teal-400" href="https://scratch.mit.edu/users/scratchjam25dag/favorites/">See projects</a>
      </main>
    </div>
  );
}
