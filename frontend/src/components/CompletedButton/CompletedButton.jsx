import styles from "./CompletedButton.module.css";
import { apiClient } from "../../utils/apiClient";

const CompletedButton = ({ id }) => {
  const todoComplete = async () => {
    await apiClient.put(`/todo/complete/${id}`);

    window.location.reload();
  };

  return (
    <button className={styles.button} onClick={todoComplete}>
      完了にする
    </button>
  );
};

export default CompletedButton;
