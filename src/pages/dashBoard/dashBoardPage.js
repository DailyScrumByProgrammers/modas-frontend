import React from "react";
import styles from "./dashBoardPage.module.css";
import SpaceContainer from "../../component/space";
import Header from "../../component/header";

const Dashboard = () => {
  return (
    <div className={styles.dashBoard}>
      <Header />
      <div className={styles.title}>
        <p style={{ margin: 0 }}>대시보드</p>
      </div>
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
      <div>
        <button className={styles.spaceCreateBtn}>팀 스페이스 생성</button>;
      </div>
      <div>
        <SpaceContainer buttonText="팀 스페이스 입장" />
      </div>
    </div>
  );
};

export default Dashboard;
