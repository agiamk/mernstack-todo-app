import { useContext, useState } from "react";
import "./Login.css";
import { getAccount } from "../../utils/getAccount";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(AuthContext);
  const [error, setError] = useState(state.error);

  const handleSubmit = async (e) => {
    console.log(state.user);
    e.preventDefault();

    await getAccount(
      {
        email,
        password,
      },
      dispatch
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">ログイン</button>
        {error && <p>{error}</p>}
      </form>
      <Link to="/register">新規登録</Link>
    </>
  );
};

export default Register;
