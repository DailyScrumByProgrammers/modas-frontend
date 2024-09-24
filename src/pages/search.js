import React from "react";
import "../fonts/fonts.css";
import SpaceContainer from "../components/space";

function Search() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Title />
      <CreateSpaceButton />
      <SpaceContainer buttonText="참여하기" />
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
        fontWeight: 500,
      }}
    >
      <p style={{ margin: 0 }}>검색결과</p>
    </div>
  );
}

function CreateSpaceButton({ isLoggedIn }) {
  if (!isLoggedIn) {
    return null;
  }
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

export default Search;
