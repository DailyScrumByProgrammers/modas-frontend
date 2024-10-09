import React, { useState } from "react";
import Header from "../../component/header";
import Dropdown from "../../component/dropdown";
import ToggleSwitch from "../../component/toggleSwitch";
import InviteLink from "../../component/inviteLink";
import styles from "./createSpacePage.module.css";
import SpaceTitle from "../../component/spaceTitle";
import SpaceDescription from "../../component/spaceDescription";
import ActionButton from "../../component/actionButton";

const CreateSpacePage = () => {
  const [selectedOption, setSelectedOption] = useState("스크럼 주기 선택");
  const [isOpen, setIsOpen] = useState(false);
  const [isPublic, setIsPublic] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleSwitch = () => {
    setIsPublic(!isPublic);
  };

  return (
    <div className={styles.createSpacePage}>
      <Header />
      <div className={styles.createSpace}>
        <div className={styles.createSpaceTitle}>스페이스 개설</div>
        <SpaceTitle />
        <Dropdown
          selectedOption={selectedOption}
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          handleOptionClick={handleOptionClick}
        />
        <SpaceDescription />
        <ToggleSwitch isPublic={isPublic} toggleSwitch={toggleSwitch} />
        <InviteLink />
        <ActionButton text={"스페이스 개설"} />
      </div>
    </div>
  );
};

export default CreateSpacePage;
