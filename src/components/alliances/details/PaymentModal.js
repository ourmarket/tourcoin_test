"use client";
import styles from "./details.module.css";
import { IoMdClose } from "react-icons/io";

const PaymentModal = ({
  quantityTRC,
  quantityLocal,
  localCurrency,
  alliance,
  setPaymentModal,
  handlePay,
  translations,
}) => {
  const { title, sent_to, pay_btn_modal } = translations;
  return (
    <div className={styles.modal}>
      <div
        className={styles.success}
        style={{ paddingTop: 30, paddingBottom: 30 }}
      >
        <button onClick={() => setPaymentModal(false)} className={styles.close}>
          <IoMdClose size={"1.5rem"} />
        </button>
        <h3 className={styles.modal_title}>{title}</h3>

        <div className={styles.flex}>
          <p style={{ color: "white" }}>TRC</p>
          <p
            style={{ color: "white" }}
          >{`${quantityTRC} (${quantityLocal} ${localCurrency})`}</p>
        </div>
        <div className={styles.flex}>
          <p style={{ color: "white" }}>{sent_to}</p>
          <p style={{ color: "white" }}>{alliance}</p>
        </div>
        <button
          className={styles.btn}
          style={{ marginTop: 30 }}
          onClick={() => {
            setPaymentModal(false);
            handlePay();
          }}
        >
          {pay_btn_modal}
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
