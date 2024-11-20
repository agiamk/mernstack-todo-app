import { useContext, useState } from "react";
import styles from "./Login.module.css";
import { getAccount } from "../../utils/getAccount";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(AuthContext);
  const [error, setError] = useState(state.error);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(state.user);
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
    <>
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
          />
        </div>
        <button type="submit">ログイン</button>
        {error && <p>{error}</p>}
      </form>
      <Link to="/register">新規登録はこちら</Link>
    </>
  );
};

export default Register;
