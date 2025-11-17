"use client";
import { easeInOut, motion } from "motion/react";
import React from "react";

export default function Dots({ travel }: { travel: number }) {
  return (
    <motion.div
      animate={{ x: [0, travel - 8, 0] }}
      transition={{ duration: 3, ease: easeInOut, repeat: Infinity }}
      className="w-2 h-2 rounded bg-indigo-400 absolute"
    ></motion.div>
  );
}
