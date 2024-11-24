import styles from "./LogoutButton.module.css";

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <button className={styles.button} onClick={handleLogout}>
      ログアウト
    </button>
  );
};

export default LogoutButton;
