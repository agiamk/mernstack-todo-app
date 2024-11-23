/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { apiClient } from "../../utils/apiClient";
import styles from "./TodoForm.module.css";
import { AuthContext } from "../../context/AuthContext";
import Button from "../Button/Button";

const TodoForm = ({ add, update, todo, setEdit, setShowModal }) => {
  const { state } = useContext(AuthContext);
  const [error, setError] = useState(state.error);
  const [priority, setPriority] = useState(todo?.priority || "");
  const [title, setTitle] = useState(todo?.title || "");
  const [content, setContent] = useState(todo?.content || "");
  const user = state.user;

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (add) {
        await apiClient.post("/todo", {
          userId: user._id,
          title: title,
          content: content,
          priority: priority,
          isDone: false,
        });
        setTitle("");
        setContent("");
        setPriority("");
        setShowModal(false);
      }

      if (update) {
        await apiClient.put(`/todo/update/${todo._id}`, {
          userId: user._id,
          title: title,
          content: content,
          priority: priority,
        });
        setTitle("");
        setContent("");
        setPriority("");
        setEdit((prev) => !prev);
      }

      window.location.reload();
    } catch (err) {
      setError(err.response);
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <form
        onSubmit={(e) => {
          console.log("Form submitted");
          submitHandler(e);
        }}
        className={styles.form}
      >
        <div className={styles.form__item}>
          <label htmlFor="title" className={styles.form__label}>
            タイトル
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onInput={(e) => setTitle(e.target.value)}
            required
            className={styles.form__inputText}
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="content" className={styles.form__label}>
            コンテンツ
          </label>
          <textarea
            type="text"
            id="content"
            value={content}
            onInput={(e) => setContent(e.target.value)}
            required
            className={styles.form__textArea}
          />
        </div>
        <div className={`${styles.form__item} ${styles["form__item--radio"]}`}>
          <span>優先度</span>
          <div>
            <label
              htmlFor="high"
              className={`${styles.form__label} ${styles["form__label--radio"]}`}
            >
              高
            </label>
            <input
              type="radio"
              name="priority"
              value="高"
              onChange={(e) => setPriority(e.target.value)}
              id="high"
              checked={priority === "高"}
              required
            />
          </div>
          <div>
            <label
              htmlFor="middle"
              className={`${styles.form__label} ${styles["form__label--radio"]}`}
            >
              中
            </label>
            <input
              type="radio"
              name="priority"
              value="中"
              onChange={(e) => setPriority(e.target.value)}
              id="middle"
              checked={priority === "中"}
              required
            />
          </div>
          <div>
            <label
              htmlFor="low"
              className={`${styles.form__label} ${styles["form__label--radio"]}`}
            >
              低
            </label>
            <input
              type="radio"
              name="priority"
              value="低"
              onChange={(e) => setPriority(e.target.value)}
              id="low"
              checked={priority === "低"}
              required
            />
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <span>{add && <Button>追加</Button>}</span>
          <span>{update && <Button>更新</Button>}</span>
        </div>
      </form>
      <div>{error && error}</div>
    </div>
  );
};

export default TodoForm;
