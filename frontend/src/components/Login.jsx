import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      console.log(res);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.log(err);
      setError("ログインに失敗しました");
    }
  };

  return (
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
      <button type="submit">作成</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
