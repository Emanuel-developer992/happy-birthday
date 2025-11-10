"use client";

import confetti from "canvas-confetti";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function ConfettiSideCannons({...props}) {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000; // 3 segundos
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="relative">
      <motion.img
        src="/present.png" // coloque seu cookie em /public
        alt="gift"
        className="w-16 h-16 cursor-pointer z-50"
        onClick={() => {handleClick(); props.toggle()}}
      
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
