import React, { useState, useEffect } from 'react';
import Header from '../../component/header';
import Query from '../../component/query';
import TeamSpace from '../../component/teamSpace';
import { fetchTeamSpaces } from '../../apis/mainApi'; // API 호출 (로컬 데이터 기반 페이징)
import styles from './mainPage.module.css';

const ITEMS_PER_PAGE = 6; // 한 페이지에 표시할 TeamSpace 개수

const MainPage = () => {
    const [teamSpaces, setTeamSpaces] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수

    useEffect(() => {
        // 페이징된 데이터를 가져오는 함수
        const response = fetchTeamSpaces(currentPage, ITEMS_PER_PAGE);
        setTeamSpaces(response.data); // 페이지에 해당하는 팀스페이스 데이터 설정
        setTotalPages(response.totalPages); // 총 페이지 수 설정
    }, [currentPage]); // currentPage가 변경될 때마다 새 데이터를 로드

    // 페이지 변경 핸들러
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className={styles.mainPage}>
            <Header/>
            <div className={styles.introSection}>
                <img
                    className={styles.introCircle}
                    src="modas-logo-2.png"
                    alt="모다스 로고"
                />
                <div className={styles.introText}>
                    모다스 소개<br/>(텍스트)
                </div>
            </div>
            <div className={styles.queryWrapper}>
                <Query/>
            </div>

            {/* 팀스페이스 목록 */}
            <div className={styles.teamSpaces}>
                {teamSpaces.map((space, index) => (
                    <TeamSpace
                        key={index}
                        title={space.title}
                        leader={space.leader}
                        description={space.description}
                    />
                ))}
            </div>

            {/* 페이징 버튼 */}
            <div className={styles.pagination}>
                <button
                    className={styles.pageButton}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>

                {Array.from({length: totalPages}, (_, index) => (
                    <button
                        key={index + 1}
                        className={`${styles.pageNumber} ${currentPage === index + 1 ? styles.activePage : ''}`}
                        onClick={() => handlePageChange(index + 1)} // 페이지 번호로 직접 설정
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    className={styles.pageButton}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default MainPage;
