import styles from "./space.module.css";

function Space({ index, buttonText }) {
  return (
    <div className={styles.space}>
      {/* 각 Space의 내용 */}
      <div>
        <p className={styles.spaceTitle}>스페이스제목</p>
        <p className={styles.spaceLeader}>스페이스 리더이름</p>
      </div>
      <button className={styles.spaceBtn}>{buttonText}</button>
    </div>
  );
}

function SpaceContainer({ buttonText }) {
  const spaces = Array.from({ length: 10 }); // 10개의 Space 생성

  return (
    <div className={styles.spaceContainer}>
      {spaces.map((_, index) => (
        <Space key={index} index={index} buttonText={buttonText} />
      ))}
    </div>
  );
}

export default SpaceContainer;
