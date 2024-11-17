import { useRef, useState } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [error, setError] = useState();
  const title = useRef();
  const content = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      setError("トークンがありません。ログインしてください。");
      return;
    }

    try {
      const res = await axios.get("http://localhost:5000/api/todo/", {});
      console.log(res.data);
    } catch (err) {
      setError(err.response);
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <div>
          <div>
            <label htmlFor="title">タイトル</label>
            <input type="text" id="title" ref={title} />
          </div>
          <div>
            <label htmlFor="content">コンテンツ</label>
            <input type="text" id="content" ref={content} />
          </div>
          <button type="submit">送信</button>
        </div>
      </form>
      <div>{error}</div>
    </div>
  );
};

export default Form;
