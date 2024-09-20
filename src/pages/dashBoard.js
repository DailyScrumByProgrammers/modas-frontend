import React from "react";
import "../fonts/fonts.css";

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

function Space({ index }) {
  return (
    <div
      style={{
        width: "430px",
        height: "370px",
        borderRadius: "20px",
        border: "2px solid #FBBF24",
        margin: "23px", // 간격 추가
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* 각 Space의 내용 */}
      <div>
        <p
          style={{
            position: "absolute",
            left: "25px",
            top: "40px",
            fontFamily: "Noto Sans KR",
            fontSize: "40px",
            color: "#000000",
            fontWeight: 700,
          }}
        >
          스페이스제목
        </p>
        <p
          style={{
            position: "absolute",
            left: "190px",
            top: "185px",
            fontFamily: "Noto Sans KR",
            fontSize: "30px",
            color: "#000000",
            fontWeight: 700,
          }}
        >
          스페이스 리더이름
        </p>
      </div>
      <button
        style={{
          position: "absolute",
          left: "236px",
          top: "291px",
          width: "157px",
          height: "46px",
          backgroundColor: "#FBBF24",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontFamily: "Noto Sans KR",
          fontSize: "16px",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        팀 스페이스 입장
      </button>
    </div>
  );
}
function SpaceContainer() {
  const spaces = Array.from({ length: 10 }); // 10개의 Space 생성

  return (
    <div
      style={{
        position: "absolute",
        top: "376px",
        overflowY: "scroll", // 세로 스크롤 가능
        display: "flex",
        flexWrap: "wrap", // 여러 줄로 나열
        padding: "10px", // 패딩 추가
        boxSizing: "border-box", // 패딩 및 테두리 포함
      }}
    >
      {spaces.map((_, index) => (
        <Space key={index} index={index} />
      ))}
    </div>
  );
}

export default Dashboard;
