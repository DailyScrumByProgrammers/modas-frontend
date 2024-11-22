import styles from './users.module.css';

const User = ({ users, onDelete }) => {
  const userGroups = [];
  for (let i = 0; i < users.length; i += 2) {
    userGroups.push(users.slice(i, i + 2));
  }

  return (
    <div>
      <div className={styles.gridContainer}>
        {userGroups.map((group, index) => (
          <div key={index} className={styles.groupContainer}>
            <div className={styles.headerContainer}>
              <div>닉네임</div>
              <div>ID</div>
              <div>관리</div>
            </div>
            {group.map((user) => (
              <div key={user.id} className={styles.userRow}>
                <span>{user.nickName}</span>
                <span>{user.id}</span>
                <button onClick={() => onDelete(user.id)}>삭제</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
