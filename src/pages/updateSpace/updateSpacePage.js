import React, { useEffect, useState } from 'react';
import Header from '../../component/header';
import Dropdown from '../../component/dropdown';
import ToggleSwitch from '../../component/toggleSwitch';
import InviteLink from '../../component/inviteLink';
import styles from '../createSpace/createSpacePage.module.css';
import SpaceTitle from '../../component/spaceTitle';
import SpaceDescription from '../../component/spaceDescription';
import ActionButton from '../../component/actionButton';
import { fetchTeamUsers } from '../../apis/mainApi';
import User from '../../component/users';
import style from './updateSpacePage.module.css';

const ITEMS_PER_PAGE = 4; // 한 페이지에 표시할 팀원 수

const UpdateSpacePage = () => {
  const [selectedOption, setSelectedOption] = useState('스크럼 주기 선택');
  const [isOpen, setIsOpen] = useState(false);
  const [isPublic, setIsPublic] = useState(true);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수

  useEffect(() => {
    // 페이징된 데이터를 가져오는 함수
    const response = fetchTeamUsers(currentPage, ITEMS_PER_PAGE);
    setUsers(response.data);
    setTotalPages(response.totalPages);
  }, [currentPage]);

  // 페이지 변경 핸들러
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleSwitch = () => {
    setIsPublic(!isPublic);
  };

  const handleDelete = () => {
    console.log();
  };

  return (
    <div className={styles.createSpacePage}>
      <Header />
      <div className={styles.createSpace}>
        <div className={styles.createSpaceTitle}>스페이스 수정</div>
        <SpaceTitle />
        <Dropdown
          selectedOption={selectedOption}
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          handleOptionClick={handleOptionClick}
        />
        <SpaceDescription />
        <ToggleSwitch isPublic={isPublic} toggleSwitch={toggleSwitch} />
        <InviteLink />

        {/* 유저 목록 */}

        <div className={style.usersSection}>
          <User users={users} onDelete={handleDelete} />
        </div>
        {/* 페이징 버튼 */}
        <div className={style.pagination}>
          <button
            className={style.pageButton}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`${style.pageNumber} ${
                currentPage === index + 1 ? style.activePage : ''
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className={style.pageButton}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className={style.container}>
        <ActionButton text={'저장하기'} />
      </div>
    </div>
  );
};

export default UpdateSpacePage;
