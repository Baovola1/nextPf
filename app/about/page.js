import React from "react";
import Navigation from "../Components/Navigation";
import styles from "../styles/about.module.css";

const about = () => {
  return (
    <>
      <Navigation />
      <h1>About</h1>
      <div className={styles.parent}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2>01</h2>
            <h3>Card One</h3>
            <p>
              « Il n'y a qu'une façon d'apprendre, c'est par l'action. » Paulo
              Coelho
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2>02</h2>
            <h3>Card Two</h3>
            <p>
              « Il n'y a qu'une façon d'apprendre, c'est par l'action. » Paulo
              Coelho
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.content}>
            <h2>03</h2>
            <h3>Card Three</h3>
            <p>
              « Il n'y a qu'une façon d'apprendre, c'est par l'action. » Paulo
              Coelho
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
