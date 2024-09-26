import React from "react";
import styles from "./dashBoard.module.css";

function Dashboard() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Title />
      <Search />
      <CreateSpaceButton />
      <SpaceContainer />
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

function Space({ index }) {
  return (
    <div className={styles.space}>
      {/* 각 Space의 내용 */}
      <div>
        <p className={styles.spaceTitle}>스페이스제목</p>
        <p className={styles.spaceLeader}>스페이스 리더이름</p>
      </div>
      <button className={styles.spaceBtn}>팀 스페이스 입장</button>
    </div>
  );
}
function SpaceContainer() {
  const spaces = Array.from({ length: 10 }); // 10개의 Space 생성

  return (
    <div className={styles.spaceContainer}>
      {spaces.map((_, index) => (
        <Space key={index} index={index} />
      ))}
    </div>
  );
}

export default Dashboard;
