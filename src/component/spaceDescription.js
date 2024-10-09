import React from "react";
import styles from "./spaceDescription.module.css";

const SpaceDescription = () => {
  return (
    <div className={styles.createSpaceDetail}>
      스페이스 설명
      <span className={styles.optionalText}>optional</span>
      <input type="text" className={styles.createSpaceDetailInput} />
    </div>
  );
};

export default SpaceDescription;
