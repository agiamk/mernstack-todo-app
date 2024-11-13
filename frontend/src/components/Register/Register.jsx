import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      console.log(res);
      setError("");
    } catch (err) {
      console.log(err);
      setError("新規登録に失敗しました");
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
      <button type="submit">登録</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Register;
