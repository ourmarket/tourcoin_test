"use client";

import { useAccount } from "wagmi";

import styles from "./main.module.css";
import Balance_original from "../balance/balance";
import { useAppKit } from "@reown/appkit/react";

const MainProfile = ({ translations }) => {
  const { connect } = translations;
  const { address } = useAccount();
  const { open } = useAppKit();

  return (
    <section className={styles.container}>
      {/*  <w3m-button balance="false" size="sm" label={connect} /> */}
      <appkit-button balance="false" size="sm" label={connect} />

      {address && <Balance_original />}
    </section>
  );
};

export default MainProfile;
