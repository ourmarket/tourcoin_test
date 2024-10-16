/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./banner.module.css";
import { useMobile } from "@/hooks/useMobile";

const menuAnimate = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};
const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const Banner = ({ title, button, buy }) => {
  const { isMobile } = useMobile();
  return (
    <section
      className={styles.banner_section}
      id="home"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
    >
      <div className={styles.banner_bg}></div>
      <div className={styles.over_shape}>
        <img
          className={styles.animation_one}
          src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/animate1_zZOz1aQyq.png?updatedAt=1709213142130"
          alt="Image"
        />
        <img
          className={styles.animation_two}
          src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/animate2_Rah5x5sQa.png?updatedAt=1709213142043"
          alt="Image"
        />
        <img
          className={styles.animation_three}
          src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/animate3_NG19MQEsc.png?updatedAt=1709213141883"
          alt="Image"
        />
      </div>
      <div></div>
      <div>
        <div className={styles.banner_container}>
          <div className={styles.wrapper}>
            <div className={styles.wrapper_flex}>
              <div
                className={styles.banner_title}
                initial={"initial"}
                animate={"animate"}
                transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
              >
                <h1 variants={menuAnimate}>{buy}</h1>
                <h6 variants={menuAnimate}>{title}</h6>
              </div>
              {!isMobile && (
                <div className={styles.banner_video}>
                  <div className={styles.banner_video_container}>
                    <div className={styles.video_one}>
                      <video
                        className={styles.video_bg}
                        autoPlay
                        loop
                        muted
                        preload="true"
                      >
                        <source
                          type="video/mp4"
                          src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/subir%201_Q04Ergrlz.mp4?updatedAt=1712930690206"
                        />
                      </video>
                    </div>
                    <div className={styles.video_two}>
                      <video
                        className={styles.video_bg}
                        autoPlay
                        loop
                        muted
                        preload="true"
                      >
                        <source
                          type="video/mp4"
                          src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/V%C3%ADdeo%20sin%20t%C3%ADtulo%20_%20Hecho%20con%20Clipchamp%20(online-video-cutter.com)%20(1)%20(1)_hKoQxSwo_m.mp4?updatedAt=1712935926598"
                        />
                      </video>
                    </div>
                    <div className={styles.video_three}>
                      <video
                        className={styles.video_bg}
                        autoPlay
                        loop
                        muted
                        preload="true"
                      >
                        <source
                          type="video/mp4"
                          src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/tc_final_7e6hWkGWni.mp4?updatedAt=1714572036023"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
