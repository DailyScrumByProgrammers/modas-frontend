// Nav.js
import styles from './nav.module.css';

const nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>모다스</div>
            </div>
            <div className={styles.authButtons}>
                <div className={styles.loginButton}>로그인</div>
                <div className={styles.signupButton}>회원가입</div>
            </div>
        </nav>
    );
};

export default nav;
