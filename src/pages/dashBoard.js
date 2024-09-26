import React from "react";
import styles from "./dashBoard.module.css";
import SpaceContainer from "../components/space";

function Dashboard() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Title />
      <Search />
      <CreateSpaceButton />
      <SpaceContainer buttonText="팀 스페이스 입장" />
    </div>
  );
}

function Title() {
  return (
    <div className={styles.title}>
      <p style={{ margin: 0 }}>대시보드</p>
    </div>
  );
}

function Search() {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="스페이스 검색"
        className={styles.searchText}
      />
      <img
        src="/images/검색 아이콘.png"
        className={styles.searchImg}
        alt="search"
      />
    </div>
  );
}

function CreateSpaceButton() {
  return <button className={styles.spaceCreateBtn}>팀 스페이스 생성</button>;
}

export default Dashboard;
