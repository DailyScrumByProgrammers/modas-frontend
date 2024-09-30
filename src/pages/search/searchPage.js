import React from "react";
import SpaceContainer from "../../component/space";
import styles from "./searchPage.module.css";
import Header from "../../component/header";

function Search() {
  return (
    <div className={styles.search}>
      <Header />
      <div className={styles.title}>
        <p style={{ margin: 0 }}>검색결과</p>
      </div>
      <button className={styles.createSpaceBtn}>팀 스페이스 생성</button>;
      <SpaceContainer buttonText="참여하기" />
    </div>
  );
}

export default Search;
