"use client";
/* eslint-disable @next/next/no-img-element */

import styles from "./section4.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css";

export const Section4 = ({ translations }) => {
  const { small, title, p_1 } = translations;
  const [slidesToShow, setSlidesToShow] = useState(6);

  // Función para calcular el número de imágenes a mostrar basado en el ancho de la pantalla
  const calculateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    let slides = 6;

    // Puedes ajustar estos valores según tus necesidades
    if (screenWidth <= 768) {
      slides = 4;
    }
    if (screenWidth <= 576) {
      slides = 2;
    }

    // Actualizar el estado con el nuevo valor de slidesToShow
    setSlidesToShow(slides);
  };

  // Llamar a la función al cargar y al redimensionar la ventana
  useEffect(() => {
    calculateSlidesToShow();
    window.addEventListener("resize", calculateSlidesToShow);
    return () => {
      window.removeEventListener("resize", calculateSlidesToShow);
    };
  }, []);
  return (
    <section className={styles.container} id="actives">
      <small>{small}</small>
      <h2>{title}</h2>
      <p>{p_1}</p>
      <div>
        <Swiper
          spaceBetween={0}
          slidesPerView={slidesToShow}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/DSC03239_VsUbHv6BAe.webp?updatedAt=1709248763956"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/3_zN-CB94UT.webp?updatedAt=1709249897741"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/12_e9v2qADMP.webp?updatedAt=1709252407063"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/8_42JEkU1F6.webp?updatedAt=1709252406483"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/Praia%20Grande_ofnt_2TGmy.webp?updatedAt=1709249233331"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/DJI_20240204125245_0063_D_VtINnB_Fq.webp?updatedAt=1709248763847"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/10_Z5BIFkM1Pc.webp?updatedAt=1709252406299"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/6_zHz6Yn7QCQ.webp?updatedAt=1709252406601"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <Swiper
          spaceBetween={0}
          slidesPerView={slidesToShow}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            /*  reverseDirection: true, */
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/2_7a8gUZ8L19.webp?updatedAt=1709252407078"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/5_TF1krFT3w.webp?updatedAt=1709252406237"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/11_tNQ9TjhVEw.webp?updatedAt=1709252406789"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/4_6vF4gEwot.webp?updatedAt=1709252406339"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/1_6u-pe3Bxqt.webp?updatedAt=17092524066807"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/13_sTHyLDNPA.webp?updatedAt=1709253896161"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/11%20(1)_qyV-NmeHlZ.webp?updatedAt=1709253896309"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.img_container}>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/12%20(1)_TJxOPj94c.webp?updatedAt=1709253896441"
                alt="Beach Celso Ramos"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
