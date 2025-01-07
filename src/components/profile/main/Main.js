"use client";

import styles from "./main.module.css";
import Auth from "../auth/Auth";
import Balance from "../balance/Balance";
import { useAccount } from "wagmi";

const MainProfile = ({ translations }) => {
  const { address } = useAccount();

  return (
    <section className={styles.container}>
      <Auth translations={translations} />

      {address && (
        <>
          <Balance />
        </>
      )}
    </section>
  );
};

export default MainProfile;
