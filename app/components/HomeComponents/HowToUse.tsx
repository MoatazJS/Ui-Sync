"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";
export default function HowToUse() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-6 xl:gap-6 bg-zinc-50 font-sans dark:bg-black">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-5xl font-semibold">How to Use</h2>
          <p className="text-center text-2xl font-medium">
            Get started in three simple steps.
          </p>
        </div>
        <div className="flex justify-center align-center gap-4 ">
          <div className="w-80 h-96 flex flex-col justify-center rounded-2xl items-center gap-6 bg-slate-800">
            <div>
              <FontAwesomeIcon
                icon={faCode}
                size="2x"
                className="text-indigo-600"
              />
            </div>
            <div className="text-center flex flex-col justify-end gap-2">
              <h3 className="text-2xl text-indigo-600 font-bold">Step 1</h3>
              <p className="text-2xl font-medium text-white">Write Your Code</p>
              <p className="mx-5 text-gray-400">
                Type or paste your HTML, CSS, or JavaScript code in the editor
                below
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
