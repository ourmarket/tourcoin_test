"use client";
import styles from "./section2.module.css";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";

const Card = ({ title, text, icon: Icon }) => {
  return (
    <article className={styles.card}>
      <div className={styles.icon}>
        {Icon && <Icon size="2em" color="#f9ba32" />}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
};
export const Section2 = ({ translations }) => {
  const { small, h2, p_1, title_3, title_4, title_5, text_3, text_5, text_4 } =
    translations;
  return (
    <section className={styles.container}>
      <div className={styles.limit}>
        <small>{small}</small>
        <h2>{h2}</h2>
        <p className={styles.sub_title}>{p_1}</p>

        <div className={styles.cards_container}>
          <div className={styles.card_animation}>
            <Card title={title_3} text={text_3} icon={IoDiamondOutline} />
          </div>

          <div className={styles.card_animation}>
            <Card title={title_5} text={text_5} icon={MdOutlineDiscount} />
          </div>
          <div className={styles.card_animation}>
            <Card title={title_4} text={text_4} icon={SiYourtraveldottv} />
          </div>
        </div>
      </div>
    </section>
  );
};
