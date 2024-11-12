import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import styles from './teamTodo.module.css';

const TeamTodo = () => {
    const todos = [
        "오늘 작성한 투두 내용 1",
        "오늘 작성한 투두 내용 2",
        "오늘 작성한 투두 내용 3",
        "오늘 작성한 내용 4"
    ]; // 데이터베이스에서 불러온 투두 리스트 (임시)

    const [showEmojiPicker, setShowEmojiPicker] = useState(false); // 이모지 선택기 표시 여부
    const [emojis, setEmojis] = useState([]); // 선택된 이모지 리스트
    const emojiPickerRef = useRef(null); // 이모지 선택기 영역 참조

    // 이모지 선택 시 처리 함수
    const onEmojiClick = (emojiData) => {
        console.log('Selected Emoji:', emojiData.emoji); // 선택된 이모지 로그
        setEmojis(prev => {
            // 새로운 이모지를 추가하고 최신 5개만 유지
            const updatedEmojis = [...prev, emojiData.emoji].slice(-5);
            console.log('Updated Emojis:', updatedEmojis); // 업데이트된 이모지 리스트 확인
            return updatedEmojis;
        });
        setShowEmojiPicker(false); // 이모지 선택 후 선택기 닫기
    };

    // 이모지 삭제 함수 (우클릭 시)
    const handleEmojiRightClick = (index, event) => {
        event.preventDefault(); // 우클릭 기본 동작 방지
        setEmojis(emojis.filter((_, i) => i !== index)); // 선택된 이모지 삭제
    };

    // 외부 클릭 시 이모지 선택기 닫기
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
                setShowEmojiPicker(false); // 이모지 선택기 외부 클릭 시 닫기
            }
        };

        const handleEscKey = (event) => {
            if (event.key === 'Escape') {
                setShowEmojiPicker(false); // ESC 키를 누르면 닫기
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.todoBox}>
                <div>
                    <div className={styles.avatar}></div>
                    <div className={styles.teamName}>팀원이름</div>
                </div>

                {/* 투두 불러오기 부분 */}
                <div className={styles.todoInputContainer}>
                    {todos.map((todo, index) => (
                        <div key={index} className={styles.todoContent}>
                            <input
                                className={styles.todoInput}
                                value={todo}
                                readOnly // 수정 불가능하도록 설정
                            />
                        </div>
                    ))}

                    {/* 이모지 추가 버튼과 이모지 리스트를 함께 flex로 배치 */}
                    <div className={styles.emojiContainer}>
                        {/* 이모지 추가 버튼 */}
                        <button
                            className={styles.emojiAddButton}
                            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        >
                            +
                        </button>

                        {/* 선택된 이모지들 표시 (최신 5개만) */}
                        <div className={styles.emojiList}>
                            {emojis.map((emoji, index) => (
                                <span
                                    key={index}
                                    className={styles.emoji}
                                    onContextMenu={(event) => handleEmojiRightClick(index, event)}
                                >
                                    {emoji}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 이모지 선택기 (절대 위치로 고정) */}
                    {showEmojiPicker && (
                        <div ref={emojiPickerRef} className={styles.emojiPicker}>
                            <EmojiPicker onEmojiClick={onEmojiClick} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamTodo;
