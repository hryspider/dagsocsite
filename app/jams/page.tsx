"use client";
import Image from "next/image";
import { motion } from "motion/react"
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-slate-950">
      
      <div className="w-full gradientbg flex flex-row justify-center pt-28 py-8">
        <h1>Past Events</h1>
        </div>
      <main className="text-center flex flex-1 w-full flex-col items-center justify-center">
        <motion.div className="jamimage" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <a className="jamimage bg-slate-900" href="https://itch.io/jam/spring-speedrun-jam"><h2>Spring Speedrun Jam</h2>
        <img className="w-128" src="/jams/speedrunjam.png"></img>
        <p className="text-[20px]">A jam spanning the Easter break following a talk on designing games for speedrunning.</p>
        </a>
        </motion.div>
  
        <motion.div className="jamimage" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <a className="jamimage bg-slate-950" href="https://globalgamejam.org/jam-sites/2026/university-southampton"><h2>Global Game Jam 2026</h2>
        <img className="w-128" src="https://storage-v4.globalgamejam.org/files/styles/sidebar_full/s3/jam_sites/2026/125951/site_poster/logo.png?VersionId=Kk4oqYPNwiJ9g1HNRfMi50Ys13Dvskpp&itok=dnwdBErO"></img>
        <p className="text-[20px]">The biggest gamejam event of the year! 48 hours. In-person. 90+ attendees.</p>
        </a>
        
        </motion.div>
        <motion.div className="jamimage" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <a className="jamimage bg-slate-900" href="https://itch.io/jam/dagsoc-ripoff-jam"><h2>Ripoff Jam</h2>
        <img className="w-128" src="/jams/ripoffjam.png"></img>
        <p className="text-[20px]">As an introduction for many, we gave people the challenge of recreating a pre-existing game!</p>
        </a>
        </motion.div>

        <motion.div className="jamimage" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <div className="jamimage bg-slate-950"><h2>Scratch Jam</h2>
        <img className="w-128" src="/jams/scratchjam.png"></img>
        <p className="text-[20px]">First in-person jam of the year! Everyone knows Scratch... but what can you do in 3 hours?</p>
        </div>
        </motion.div>
      </main>
    </div>
  );
}
