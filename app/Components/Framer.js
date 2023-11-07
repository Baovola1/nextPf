"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "../styles/Framer.module.css";

function Framer() {
  const myText = "Conceptrice Développeuse full-stack";

  const textVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        className={styles.box}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <motion.h1 variants={textVariants} initial="initial" animate="animate">
          {myText}
        </motion.h1>
      </motion.div>
    </>
  );
}

export default Framer;
