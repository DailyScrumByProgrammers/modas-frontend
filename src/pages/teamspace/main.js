import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TeamTodo from "../../component/teamTodo"; // 정확한 파일 경로로 수정
import styles from "./main.module.css"; // CSS 모듈 import

const Main = () => {
    const { id } = useParams(); // URL의 ":id" 값 가져오기
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        const fetchTeamScrums = async () => {
            try {
                const response = await fetch(`/api/scrum/today/${id}`); // teamSpaceId로 API 호출
                const data = await response.json();
                setTeamMembers(data); // 상태에 팀원 데이터 업데이트
            } catch (error) {
                console.error("Failed to fetch team scrums:", error);
            }
        };

        fetchTeamScrums();
    }, [id]); // id가 변경될 때마다 다시 로드

    return (
        <div className={styles.container}>
            <div className={styles.headerText}>
                Name 님의 데일리 스크럼
            </div>
            <img
                className={styles.calendarIcon}
                width="48"
                height="48"
                src="/icon-calendar.png"
                alt="calendar icon"
            />
            <div className={styles.teamTodoContainer}>
                {teamMembers.map((member) => (
                    <TeamTodo
                        key={member.id}
                        memberName={member.nickName}
                        dailyScrumId={member.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Main;
