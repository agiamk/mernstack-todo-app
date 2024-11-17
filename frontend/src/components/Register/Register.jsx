import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAccount } from "../../utils/getAccount";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordConfirmation = useRef(null);
  const [error, setError] = useState("");
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //パスワードと確認用パスワードがあっているか確認
    if (password === passwordConfirmation.current.value) {
      try {
        const res = await axios.post("/api/auth/register", {
          username,
          email,
          password,
        });

        getAccount(res.data, dispatch);
        navigate("/todo");
      } catch (err) {
        console.log(err);
        setError("新規登録に失敗しました");
      }
    } else {
      passwordConfirmation.current.setCustomValidity("パスワードが違います。");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="名前を入力してください"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="メールアドレスを入力してください。"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="パスワードを入力してください。"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="確認用パスワードを入力してください"
        ref={passwordConfirmation}
      />
      <button type="submit">登録</button>
      {error && <p>{error}</p>}
      <Link to="/login">ログイン</Link>
    </form>
  );
};

export default Register;
