import React, { useState } from "react";
import Header from "../../component/header";
import styles from "./createSpacePage.module.css";

const CreateSpacePage = () => {
  // 상태 관리
  const [selectedOption, setSelectedOption] = useState("스크럼 주기 선택");
  const [isOpen, setIsOpen] = useState(false);
  const [isPublic, setIsPublic] = useState(true); // 기본값은 퍼블릭

  // 드롭다운 열기/닫기
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // 옵션 선택
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // 옵션 선택 후 드롭다운 닫기
  };

  const toggleSwitch = () => {
    setIsPublic(!isPublic); // 스위치 토글
  };

  return (
    <div className={styles.createSpacePage}>
      <Header />
      <div className={styles.createSpace}>
        <div className={styles.createSpaceTitle}>스페이스 개설</div>
        <div className={styles.createSpaceName}>
          스페이스 제목
          <input
            type="text"
            placeholder=""
            className={styles.createSpaceNameInput}
          ></input>
        </div>
        <div className={styles.createSpaceScrum}>
          스크럼 주기
          <div className={styles.customSelect} onClick={toggleDropdown}>
            <div className={styles.selected}>{selectedOption}</div>
            {isOpen && (
              <div className={styles.optionsContainer}>
                <div
                  className={styles.option}
                  onClick={() => handleOptionClick("매일")}
                >
                  매일
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleOptionClick("1주일")}
                >
                  1주일
                </div>
                <div
                  className={styles.option}
                  onClick={() => handleOptionClick("1달")}
                >
                  1달
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.createSpaceDetail}>
          스페이스 설명
          <span className={styles.optionalText}>optional</span>
          <input
            type="text"
            placeholder=""
            className={styles.createSpaceDetailInput}
          ></input>
        </div>
        <div className={styles.createSpacePublic}>
          공개 여부
          <div className={styles.toggleSwitch} onClick={toggleSwitch}>
            <div className={styles.switch}>
              <span className={isPublic ? styles.active : styles.inactive}>
                퍼블릭
              </span>
              <span className={isPublic ? styles.inactive : styles.active}>
                프라이빗
              </span>
            </div>
          </div>
        </div>
        <div className={styles.createSpaceLink}>
          <span>초대 링크</span>
          <img src="/images/copy.png" className={styles.copyImg} alt="copy" />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.createBtn}>스페이스 개설</button>
      </div>
    </div>
  );
};

export default CreateSpacePage;
