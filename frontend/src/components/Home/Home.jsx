import { useContext } from "react";
import styles from "./Home.module.css";
import { AuthContext } from "../../context/AuthContext";
import TodoList from "../TodoList/TodoList";
import Sheet from "../Sheet/Sheet";
import CompletedTodo from "../CompletedTodo/CompletedTodo";
import PortalForm from "../PortalForm/PortalForm";
import LogoutButton from "../LogoutButton/LogoutButton";

const Home = () => {
  const { state } = useContext(AuthContext);
  const user = state.user;

  return (
    <Sheet>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <div>
            <p>
              <b>{user.username}</b>さん、こんにちは！
              <br />
              あなたのタスクを登録しましょう！
            </p>
          </div>
          <LogoutButton />
        </div>
        <div>
          <PortalForm />
        </div>
        <div className={styles.main}>
          <TodoList />
          <CompletedTodo />
        </div>
      </div>
    </Sheet>
  );
};

export default Home;
