import styles from "./Sheet.module.css";

const Sheet = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Sheet;
