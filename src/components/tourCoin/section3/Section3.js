"use client";
/* eslint-disable @next/next/no-img-element */

import styles from "./section3.module.css";
import { motion } from "framer-motion";

export const Section3 = ({ translations }) => {
  const {
    title,
    small,
    title_1,
    title_2,
    title_3,
    text_1,
    text_2,
    text_3_1,
    text_3_2,
    text_3_3,
  } = translations;
  return (
    <section className={styles.container} id="mission">
      <div className={styles.limit}>
        <small>{small}</small>
        <h2>{title}</h2>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  delay: 0.3,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {title_1}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  delay: 0.6,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {text_1}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  delay: 0.3,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {title_2}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  delay: 0.6,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {text_2}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  delay: 0.3,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {title_3}
            </motion.h2>
            <motion.ul
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.5,
                  delay: 0.3,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <li>{text_3_1}</li>
              <li>{text_3_2}</li>
              <li>{text_3_3}</li>
            </motion.ul>
          </div>
          <div className={styles.right}>
            <div className={styles.img_wrapper}>
              <img
                src="https://www.pngmart.com/files/23/Blockchain-PNG-HD-Isolated.png"
                alt="blockchain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
