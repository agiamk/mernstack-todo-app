import { useState } from "react";
import styles from "./Todo.module.css";
import DeleteButton from "../DeleteButton/DeleteButton";
import SubmitButton from "../SubmitButton/SubmitButton";

// eslint-disable-next-line react/prop-types
const Todo = ({ todo }) => {
  const [edit, setEdit] = useState(false);

  return (
    <div className={styles.container}>
      {edit ? (
        <form>
          <input type="text" value={todo.title} required />
          <input type="text" value={todo.content} required />
          <SubmitButton>更新</SubmitButton>
        </form>
      ) : (
        <div>
          <p>{todo.title}</p>
          <p>{todo.content}</p>
          <p>{todo.priority}</p>
        </div>
      )}

      <button onClick={setEdit((prev) => !prev)}>編集する</button>
      <DeleteButton id={todo._id} />
    </div>
  );
};

export default Todo;
