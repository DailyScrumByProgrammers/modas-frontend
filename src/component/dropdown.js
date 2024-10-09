import React from "react";
import styles from "./dropdown.module.css";

const Dropdown = ({
  selectedOption,
  isOpen,
  toggleDropdown,
  handleOptionClick,
}) => {
  return (
    <div className={styles.createSpaceScrum}>
      스크럼 주기
      <div className={styles.customSelect} onClick={toggleDropdown}>
        <div className={styles.selected}>{selectedOption}</div>
        {isOpen && (
          <div className={styles.optionsContainer}>
            {["매일", "1주일", "1달"].map((option) => (
              <div
                key={option}
                className={styles.option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
