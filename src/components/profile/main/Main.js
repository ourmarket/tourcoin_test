"use client";

import styles from "./main.module.css";
import Auth from "../auth/Auth";
import Balance from "../balance/Balance";
import { useAccount } from "wagmi";
/* import LockTokens from "../lock/Lock";
import GetInfoLock from "../lockInfo/GetInfoLock"; */

const MainProfile = ({ translations }) => {
  /* const { address, authProcess, error } = useSelector((state) => state.auth); */
  const { address } = useAccount();

  return (
    <section className={styles.container}>
      <Auth translations={translations} />
      {/* {authProcess && (
        <div className={styles.loading}>
          <span className="loader"></span>
        </div>
      )} */}

      {address && (
        <>
          <Balance address={address} />
          {/*   <LockTokens />
          <GetInfoLock address={address} /> */}
        </>
      )}
      {/*  {error && (
        <div className={styles.error} style={{ color: "red" }}>
          <p>{error}</p>
        </div>
      )} */}
    </section>
  );
};

export default MainProfile;
