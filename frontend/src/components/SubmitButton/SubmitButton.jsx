import styles from "./SubmitButton.module.css";

const SubmitButton = ({ children }) => {
  return (
    <button type="submit" className={styles.form__button}>
      {children}
    </button>
  );
};

export default SubmitButton;
