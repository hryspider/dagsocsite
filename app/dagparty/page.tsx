import Image from "next/image";
import { motion } from "motion/react"
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-slate-950">
      <div className="w-full gradientbg flex flex-row justify-center pt-28 py-8">
        <div className="flex flex-col text-center">
            <Image src={"/jams/dagparty.png"} width={600} height={600} alt={"DAGParty logo"}></Image>
            <h2 className=" text-2xl">Our most ambitious project yet...</h2>
        </div>
        </div>
      <main className="grid-cols-3 flex-1 w-full max-w-3xl items-center justify-start px-16 sm:items-start">
        <h1 className="pb-2">What is DAGparty?</h1>
        <p className="">In a nutshell?</p>
        <p className=""><strong>Mario Party</strong> but <strong>everyone makes the minigames!</strong></p>
        <h2 className="pt-10 pb-2 text-4xl">Board games meet game jams</h2>
        <p className="">We've made a board game framework in <a href="https://godotengine.org/download/archive/" className="text-teal-300">Godot</a> that will house the minigames.</p>
        <Image className="w-full" src={"/dagparty_board.png"} width={500} height={100} alt={"Gamplay of DAGparty's board"}></Image>
        <p className="pt-5 pb-15">Everything on how to make a minigame is explained in the project's <strong>README.md</strong> file. Each minigame's data will be stored in their own folder inside the project's "minigames" folder.</p>
        <a className="text-teal-300 p-30 text-4xl pb-2" href="https://github.com/hryspider/dagsoc-party">Download the project!</a>
        <div className="p-10"></div>
        {/* <p>Have you played Mario Party or Wii Party before?</p> */}
        {/* <p className="pt-10">A multiplayer board game with interspersed minigames that give you an advantage if won.</p> */}
        {/* <p className="pt-10">What if you combined a board game with a game jam?</p> */}
    </main>
    </div>
  );
}
