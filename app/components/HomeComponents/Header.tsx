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
        <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-indigo-300 dark:text-white  [text-shadow:0_0_12px_rgba(139,92,246,0.8),0_0_24px_rgba(139,92,246,0.6)]">
          UI-Sync
        </h1>
      </div>
    </>
  );
}
