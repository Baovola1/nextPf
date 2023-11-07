import React from "react";
import AnimatedCursor from "react-animated-cursor";
import styles from "../styles/Cursor.module.css";

function Cursor() {
  return (
    <AnimatedCursor
      innerSize={20}
      outerSize={10}
      color="68, 61, 202"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}

export default Cursor;
