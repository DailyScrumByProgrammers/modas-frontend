import React from "react";
import "../fonts/fonts.css";
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
    <div
      style={{
        position: "absolute",
        left: "104px",
        top: "153px",
        fontFamily: "Noto Sans KR",
        fontSize: "48px",
        fontWeight: 700,
      }}
    >
      <p style={{ margin: 0 }}>대시보드</p>
    </div>
  );
}

function Search() {
  return (
    <div
      style={{
        position: "absolute",
        left: "505px",
        top: "225px",
        width: "424px",
        height: "40px",
        borderRadius: "6px",
        border: "1px solid #CBD5E1",
        fontWeight: 400,
        display: "flex",
        alignItems: "center",
        padding: "0px 8px",
      }}
    >
      <input
        type="text"
        placeholder="스페이스 검색"
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          fontFamily: "Noto Sans KR",
          fontSize: "16px",
          color: "#94A3B8",
        }}
      />
      <img
        src="/images/검색 아이콘.png"
        width="24px"
        height="24px"
        style={{
          marginLeft: "8px",
          cursor: "pointer",
        }}
        alt="search"
      />
    </div>
  );
}

function CreateSpaceButton() {
  return (
    <button
      style={{
        position: "absolute",
        left: "1232px",
        top: "225px",
        width: "154px",
        height: "43px",
        backgroundColor: "#FBBF24",
        color: "white",
        border: "none",
        borderRadius: "6px",
        fontFamily: "Noto Sans KR",
        fontSize: "16px",
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      팀 스페이스 생성
    </button>
  );
}

export default Dashboard;
