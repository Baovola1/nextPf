//"use client"

import Navigation from "./Components/Navigation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navigation />
      </main>
    </>
  );
}
