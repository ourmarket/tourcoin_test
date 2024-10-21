/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import styles from "./section9.module.css";
import { motion } from "framer-motion";

const scrollAnimateLeft = {
  initial: { opacity: 0, x: -150 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};
const scrollAnimateRight = {
  initial: { opacity: 0, x: 150 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

export const Section9 = ({ translations }) => {
  const {
    small,
    title,
    p_1,
    li_1,
    li_2,
    li_3,
    li_4,
    li_5,
    li_6,
    li_7,
    li_8,
    li_9,
    li_10,
    card_title,
    Network,
    Contrato,
    Nombre,
    Simbolo,
    img_url,
    p_2,
  } = translations;

  const [copy, setCopy] = useState(false);

  const clipboard = () => {
    navigator.clipboard.writeText("0x34B08ccf9620aEd6d158BaE65e85Bb3bBe2c384A");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000); // Reiniciar el estado "copiado" después de 2 segundos
  };

  return (
    <section className={styles.container} id="tokenomics">
      <div className={styles.limit}>
        <small>{small}</small>
        <h2>{title}</h2>
        <p>{p_1}</p>
        <div className={styles.wrapper}>
          <motion.div
            className={styles.left}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ amount: 0.2, once: true }}
            variants={scrollAnimateLeft}
          >
            <img
              src={
                "https://ik.imagekit.io/mrprwema7/Tour%20Coin/New%20Project%20(2)_JA5BaCM4P.png?updatedAt=1715641419843"
              }
              alt="Tokenomics"
            />
          </motion.div>
          <motion.div
            className={styles.right}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ amount: 0.2, once: true }}
            variants={scrollAnimateRight}
          >
            <div className={styles.col}>
              <ul>
                <li>
                  <span className={styles.color_1}></span>
                  {li_1}
                </li>
                <li>
                  <span className={styles.color_2} />
                  {li_2}
                </li>
                <li>
                  <span className={styles.color_3} />
                  {li_3}
                </li>
                <li>
                  <span className={styles.color_4} />
                  {li_4}
                </li>
                <li>
                  <span className={styles.color_5} />
                  {li_5}
                </li>
              </ul>
              <ul>
                <li>
                  <span className={styles.color_6}></span>
                  {li_6}
                </li>
                <li>
                  <span className={styles.color_7} />
                  {li_7}
                </li>
                <li>
                  <span className={styles.color_8} />
                  {li_8}
                </li>
                <li>
                  <span className={styles.color_9} />
                  {li_9}
                </li>
                <li>
                  <span className={styles.color_10} />
                  {li_10}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        <div className={styles.wrapper_2}>
          <motion.div
            className={styles.left_data}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ amount: 0.2, once: true }}
            variants={scrollAnimateLeft}
          >
            <h3>{card_title}</h3>
            <div className={styles.row}>
              <p>
                <strong>{Network}</strong>
              </p>
              <p>BNB Blockchain</p>
            </div>
            <div className={styles.row}>
              <p>
                <strong>{Contrato}</strong>
              </p>
              <div className={styles.contract} onClick={() => clipboard()}>
                0x34B08ccf9620aEd6d158BaE65e85Bb3bBe2c384A
                {copy && <span className={styles.clipboard}>Copiado!</span>}
              </div>
            </div>
            <div className={styles.row}>
              <p>
                <strong>{Nombre}</strong>
              </p>
              <p>TourCoin</p>
            </div>
            <div className={styles.row}>
              <p>
                <strong>{Simbolo}</strong>
              </p>
              <p>TRC</p>
            </div>
          </motion.div>
          <motion.div
            className={styles.right}
            initial={"initial"}
            whileInView={"animate"}
            viewport={{ amount: 0.2, once: true }}
            variants={scrollAnimateRight}
          >
            <img src={img_url} alt="Tokenomics" />
          </motion.div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: p_2 }} />
      </div>
    </section>
  );
};
