import Image from "next/image";
import Navigation from "./Components/Navigation";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navigation />

      <h1 className={styles.myHeading}>Hello, My name is Baovola</h1>
      <div className={styles.container}>
        <div className={styles.photo}>
          <Image
            src="/photo.png"
            width={200}
            height={150}
            alt="photo"
            className={styles.roundedImage}
          />
        </div>

        <div className={styles.text}>
          <h4
            style={{
              color: "pink",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            conceptrice Développeuse Full-Stack
          </h4>
          <p style={{ textAlign: "justify" }}>
            Animée par une soif constante d'apprendre et de me dépasser chaque
            jour. Cette mentalité me pousse à repousser sans cesse mes limites.
            Dotée d'une curiosité et appréciant le travail en équipe, je possède
            la capacité de m'adapter à diverses situations pour atteindre les
            objectifs fixés.« Il n'y a qu'une façon d'apprendre, c'est par
            l'action. » Paulo Coelho
          </p>
        </div>
      </div>
    </>
  );
}
