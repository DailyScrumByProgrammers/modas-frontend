import React from "react";
import styles from "./spaceTitle.module.css";

const SpaceTitle = () => {
  return (
    <div className={styles.createSpaceName}>
      스페이스 제목
      <input type="text" className={styles.createSpaceNameInput} />
    </div>
  );
};

export default SpaceTitle;
