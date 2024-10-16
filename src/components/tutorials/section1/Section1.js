/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import styles from "./section1.module.css";
import { motion } from "framer-motion";

export const scrollAnimateUp = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

export const Section1 = ({ translations }) => {
  const {
    small,
    h2,
    p_1,
    title1,
    title2,
    title3,
    title4,
    text_1,
    text_2,
    text_3,
    text_4,
    button,
    video_1,
    video_2,
    video_3,
    video_4,
  } = translations;

  const [video, setVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  // Función para ocultar el desplazamiento del body
  useEffect(() => {
    // Al montar el componente
    if (video) {
      document.body.style.overflow = "hidden"; // Oculta el desplazamiento del body
    }

    // Al desmontar el componente
    return () => {
      document.body.style.overflow = ""; // Restablece el desplazamiento del body
    };
  }, [video]); // Ejecutar solo una vez al montar el componente

  return (
    <>
      <section className={styles.container} id="tour_coin">
        <div className={styles.limit}>
          <small>{small}</small>
          <h2>{h2}</h2>
          <p className={styles.sub_title}> {p_1}</p>
          <div className={styles.flex}>
            <div className={styles.img}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/binance_680_8P1vIZ39c.jpg?updatedAt=1712670427699"
                alt="binance"
              />
            </div>
            <div className={styles.wrapper}>
              <motion.h3
                initial={"initial"}
                whileInView={"animate"}
                viewport={{ amount: 0.2, once: true }}
                variants={scrollAnimateUp}
              >
                {title1}
              </motion.h3>
              <motion.div
                initial={"initial"}
                whileInView={"animate"}
                viewport={{ amount: 0.2, once: true }}
                variants={scrollAnimateUp}
              >
                <p>{text_1}</p>
                <button
                  onClick={() => {
                    setVideo(true);
                    setVideoUrl(video_1);
                  }}
                >
                  {button}
                </button>
              </motion.div>
              <div className={styles.text_2}>
                <motion.h3
                  style={{ marginTop: "100px" }}
                  initial={"initial"}
                  whileInView={"animate"}
                  viewport={{ amount: 0.2, once: true }}
                  variants={scrollAnimateUp}
                >
                  {title2}
                </motion.h3>
                <motion.div
                  initial={"initial"}
                  whileInView={"animate"}
                  viewport={{ amount: 0.2, once: true }}
                  variants={scrollAnimateUp}
                >
                  <p>{text_2}</p>
                  <button
                    onClick={() => {
                      setVideo(true);
                      setVideoUrl(video_2);
                    }}
                  >
                    {button}
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
          {/*  <div className={styles.flex}>
            <div className={styles.wrapper}>
              <motion.h3
                initial={"initial"}
                whileInView={"animate"}
                viewport={{ amount: 0.2, once: true }}
                variants={scrollAnimateUp}
              >
                {title3}
              </motion.h3>
              <motion.div
                initial={"initial"}
                whileInView={"animate"}
                viewport={{ amount: 0.2, once: true }}
                variants={scrollAnimateUp}
              >
                <p>{text_3}</p>
                <button
                  onClick={() => {
                    setVideo(true);
                    setVideoUrl(video_3);
                  }}
                >
                  {button}
                </button>
              </motion.div>
              <div className={styles.text_3}>
                <motion.h3
                  style={{ marginTop: "100px" }}
                  initial={"initial"}
                  whileInView={"animate"}
                  viewport={{ amount: 0.2, once: true }}
                  variants={scrollAnimateUp}
                >
                  {title4}
                </motion.h3>
                <motion.div
                  initial={"initial"}
                  whileInView={"animate"}
                  viewport={{ amount: 0.2, once: true }}
                  variants={scrollAnimateUp}
                >
                  <p>{text_4}</p>
                  <button
                    onClick={() => {
                      setVideo(true);
                      setVideoUrl(video_4);
                    }}
                  >
                    {button}
                  </button>
                </motion.div>
              </div>
            </div>
            <div className={styles.img}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/coin_iPD8YDhZk.webp?updatedAt=1709241198340"
                alt="tour_coin"
              />
            </div>
          </div> */}
        </div>
      </section>
      {video && (
        <section className={styles.menu_video}>
          <div className={styles.menu_video_wrapper}>
            <button
              className={styles.btn_close}
              onClick={() => setVideo(false)}
            >
              X
            </button>
            <div className={styles.video_container}>
              <iframe
                src={videoUrl}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
