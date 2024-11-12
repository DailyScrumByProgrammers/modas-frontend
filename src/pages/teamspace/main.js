import { useState } from 'react';
import TeamTodo from '../../component/teamTodo'; // 정확한 파일 경로로 수정
import styles from './main.module.css'; // CSS 모듈 import

const Main = () => {
    // 팀원 수를 state로 관리 (나중에 데이터베이스에서 가져올 예정)
    const [teamMembers, setTeamMembers] = useState([
        { name: "Team Member 1" },
        { name: "Team Member 2" },
        { name: "Team Member 3" },
        { name: "Team Member 4" },
        { name: "Team Member 4" },
        { name: "Team Member 4" },
        { name: "Team Member 4" },
        { name: "Team Member 4" },
        { name: "Team Member 4" },

        { name: "Team Member 5" }
    ]);

    return (
        <div className={styles.container}>
            <div className={styles.headerText}>
                Name님,<br/>데일리 스크럼 시간이에요
            </div>
            <img
                className={styles.calendarIcon}
                width="48"
                height="48"
                src="/icon-calendar.png"
                alt="calendar icon"
            />

            {/* TeamTodo 컴포넌트 반복 렌더링 (팀원 수만큼 오른쪽에 배치) */}
            <div className={styles.teamTodoContainer}>
                {teamMembers.map((member, index) => (
                    <TeamTodo key={index} memberName={member.name} />
                ))}
            </div>
        </div>
    )
}

export default Main;
