import { useState } from "react";
import styles from "./Todo.module.css";
import DeleteButton from "../DeleteButton/DeleteButton";
import TodoForm from "../TodoForm/TodoForm";

// eslint-disable-next-line react/prop-types
const Todo = ({ todo }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div className={styles.container}>
      {edit ? (
        <TodoForm update todo={todo} setEdit={setEdit} />
      ) : (
        <div className={styles.card}>
          <em className={styles.card__title}>{todo.title}</em>
          <p className={styles.card__content}>{todo.content}</p>
          <p className={styles.card__priority}>優先度：{todo.priority}</p>
          <div className={styles.card__buttonList}>
            <button
              className={styles.card__editButton}
              onClick={() => setEdit((prev) => !prev)}
            >
              編集する
            </button>
            <DeleteButton id={todo._id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
