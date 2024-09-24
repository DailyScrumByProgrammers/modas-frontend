function Space({ index, buttonText }) {
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
        {buttonText}
      </button>
    </div>
  );
}

function SpaceContainer({ buttonText }) {
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
        <Space key={index} index={index} buttonText={buttonText} />
      ))}
    </div>
  );
}

export default SpaceContainer;
