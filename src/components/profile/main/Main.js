"use client";

import styles from "./main.module.css";
import { useSelector } from "react-redux";
import Auth from "../auth/Auth";
import Balance from "../balance/Balance";
import LockTokens from "../lock/Lock";
import GetInfoLock from "../lockInfo/GetInfoLock";

const MainProfile = ({ translations }) => {
  const { address, authProcess, error } = useSelector((state) => state.auth);

  return (
    <section className={styles.container}>
      <Auth translations={translations} />
      {authProcess && (
        <div className={styles.loading}>
          <span className="loader"></span>
        </div>
      )}

      {address && (
        <>
          <Balance />
          <LockTokens />
          <GetInfoLock address={address} />
        </>
      )}
      {error && (
        <div className={styles.error} style={{ color: "red" }}>
          <p>{error}</p>
        </div>
      )}
    </section>
  );
};

export default MainProfile;
