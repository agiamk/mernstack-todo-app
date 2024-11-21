import { useState } from "react";
import { createPortal } from "react-dom";
import TodoForm from "../TodoForm/TodoForm";
import styles from "./PortalForm.module.css";

const PortalForm = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Todoを追加する</button>
      {showModal &&
        createPortal(
          <div className={styles.modal__container}>
            <div className={styles.modal__TodoForm}>
              <TodoForm add onClose={() => setShowModal(false)} />
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default PortalForm;
