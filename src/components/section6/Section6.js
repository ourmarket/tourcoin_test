/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./section6.module.css";

export const Section6 = ({ translations }) => {
  const { small, title, p_1, title_1, text_1, title_2, text_2 } = translations;

  return (
    <section className={styles.container} id="buy">
      <div className={styles.limit}>
        <small>{small}</small>
        <h2>{title}</h2>
        <p>{p_1}</p>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <h3>{title_1}</h3>
            <p>{text_1}</p>
            <Link
              href={"https://youtu.be/MB0ywuS3CmA?si=YkK4LYpNV9sAG56j"}
              target="_blank"
            >
              <div className={styles.image}>
                <img src="/metamask.png" alt="metamask" />
              </div>
            </Link>
          </div>
          <div className={styles.right}>
            <h3>{title_2}</h3>
            <p>{text_2}</p>
            <Link href={"https://youtu.be/ZDQotVZmih8?si=aRDjTKD_mZN5azEA"}>
              <div className={styles.image}>
                <img src="/pancakeswap.png" alt="pancakeswap" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
