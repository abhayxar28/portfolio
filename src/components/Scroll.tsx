"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Link from "next/link";

const content = [
  {
    title: "TaskVerse",
    description:
      "TaskVerse is a smart and simple to-do app that lets you manage your tasks across time. Add tasks for today or the future, review completed or pending past tasks, and stay organized with a clear view of what's done and what's next.",
    content: (
      <Link
        href="https://schedule-todo-mauve.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/image/taskverse.png"
            alt="TaskVerse"
            className="object-fit w-full h-full"
          />
        </div>
      </Link>
    ),
  },
  {
    title: "FinFlow",
    description:
    "FinFlow is a smart expense tracker that helps you manage income, expenses, and transactions effortlessly. With built-in AI for financial insights and beautiful interactive charts, it simplifies budgeting and helps you stay on top of your money.",
    content: (
      <Link
      href="https://expense-tracker-nine-ochre-11.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      >
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/image/expensetracker.png"
            alt="FinFlow"
            className="object-fit w-full h-full"
            />
        </div>
      </Link>
    ),
  },
  {
    title: "SolX",
    description:
    "SolX is a Solana-based dApp that lets you seamlessly transfer SOL, airdrop SOL, and create your own SPL tokens with ease.",
    content: (
      <Link
      href="https://sol-x-three.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      >
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/image/solx.png"
            alt="SolX"
            className="object-fit w-full h-full"
            />
        </div>
      </Link>
    ),
  },
  {
    title: "SocketTalk",
    description:
      "SocketTalk is a real-time chat app powered by WebSockets, allowing users to join rooms and exchange messages instantly.",
    content: (
      <Link
        href="https://chat-app-web-phi.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src="/image/sockettalk.png"
            alt="SocketTalk"
            className="object-fit w-full h-full"
          />
        </div>
      </Link>
    ),
  },
    {
    title: "",
    description:
      "",
    content: (
      <div>
        <div className="flex h-full w-full items-center justify-center text-white">
          <img
            src=""
            alt="SocketTalk"
            className="object-fit w-full h-full"
          />
        </div>
      </div>
    ),
  },

];

export function Scroll() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content}/>
    </div>
  );
}
