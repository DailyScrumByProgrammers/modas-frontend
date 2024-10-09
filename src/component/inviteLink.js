import React from "react";
import styles from "./inviteLink.module.css";

const InviteLink = () => {
  return (
    <div className={styles.createSpaceLink}>
      <span>초대 링크</span>
      <img src="/images/copy.png" className={styles.copyImg} alt="copy" />
    </div>
  );
};

export default InviteLink;
