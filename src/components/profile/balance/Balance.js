import { useGetBalance } from "@/hooks/useGetBalance";
import styles from "./balance.module.css";
import { useSelector } from "react-redux";

const Balance = () => {
  useGetBalance();
  const { address } = useSelector((state) => state.auth);
  const { TRCPrice, BNBPrice, amountTRC, amountBNB, isLoading, errorBalance } =
    useSelector((state) => state.balance);

  const trcUsd = (TRCPrice * amountTRC).toFixed(2);
  const bnbUsd = (BNBPrice * amountBNB).toFixed(2);

  return (
    <>
      {isLoading && (
        <div className={styles.loading}>
          <span className="loader"></span>
        </div>
      )}
      {errorBalance && (
        <div className={styles.error} style={{ color: "red" }}>
          <p>{errorBalance}</p>
        </div>
      )}
      <div className={styles.container}>
        <p className={styles.label}>Wallet </p>
        <div className={styles.row}>
          <p className={styles.data}>{address}</p>
        </div>
        <p className={styles.label}>TRC </p>
        <div className={styles.row}>
          <p className={styles.data2}>{amountTRC}</p>
          <p className={styles.data3}>{`$${trcUsd || 0}`}</p>
        </div>
        <p className={styles.label}>BNB </p>
        <div className={styles.row}>
          <p className={styles.data2}>{amountBNB}</p>
          <p className={styles.data3}>{`$${bnbUsd || "0"}`}</p>
        </div>
      </div>
    </>
  );
};

export default Balance;
