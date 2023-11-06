"use client";
import React, { useEffect } from "react";
import Navigation from "../Components/Navigation";
import styles from "../styles/about.module.css";
import VanillaTilt from "vanilla-tilt";

const about = () => {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }, []);

  return (
    <>
      <Navigation />
      <h1>About</h1>
      <div className={styles.parent}>
        <div className={`${styles.card} card`}>
          <div className={styles.content}>
            <h2 className={styles.titre2}>01</h2>
            <h3 className={styles.titre3}>Hard skills</h3>
            <p>
              « Il n'y a qu'une façon d'apprendre, c'est par l'action. » Paulo
              Coelho
            </p>
            <button className={styles.btn}>Click here</button>
          </div>
        </div>
        <div className={`${styles.card} card`}>
          <div className={styles.content}>
            <h2 className={styles.titre2}>02</h2>
            <h3 className={styles.titre3}>Soft Skills</h3>

            <p>
              « Il n'y a qu'une façon d'apprendre, c'est par l'action. » Paulo
              Coelho
            </p>
            <button className={styles.btn}>Click here</button>
          </div>
        </div>
        <div className={`${styles.card} card`}>
          <div className={styles.content}>
            <h2 className={styles.titre2}>03</h2>
            <h3 className={styles.titre3}>Card Three</h3>
            <p>
              « Il n'y a qu'une façon d'apprendre, c'est par l'action. » Paulo
              Coelho
            </p>
            <button className={styles.btn}>Click here</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
