import { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css";
import { getAccount } from "../../utils/getAccount";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Sheet from "../Sheet/Sheet";
import Button from "../Button/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await getAccount(
      {
        email,
        password,
      },
      dispatch
    ).then(() => {
      if (state) {
        navigate("/");
      }
    });
  };

  return (
    <Sheet>
      <h1>MERNStack TodoApp</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__item}>
          <label htmlFor="email" className={styles.form__label}>
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="password" className={styles.form__label}>
            パスワード
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button>ログイン</Button>
      </form>
      <Link to="/register">新規登録はこちら</Link>
    </Sheet>
  );
};

export default Login;
