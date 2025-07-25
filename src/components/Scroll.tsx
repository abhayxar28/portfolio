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
      <Link href='https://schedule-todo-mauve.vercel.app' target="_blank" rel="noopener noreferrer">
        <div className="flex h-full w-full items-center justify-center text-white ">
            <img src="./image/taskverse.png" className="object-fit w-full h-full" />
        </div>
      </Link>
    ),
  },
  {
    title: "SocketTalk",
    description:
      "SocketTalk is a real-time chat app powered by WebSockets, allowing users to join rooms, exchange messages instantly.",
    content: (
      <Link href='https://chat-app-web-phi.vercel.app/' target="_blank" rel="noopener noreferrer">
        <div className="flex h-full w-full items-center justify-center text-white ">
            <img src="./image/sockettalk.png" className="object-fit w-full h-full" />
        </div>
      </Link>
    ),
  },
  {
    title: "FinFlow",
    description:
      "FinFlow is a smart expense tracker that helps you manage income, expenses, and transactions effortlessly. With built-in AI for financial insights and beautiful interactive charts, it simplifies budgeting and helps you stay on top of your money.",
    content: (
      <Link href='https://expense-tracker-nine-ochre-11.vercel.app/' target="_blank" rel="noopener noreferrer">
        <div className="flex h-full w-full items-center justify-center text-white ">
            <img src="./image/expensetracker.png" className="object-fit w-full h-full" />
        </div>
      </Link>
    ),
  },
  {
    title: "Web 3 Wallet",
    description:
      "A Web3 wallet that generates random mnemonic phrases and lets you create and manage multiple wallets with ease. Designed to understand how private keys and public keys are generated.",
    content: (
      <Link href='https://web3-wallet-self.vercel.app/' target="_blank" rel="noopener noreferrer">
        <div className="flex h-full w-full items-center justify-center text-white ">
            <img src="./image/web3-wallet.png" className="object-fit w-full h-full" />
        </div>
      </Link>
    ),
  },
];
export function Scroll() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}
