import Header from '../../component/header';
import Query from '../../component/query';
import TeamSpace from '../../component/teamSpace';
import styles from './mainPage.module.css';

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <Header />
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
            <Query />
            <div className={styles.teamSpaces}>
                <TeamSpace title="스페이스제목" leader="스페이스 리더이름" description="스페이스 설명" />
                <TeamSpace title="스페이스제목" leader="스페이스 리더이름" description="스페이스 설명" />
                <TeamSpace title="스페이스제목" leader="스페이스 리더이름" description="스페이스 설명" />
                <TeamSpace title="스페이스제목" leader="스페이스 리더이름" description="스페이스 설명" />
            </div>
        </div>
    );
};

export default MainPage;
