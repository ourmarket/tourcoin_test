import { formatUnits } from "viem";
import styles from "./balance.module.css";

const Balance = ({ data, priceTrcData, priceBnbData }) => {
  const balanceTrc = +formatUnits(data?.balanceTrc || "", 18);

  const balanceBnb = +data.balanceBnb;
  const balanceBnbFix = Number.isInteger(balanceBnb)
    ? balanceBnb.toString()
    : balanceBnb.toFixed(6);

  const balanceTrcFix = Number.isInteger(balanceTrc)
    ? balanceTrc.toString()
    : balanceTrc.toFixed(6);

  const trcUsd = priceTrcData?.pairs[0]?.priceUsd * balanceTrc;
  const bnbUsd = priceBnbData?.pairs[0]?.priceUsd * data.balanceBnb;

  return (
    <div className={styles.container}>
      <p className={styles.label}>Wallet </p>
      <div className={styles.row}>
        <p className={styles.data}>{data.address}</p>
      </div>
      <p className={styles.label}>TRC </p>
      <div className={styles.row}>
        <p className={styles.data2}>{balanceTrcFix}</p>
        <p className={styles.data3}>{`$${trcUsd.toFixed(2)}`}</p>
      </div>
      <p className={styles.label}>BNB </p>
      <div className={styles.row}>
        <p className={styles.data2}>{balanceBnbFix}</p>
        <p className={styles.data3}>{`$${bnbUsd.toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default Balance;
