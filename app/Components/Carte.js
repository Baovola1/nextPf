"use client";
import React, { useState } from "react";
import styles from "../styles/Carte.module.css";

export default function Carte() {
  const [isBackVisible, setIsBackVisible] = useState(false);

  const handleButtonClick = () => {
    setIsBackVisible(!isBackVisible);
  };

  return (
    <>
      <div className={styles.container2}>
        <div className={styles.card2}>
          <div
            className={`${styles.cardinner} ${
              isBackVisible ? styles.showBack : ""
            }`}
          >
            <div className={styles.front}>
              <h3>Développeuse full-stack</h3>
              <button onClick={handleButtonClick}>hover me</button>
            </div>
            <div className={styles.back}>
              <p>
                animée par une soif constante d'apprendre et de me dépasser
                chaque jour. Cette mentalité me pousse à repousser sans cesse
                mes limites. Dotée d'une curiosité innée et appréciant le
                travail en équipe, je possède la capacité de m'adapter à
                diverses situations pour atteindre les objectifs fixés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
