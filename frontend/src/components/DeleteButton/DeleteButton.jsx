import { apiClinet } from "../../utils/apiClient";

const DeleteButton = ({ id }) => {
  const handleDelete = async () => {
    await apiClinet.delete(`/todo/${id}`);
  };

  return <button onClick={handleDelete}>削除</button>;
};

export default DeleteButton;
