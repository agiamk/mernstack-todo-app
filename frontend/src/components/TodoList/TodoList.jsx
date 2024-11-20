import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { apiClinet } from "../../utils/apiClient";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const { state } = useContext(AuthContext);
  const user = state.user;

  useEffect(() => {
    const getTodos = async () => {
      const res = await apiClinet.get(`/todo/${user._id}`);
      setTodos(res.data);
    };
    getTodos();
  }, [user._id, todos]);

  return (
    <div>
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
