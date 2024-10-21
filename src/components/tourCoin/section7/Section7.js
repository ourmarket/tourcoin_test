/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import styles from "./section7.module.css";

export const Section7 = ({ translations }) => {
  const { small, title, p_1 } = translations;
  const [screen, setScreen] = useState(0);
  return (
    <section className={styles.container} id="info">
      <div className={styles.limit}>
        <small>{small}</small>
        <h2>{title}</h2>
        <p>{p_1}</p>
        <div className={styles.wrapper}>
          <div>
            <button
              onClick={() => setScreen(0)}
              className={screen === 0 ? styles.btn_active : styles.btn_inactive}
              style={{ borderTopLeftRadius: "10px" }}
            >
              TRC/WBNB
            </button>
            <button
              onClick={() => setScreen(1)}
              className={screen === 1 ? styles.btn_active : styles.btn_inactive}
              style={{ borderTopRightRadius: "10px" }}
            >
              TRC/BTCB
            </button>
          </div>
          {screen === 0 && (
            <div className={styles.info}>
              <iframe src="https://dexscreener.com/bsc/0x03A5A1F1c66c4C0D69AA5f992E76E4aC6b1A9241?embed=1&theme=dark"></iframe>
            </div>
          )}
          {screen === 1 && (
            <div className={styles.info}>
              <iframe src="https://dexscreener.com/bsc/0x096819a523179a55762b0854033d2626f9c0a9a6?embed=1&theme=dark"></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
