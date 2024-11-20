import { useContext, useRef, useState } from "react";
import { apiClinet } from "../../utils/apiClient";
import styles from "./AddTodoForm.module.css";
import { AuthContext } from "../../context/AuthContext";
import SubmitButton from "../SubmitButton/SubmitButton";

const AddTodoForm = () => {
  const { state } = useContext(AuthContext);
  const [error, setError] = useState(state.error);
  const [priority, setPriority] = useState();
  const title = useRef();
  const content = useRef();

  const user = state.user;

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await apiClinet.post("/todo", {
        userId: user._id,
        title: title.current.value,
        content: content.current.value,
        priority: priority,
        isDone: false,
      });

      title.current.value = "";
      content.current.value = "";
      setPriority("");
      console.log(res.data);
    } catch (err) {
      setError(err.response);
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => submitHandler(e)} className={styles.form}>
        <div className={styles.form__item}>
          <label htmlFor="title" className={styles.form__label}>
            タイトル
          </label>
          <input
            type="text"
            id="title"
            ref={title}
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
            ref={content}
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
          <SubmitButton>追加</SubmitButton>
        </div>
      </form>
      <div>{error && error}</div>
    </div>
  );
};

export default AddTodoForm;
