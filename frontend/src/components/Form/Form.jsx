import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const requestHandler = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("トークンがありません。ログインしてください。");
      return;
    }

    try {
      const res = await axios.get(
        "http://localhost:5000/api/secure/protected",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);
      setData(res.data);
    } catch (err) {
      setError(err.response);
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={requestHandler}>送信</button>
      <div>{data}</div>
      <div>{error}</div>
    </div>
  );
};

export default Form;
