import styles from './query.module.css';

const Query = () => {
    return (
        <div className={styles.queryContainer}>
            <input
                className={styles.queryInput}
                type="text"
                placeholder="스페이스 검색"
            />
            <button className={styles.queryButton}>
                <img className={styles.queryIcon} src="q-icon.png" alt="검색 아이콘" />
            </button>
        </div>
    );
};

export default Query;
