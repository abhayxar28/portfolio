"use client";

import LightRays from "./ui/LightRays/LightRays";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter} from "lucide-react";
import { PythonIcon } from "./ui/python-icon";
import NextjsIcon from "./ui/nextjs-icon";
import JSIcon from "./ui/js-icon";
import CIcon from "./ui/c-icon";
import ReactIcon from "./ui/react-icon";
import NodeJsIcon from "./ui/nodejs-icon";
import TypeScriptIcon from "./ui/typescript-icon";
import TailwindIcon from "./ui/tailwind-icon";
import PostgreSQLIcon from "./ui/postgress-icon";
import { Scroll } from "./Scroll";
import Link from "next/link";

export default function Landing() {
  const skills = [
    { name: "React", icon: <ReactIcon /> },
    { name: "Next.js", icon: <NextjsIcon /> },
    { name: "NodeJs", icon: <NodeJsIcon /> },
    { name: "C/C++", icon: <CIcon /> },
    { name: "JavaScript", icon: <JSIcon /> },
    { name: "TypeScript", icon: <TypeScriptIcon /> },
    { name: "PostgreSQL", icon: <PostgreSQLIcon /> },
    { name: "Tailwind CSS", icon: <TailwindIcon /> },
    { name: "Python", icon: <PythonIcon /> },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="white"
          raysSpeed={0.5}
          lightSpread={1}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.01}
          noiseAmount={0.3}
          distortion={0.05}
          className="w-full h-full pointer-events-none"
        />
      </div>

      <main className="relative z-10 flex flex-col items-center w-full px-6 pt-32 pb-20 text-center">
        <div className="max-w-3xl space-y-6 mb-16">
          <p className="text-sm text-gray-300">{"Hey, I'm"}</p>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            Abhay Rawat
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            {"I'm a BCA graduate from CCS University and a full-stack web developer with a focus on TypeScript, Next.js, Prisma, and PostgreSQL. I love building clean, responsive UIs with Tailwind CSS and ShadCN UI. I'm also passionate about AI/ML and always exploring new ways to grow as a developer."}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">

            <Link href="https://www.linkedin.com/in/abhay-rawat-b3ba25327/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex gap-2 items-center cursor-pointer">
                <Linkedin size={16} />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://x.com/abhayrawat29565" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex gap-2 items-center cursor-pointer">
                <Twitter size={16} />
                Twitter
              </Button>
            </Link>
            <Link href="https://github.com/abhayxar28" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex gap-2 items-center cursor-pointer">
                <Github size={16} />
                GitHub
              </Button>
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=abhayarrawat28@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="flex gap-2 items-center cursor-pointer">
                <Mail size={16} />
                Mail
              </Button>
            </Link>
          </div>
        </div>

        <section className="p-6 max-w-lg w-full">
          <h2 className="text-xl font-semibold mb-6 text-white border-b border-gray-700 pb-2">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300">
            {skills.map(({ name, icon }) => (
              <li
                key={name}
                className="flex items-center gap-2 bg-gray-800 bg-opacity-60 rounded-md py-2 px-4 justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:via-blue-500 hover:to-pink-500 hover:text-white transition cursor-default"
                title={name}
              >
                {icon}
                <span className="text-sm font-medium">{name}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <section>
        <div className="flex justify-center items-center text-4xl font-bold  p-2">
          <h1 className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">PROJECTS</h1>
        </div>
      </section>
      <section>
        <Scroll />
      </section>
    </div>
  );
}
