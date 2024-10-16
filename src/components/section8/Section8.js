/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./section8.module.css";
import { FaLinkedinIn } from "react-icons/fa";

const data = [
  {
    name: "Caleb Romanos",
    p_1: "Co-Founder | CEO",
    p_2: "TourCoin Co-founder",
    linkedIn:
      "https://www.linkedin.com/in/caleb-romanos-chief-executive-office/",
    img: "https://ik.imagekit.io/mrprwema7/Tour%20Coin/caleb_1Nv0OTi0x.png?updatedAt=1715605851290",
  },
  {
    name: "Claudio Garrigo",
    p_1: "Co-Founder | CCO",
    p_2: "TourCoin Co-founder",
    linkedIn: "https://www.linkedin.com/in/claudio-garrigo/",
    img: "https://ik.imagekit.io/mrprwema7/Tour%20Coin/New_Project__1_-removebg-preview%20(5)_d7VWRgdOm.png?updatedAt=1716395469759",
  },
  
  {
    name: "Hernán Moneta",
    p_1: "Chief Technology Officer | CTO",
    p_2: "TourCoin Chief Technology Officer",
    linkedIn: "https://www.linkedin.com/in/hernan-moneta/",
    img: "https://ik.imagekit.io/mrprwema7/Tour%20Coin/hernan2_RiUU4ENzo.png?updatedAt=1715608344527",
  },
  {
    name: "Johanna Graciano",
    p_1: "Chief Financial Officer | CFO",
    p_2: "TourCoin Chief Financial Officer",
    linkedIn: "https://www.linkedin.com/in/johanna-graciano-7a418a147/",
    img: "https://ik.imagekit.io/mrprwema7/Tour%20Coin/Jo_gra2_Bt5bIOeWo.png?updatedAt=1715610182255",
  },
  {
    name: "Johanna Garrigo",
    p_1: "Chief Marketing Officer | CMO",
    p_2: "TourCoin Chief Marketing Officer",
    linkedIn: "https://www.linkedin.com/in/johannagarrigo",
    img: "https://ik.imagekit.io/mrprwema7/Tour%20Coin/johanna_garr_6eDkutWaq.png?updatedAt=1716818551138",
  },
  {
    name: "Sabrina Garrigo",
    p_1: "Head of Business Development",
    p_2: "TourCoin Head of Business Development",
    linkedIn: "https://www.linkedin.com/in/sabrina-garrigo",
    img: "https://ik.imagekit.io/mrprwema7/Tour%20Coin/sabrina_garr_rnIXeUadZ.png?updatedAt=1716820780116",
  },
];

export const Section8 = ({ translations }) => {
  const { small, title, p_1 } = translations;

  return (
    <section className={styles.container} id="info">
      <div className={styles.limit}>
        <small>{small}</small>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />

        <p dangerouslySetInnerHTML={{ __html: p_1 }} />

        <div className={styles.wrapper}>
          <div className={styles.cards_container}>
            {data.map((item) => {
              return (
                <div className={styles.card} key={item.name}>
                  <div className={styles.team_single_img}>
                    <img
                      className={styles.individual_img}
                      src={item.img}
                      alt="Image"
                    />
                    <div className={styles.team_img}>
                      <img
                        alt="Image"
                        src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/New_Project__1_-removebg-preview__4_-removebg-preview_PoZW87wxj.png?updatedAt=1715616419876"
                      />
                    </div>
                  </div>
                  <div className={styles.team_content}>
                    <h3>{item.name}</h3>
                    <span>{item.p_1}</span>
                    <span className={styles.previous_experience}>
                      {item.p_2}
                    </span>
                    <ul>
                      <li>
                        <a
                          href={item.linkedIn}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <FaLinkedinIn color="white" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
