import React from "react";
import styles from "./toggleSwitch.module.css";

const ToggleSwitch = ({ isPublic, toggleSwitch }) => (
  <div className={styles.createSpacePublic}>
    <span>공개 여부</span>
    <div className={styles.toggleSwitch} onClick={toggleSwitch}>
      <div className={styles.switch}>
        <span className={styles.public}>퍼블릭</span>
        <span className={styles.private}>프라이빗</span>
      </div>
      <div className={`${styles.indicator} ${isPublic ? styles.active : ""}`} />
    </div>
  </div>
);

export default ToggleSwitch;
