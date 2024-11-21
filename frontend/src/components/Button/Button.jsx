import styles from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <button type="submit" className={styles.form__button}>
      {children}
    </button>
  );
};

export default Button;
