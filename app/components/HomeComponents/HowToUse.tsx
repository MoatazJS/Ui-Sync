"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faCode,
  faLayerGroup,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
export default function HowToUse() {
  const CardsInfo = [
    {
      icon: faLayerGroup,
      step: "Step 1",
      title: "Choose Your Setup",
      text: "Pick your code format—JSX, Tailwind, Bootstrap, or plain HTML & CSS",
    },
    {
      icon: faCode,
      step: "Step 2",
      title: "Start Writing Your UI",
      text: "Type or paste your code in the editor",
    },
    {
      icon: faDesktop,
      step: "Step 3",
      title: "Preview Your Design",
      text: "See your UI update live across four breakpoints.",
    },
  ];
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center gap-4 pb-10 md:py-20 md:gap-6 lg:gap-6 xl:gap-6 bg-zinc-50 font-sans dark:bg-black">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-5xl font-semibold">How to Use</h2>
          <p className="text-center text-2xl font-medium text-gray-300">
            Get started in three simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 justify-center align-center gap-4 ">
          {CardsInfo.map((card) => (
            <div
              key={card.step}
              className="w-80 h-96 flex flex-col justify-center rounded-2xl items-center gap-4 md:gap-6 lg:gap-6 xl:gap-6 bg-slate-800 p-5"
            >
              <div>
                <FontAwesomeIcon
                  icon={card.icon}
                  size="2x"
                  className="text-indigo-600 mt-5"
                />
              </div>

              <div className="text-center items-center  flex flex-col justify-center gap-2 h-14">
                <h3 className="text-2xl text-indigo-600 font-bold">
                  {card.step}
                </h3>
                <p className="text-2xl font-medium text-white">{card.title}</p>
              </div>
              <p className="text-center m-auto text-gray-400">{card.text}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
