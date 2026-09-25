import Image from "next/image";
import { motion } from "motion/react"
import Link from 'next/link';
import Member from './member';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-slate-950">
      <div className="w-full gradientbg flex flex-row justify-center pt-28 py-8">
        <h1>About the Committee</h1>
        </div>
      <main className="grid-cols-3 flex-1 w-full max-w-3xl items-center justify-start px-16 sm:items-start">
        <Member 
          name="Zac"
          role="President"
          games={["Terraria", "Celeste", "Stardew Valley"]}
          tools={[["Shader Toy", "https://www.shadertoy.com/"], ["Nvidia Nsight", "https://developer.nvidia.com/nsight-systems"], ["C++", "https://devdocs.io/cpp/"], ["Monogame", "https://monogame.net/"]]}
        />
        <Member
          name="Nicholas"
          role="Secretary"
          games={["Read Dead Redemption 2", "Warframe"]}
          tools={[["Unity", "https://unity.com/"]]}
        />
        <Member
            name="Eldar"
            role="Treasurer"
            games={["Factorio, Portal 2, Dying Light"]}
            tools={[["raylib", "https://www.raylib.com/"], ["C++", "https://devdocs.io/cpp/"], ["Procreate", "https://procreate.com/"], ["Git", "https://git-scm.com/"], ["Internet Archive", "https://archive.org/"]]}
        />
        <Member
            name="Connor"
            role="Events Officer"
            games={["Enter the Gungeon", "PlateUp!", "Baldur's Gate 3"]}
            tools={[["Unity", "https://unity.com/"], ["Unreal Engine", "https://www.unrealengine.com/"], ["C++", "https://devdocs.io/cpp/"], ["C#", "https://learn.microsoft.com/en-us/dotnet/csharp/"], ["HLSL", "https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-reference"]]}
        />
        <Member
          name="Harry"
          role="Publicity"
          games={["Hollow Knight: Silksong", "DELTARUNE", "Celeste", "Legacy Console Minecraft Minigames!"]}
          tools={[["Logic Pro", "https://www.apple.com/uk/logic-pro/"], ["Godot 4", "https://godotengine.org/"], ["Procreate", "https://procreate.com/"], ["Inkscape", "https://inkscape.org/"], ["Aseprite", "https://www.aseprite.org/"]]}
        />
        <Member
          name="Anton"
          role="Welfare"
          games={["Slay the Spire 2", "YOMI Hustle", "Graphwar"]}
          tools={[["Gamemaker", "https://gamemaker.io/"], ["Beepbox", "https://www.beepbox.co/"]]}
        />
        </main>
    </div>
  );
}
