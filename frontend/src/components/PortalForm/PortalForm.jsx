import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import TodoForm from "../TodoForm/TodoForm";
import styles from "./PortalForm.module.css";

const rootElement = document.querySelector("#root");

const PortalForm = () => {
  const [showModal, setShowModal] = useState(false);

  //Escキーを押すとモーダルが閉じるようにEventListnerを追加
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    if (showModal) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);

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
          rootElement
        )}
    </>
  );
};

export default PortalForm;
