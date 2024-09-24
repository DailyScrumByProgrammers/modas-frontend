// TeamSpace.js
import styles from './teamSpace.module.css';

const TeamSpace = ({ title, leader, description }) => {
    return (
        <div className={styles.teamSpaceContainer}>
            <div className={styles.spaceCard}></div>
            <div className={styles.spaceTitle}>{title}</div>
            <div className={styles.spaceLeader}>{leader}</div>
            <div className={styles.spaceDescription}>{description}</div>
        </div>
    );
};

export default TeamSpace;
