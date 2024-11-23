import { useContext, useEffect, useState } from "react";
import styles from "./CompletedTodo";
import { apiClient } from "../../utils/apiClient";
import { AuthContext } from "../../context/AuthContext";
import Todo from "../Todo/Todo";

const CompletedTodo = () => {
  const [todos, setTodos] = useState([]);
  const { state } = useContext(AuthContext);
  const user = state.user;

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await apiClient.get(`/todo/completed/${user._id}`);
      setTodos(res.data);
    };
    fetchTodos();
  }, [user._id]);

  return (
    <div>
      <h2>完了したTodo</h2>
      <div className={styles.todoContainer}>
        {todos.length === 0 ? (
          <p>未完了のtodoがありません</p>
        ) : (
          todos.map((todo) => <Todo completed todo={todo} key={todo._id} />)
        )}
      </div>
    </div>
  );
};

export default CompletedTodo;
