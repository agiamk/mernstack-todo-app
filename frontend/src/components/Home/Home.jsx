import { useContext } from "react";
import styles from "./Home.module.css";
import { AuthContext } from "../../context/AuthContext";
import TodoList from "../TodoList/TodoList";
import AddTodo from "../AddTodoForm/AddTodoForm";

const Home = () => {
  const { state } = useContext(AuthContext);
  const user = state.user;

  return (
    <div className={styles.container}>
      <p>
        {user.username}さん、こんにちは！
        <br />
        あなたのタスクを登録しましょう！
      </p>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Home;
