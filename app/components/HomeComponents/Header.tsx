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
        <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text bg-linear-to-r from-indigo-500 via-indigo-600 to-indigo-500 dark:from-indigo-200 dark:via-indigo-300 dark:to-indigo-200">
          UI-Sync
        </h1>
      </div>
    </>
  );
}
