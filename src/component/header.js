import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleNavigate = () => {
        navigate('/teamspace'); // teamspace로 이동
    };

    return (
        <nav className={styles.nav}>
            <img className={styles.logo} src="modas-logo-1.png" alt="로고" />

            <div className={styles.authButtons}>
                <button className={styles.loginButton}>로그인</button>
                <button className={styles.signupButton}>회원가입</button>
                {/* 빈 버튼 클릭 시 teamspace로 이동 */}
                <button onClick={handleNavigate}>Teamspace 이동</button>
            </div>
        </nav>
    );
};

export default Header;
