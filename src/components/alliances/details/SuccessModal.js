"use client";
import { FaRegCheckCircle } from "react-icons/fa";
import styles from "./details.module.css";
import { IoMdClose } from "react-icons/io";

const SuccessModal = ({ receipt, setReceipt, translations }) => {
  const { receipt_modal, BscScan } = translations;
  return (
    <div className={styles.modal}>
      <div className={styles.success}>
        <button onClick={() => setReceipt(null)} className={styles.close}>
          <IoMdClose size={"1.5rem"} />
        </button>
        <FaRegCheckCircle size={"5rem"} color="green" />
        <p className={styles.text}>{receipt_modal}</p>
        <a
          href={`https://bscscan.com/tx/${receipt}`}
          target="_blank"
          className={styles.link}
        >
          {BscScan} <span>{receipt}</span>
        </a>
      </div>
    </div>
  );
};

export default SuccessModal;
