import Navigation from "./Components/Navigation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <h1>Welcome in my page</h1>
      </main>
    </>
  );
}
