"use client";
import Image from "next/image";
import Navigation from "./Components/Navigation";
import styles from "./page.module.css";
import { useTypewriter } from "react-simple-typewriter";
//import Framer from "./Components/Framer";
import Carte from "./Components/Carte";
//import Cursor from "./Components/Cursor";

export default function Home() {
  const [typeEffect] = useTypewriter({
    words: ["Hello, My name is Baovola"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <>
      <Navigation />
      <div className={styles.main}>
        <section className={styles.container}>
          <h1 className={styles.text1}>{typeEffect}</h1>
          <Carte />
        </section>
      </div>
    </>
  );
}
