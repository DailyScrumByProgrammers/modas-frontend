// Nav.js
import styles from './header.module.css';

const header = () => {
    return (
        <nav className={styles.nav}>

                <img className={styles.logo} src="modas-logo-1.png" alt="검색 아이콘"/>

            <div className={styles.authButtons}>
                <button className={styles.loginButton}>로그인</button>
                <button className={styles.signupButton}>회원가입</button>
            </div>
        </nav>
    );
};

export default header;
