import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import TodoForm from "../TodoForm/TodoForm";
import styles from "./PortalForm.module.css";
import Button from "../Button/Button";

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
      <div className={styles.buttonWrapper} onClick={() => setShowModal(true)}>
        <Button>Todoを追加する</Button>
      </div>
      {showModal &&
        createPortal(
          <div className={styles.modal__container}>
            <div className={styles.modal__TodoForm}>
              <TodoForm add setShowModal={setShowModal} />
            </div>
          </div>,
          rootElement
        )}
    </>
  );
};

export default PortalForm;
