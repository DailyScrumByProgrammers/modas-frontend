import React from "react";
import styles from "./actionButton.module.css";

const ActionButton = ({ text, onClick }) => (
  <div className={styles.container}>
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  </div>
);

export default ActionButton;
