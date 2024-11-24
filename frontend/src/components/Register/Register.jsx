import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAccount } from "../../utils/getAccount";
import { AuthContext } from "../../context/AuthContext";
import { apiClient } from "../../utils/apiClient";
import styles from "./Register.module.css";
import Sheet from "../Sheet/Sheet";
import Button from "../Button/Button";

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
        const res = await apiClient.post("/auth/register", {
          username,
          email,
          password,
        });

        //ログインして自分のアカウントを取得できたらメインページに遷移
        await getAccount(res.data, dispatch).then(() => navigate("/"));
      } catch (err) {
        console.log(err);
        setError("新規登録に失敗しました");
      }
    } else {
      passwordConfirmation.current.setCustomValidity("パスワードが違います。");
    }
  };

  return (
    <Sheet>
      <h1>MERNStack TodoApp</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__item}>
          <label htmlFor="username" className={styles.form__label}>
            ユーザーネーム
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
        <div className={styles.form__item}>
          <label htmlFor="passwordConfirmation" className={styles.form__label}>
            確認用パスワード
          </label>
          <input
            type="password"
            id="passwordConfirmation"
            ref={passwordConfirmation}
          />
        </div>
        <Button>新規登録</Button>
        {error && <p>{error}</p>}
      </form>
      <Link to="/login">ログインはこちら</Link>
    </Sheet>
  );
};

export default Register;
