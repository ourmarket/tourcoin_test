"use client";
import styles from "./details.module.css";
import { IoMdClose } from "react-icons/io";

const LoadingModal = ({
  quantityTRC,
  alliance,
  setIsLoading,
  translations,
}) => {
  const { loading, send } = translations;
  return (
    <div className={styles.modal}>
      <div className={styles.success}>
        <button onClick={() => setIsLoading(false)} className={styles.close}>
          <IoMdClose size={"1.5rem"} />
        </button>
        <div className="loader"></div>
        <p className={styles.text}>{loading}</p>
        <div className={styles.flex_gap}>
          <span>{`${send} ${quantityTRC} TRC`}</span>
          <span>➡️</span>
          <span>{alliance}</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
