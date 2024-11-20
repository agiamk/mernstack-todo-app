import styles from "./DeleteButton.module.css";
import { apiClient } from "../../utils/apiClient";

const DeleteButton = ({ id }) => {
  const handleDelete = async () => {
    await apiClient.delete(`/todo/${id}`);
  };

  return (
    <button className={styles.button} onClick={handleDelete}>
      削除
    </button>
  );
};

export default DeleteButton;
