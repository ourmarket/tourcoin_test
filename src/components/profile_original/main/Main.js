"use client";

import { useAccount } from "wagmi";

import styles from "./main.module.css";
import Balance_original from "../balance/balance";

const MainProfile = ({ translations }) => {
  const { connect } = translations;
  const { address } = useAccount();

  return (
    <section className={styles.container}>
      <w3m-button balance="false" size="sm" label={connect} />
      {address && <Balance_original />}
    </section>
  );
};

export default MainProfile;
