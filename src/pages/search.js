import React from "react";
import SpaceContainer from "../components/space";
import styles from "./search.module.css";

function Search() {
  return (
    <div className={styles.search}>
      <Title />
      <CreateSpaceButton />
      <SpaceContainer buttonText="참여하기" />
    </div>
  );
}

function Title() {
  return <div className={styles.title}>검색결과</div>;
}

function CreateSpaceButton({ isLoggedIn }) {
  if (!isLoggedIn) {
    return null;
  }
  return <button className={styles.createSpaceBtn}>팀 스페이스 생성</button>;
}

export default Search;
