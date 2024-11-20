import { useContext } from "react";
import styles from "./Home.module.css";
import { AuthContext } from "../../context/AuthContext";
import TodoList from "../TodoList/TodoList";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import Sheet from "../Sheet/Sheet";
import CompletedTodo from "../CompletedTodo/CompletedTodo";

const Home = () => {
  const { state } = useContext(AuthContext);
  const user = state.user;

  return (
    <Sheet>
      <div className={styles.container}>
        <p>
          <b>{user.username}</b>さん、こんにちは！
          <br />
          あなたのタスクを登録しましょう！
        </p>
        <AddTodoForm />
        <div className={styles.main}>
          <TodoList />
          <CompletedTodo />
        </div>
      </div>
    </Sheet>
  );
};

export default Home;
