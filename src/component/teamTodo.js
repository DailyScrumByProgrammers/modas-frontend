import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import styles from "./teamTodo.module.css";

const TeamTodo = ({ dailyScrumId }) => {
    const [todos, setTodos] = useState([]);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [emojis, setEmojis] = useState([]);
    const emojiPickerRef = useRef(null);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch(`/api/todo/${dailyScrumId}`);
            const data = await response.json();
            setTodos(data);
        };
        fetchTodos();
    }, [dailyScrumId]);

    useEffect(() => {
        const fetchEmojis = async () => {
            const response = await fetch(`/api/emoji/${dailyScrumId}`);
            const data = await response.json();
            setEmojis(data);
        };
        fetchEmojis();
    }, [dailyScrumId]);

    const addEmojiToDatabase = async (emojiContent) => {
        const response = await fetch(`/api/emoji`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: 1,
                dailyScrumId: dailyScrumId,
                content: emojiContent,
            }),
        });
        const newEmoji = await response.json();
        setEmojis((prev) => [...prev, newEmoji]);
    };

    const onEmojiClick = (emojiData) => {
        addEmojiToDatabase(emojiData.emoji);
        setShowEmojiPicker(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
                setShowEmojiPicker(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.todoBox}>
                <div>
                    <div className={styles.avatar}></div>
                    <div className={styles.teamName}>팀원이름</div>
                </div>
                <div className={styles.todoInputContainer}>
                    {todos.map((todo, index) => (
                        <div key={index} className={styles.todoContent}>
                            <input
                                className={styles.todoInput}
                                value={todo.content}
                                readOnly
                            />
                        </div>
                    ))}
                    <div className={styles.emojiContainer}>
                        <button
                            className={styles.emojiAddButton}
                            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        >
                            +
                        </button>
                        <div className={styles.emojiList}>
                            {emojis.map((emoji, index) => (
                                <span key={index} className={styles.emoji}>
                                    {emoji.content}
                                </span>
                            ))}
                        </div>
                    </div>
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
