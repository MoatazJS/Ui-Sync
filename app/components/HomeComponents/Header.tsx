"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import Dots from "../Dots";

export default function Header() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [titleWidth, setTitleWidth] = useState(0);
  useLayoutEffect(() => {
    if (titleRef.current) {
      setTitleWidth(titleRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (titleRef.current) {
        setTitleWidth(titleRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="relative h-4 mb-1">
        <Dots travel={titleWidth} />
      </div>
      <div ref={titleRef}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-indigo-500 to-indigo-400 dark:from-indigo-300 dark:via-indigo-400 dark:to-indigo-300">
          UI-Sync
        </h1>
      </div>
    </>
  );
}
