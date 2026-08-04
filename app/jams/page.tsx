"use client";
import Image from "next/image";
import { motion } from "motion/react"
import Link from 'next/link';

type Jam = {
  name : string;
  description : string;
  theme : string;
  image_source : string;
  start_date : Date;
  duration_hours : number;
  site : string;
}
const jam_data : Array<Jam> = [
  {
    name: "Scratch Jam 2025",
    description : "First in-person jam of the year! Everyone knows Scratch... but what can you do in 3 hours?",
    theme : "Spin",
    image_source: "/jams/scratchjam.png",
    start_date: new Date(2025, 8, 27, 12),
    duration_hours : 3,
    site : ""
  },
  {
    name: "Ripoff Jam",
    description : "As an introduction for many, we gave people the challenge of recreating a pre-existing game!",
    theme : "Ripoff",
    image_source: "/jams/ripoffjam.png",
    start_date: new Date(2025, 9, 18, 15),
    duration_hours : 168,
    site : "https://itch.io/jam/dagsoc-ripoff-jam"
  },
  {
    name: "Global Game Jam 2026",
    description : "The biggest gamejam event of the year! 48 hours. In-person. 90+ attendees.",
    theme : "Mask",
    image_source: "https://storage-v4.globalgamejam.org/files/styles/sidebar_full/s3/jam_sites/2026/125951/site_poster/logo.png?VersionId=Kk4oqYPNwiJ9g1HNRfMi50Ys13Dvskpp&itok=dnwdBErO",
    start_date: new Date(2026, 0, 30, 17),
    duration_hours : 48,
    site : "https://globalgamejam.org/jam-sites/2026/university-southampton"
  },
  {
    name: "Spring Speedrun Jam",
    description : "A jam spanning the Easter break following a talk on designing games for speedrunning.",
    theme : "You're not supposed to be here",
    image_source: "/jams/speedrunjam.png",
    start_date: new Date(2026, 2, 30, 12),
    duration_hours : 960,
    site : "https://itch.io/jam/spring-speedrun-jam"
  },
  {
    name: "Summer Jam 2026",
    description : "A summer holiday jam for everyone, prospective students included!",
    theme : "TBA",
    image_source: "/jams/summerjamthumb.png",
    start_date: new Date(2026, 7, 9, 17),
    duration_hours : 840,
    site : "https://itch.io/jam/dagsoc-summer-jam-2026"
  }
];

const addHoursToDate = (date:Date, n:number) => {
  const d = new Date(date);
  d.setTime(d.getTime() + n * 3_600_000);
  return d;
};

function GenerateJam(jam:Jam){
  var date_str = jam.start_date.toDateString()
  if (jam.start_date.getHours() + jam.duration_hours >= 24){
    date_str += " - " + addHoursToDate(jam.start_date, jam.duration_hours).toDateString()
  }
  var coming_soon = ""
  if (jam.start_date > new Date()){
    coming_soon = "Coming soon..."
    // date_str = (jam.start_date.getTime() - new Date().getTime())
  }
  return (
    <motion.div className="jamimage" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <a className="jamimage bg-slate-950" href={jam.site}><h2>{jam.name}</h2>
        <p className="text-l italic">{coming_soon}</p>
        <p className="text-[15px] tracking-tighter">{date_str}</p>
        <img className="w-128" src={jam.image_source}></img>
        <p className="text-[20px]">{jam.description}</p>
        </a>
        <p className="text-[25px]">Theme: <strong>{jam.theme}</strong></p>
    </motion.div>
  )
}

export default function Home() {
  var jam_data_sorted = jam_data.sort((a,b) => b.start_date.getTime() - a.start_date.getTime())
  var jam_data_by_year = Map.groupBy(jam_data_sorted, ({start_date}) => start_date.getFullYear())
  var years = new Set(jam_data.map(a => a.start_date.getFullYear))
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-slate-950">
      
      <div className="w-full gradientbg flex flex-row justify-center pt-28 py-8">
        <h1>Past Events</h1>
        </div>
      <main className="text-center flex flex-1 w-full flex-col items-center justify-center py-2">
        {jam_data_by_year.keys().map(key =>
          <div>
            <h1 className="w-full gradientbg flex flex-col items-center">{key}</h1>
            {jam_data_by_year.get(key)!.map(GenerateJam)}
          </div>
          )
        }
      </main>
    </div>
  );
}
