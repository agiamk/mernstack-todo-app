import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { apiClient } from "../../utils/apiClient";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const { state } = useContext(AuthContext);
  const user = state.user;

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await apiClient.get(`/todo/${user._id}`);
      setTodos(res.data);
    };
    fetchTodos();
  }, [user._id, todos]);

  return (
    <div className={styles.container}>
      <h1>現在のTODO</h1>
      <div>
        {todos.length === 0 ? (
          <p>todoが登録されていません</p>
        ) : (
          todos.map((todo) => <Todo todo={todo} key={todo._id} />)
        )}
      </div>
    </div>
  );
};

export default TodoList;
