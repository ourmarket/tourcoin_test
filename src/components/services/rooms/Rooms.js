/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useParams } from "next/navigation";
import styles from "./rooms.module.css";
import { es, en, pt } from "../../../../data/data";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";

const CardSlider = ({ images }) => {
  return (
    <Swiper
      cssMode={true}
      loop={true}
      modules={[Navigation, Pagination, Mousewheel]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={`${image}`}
            alt="department"
            style={{ display: "block", objectFit: "cover" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const Rooms = ({ translations }) => {
  const { slug } = useParams();

  const [data, setData] = useState(en.find((item) => item.id === slug));

  useEffect(() => {
    const cookies = document.cookie;

    const locale = cookies
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE"))
      .split("=")[1];

    if (locale === "es") {
      setData(es.find((item) => item.id === slug));
    }
    if (locale === "en") {
      setData(en.find((item) => item.id === slug));
    }
    if (locale === "pt") {
      setData(pt.find((item) => item.id === slug));
    }
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.limit}>
        <h1>{data.title}</h1>
        <div className={styles.grid_container}>
          <div className={styles.photo1}>
            <img src={data.images[0]} alt="department" />
          </div>
          <div className={styles.photo2}>
            <img src={data.images[1]} alt="department" />
          </div>
          <div className={styles.photo3}>
            <img src={data.images[2]} alt="department" />
          </div>
          <div className={styles.photo4}>
            <img src={data.images[3]} alt="department" />
          </div>
          <div className={styles.photo5}>
            <img src={data.images[4]} alt="department" />
          </div>
        </div>
        <div className={styles.slider}>
          <CardSlider images={data.images} />
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
            <h2>{data.sub_title}</h2>
            <p>{data.details}</p>
            <div className={styles.divider}>
              <p style={{ marginBottom: "5px" }}>
                <strong>{data.service_1}</strong>
              </p>
              <p>{data.service_1_1}</p>
              <br />
              <p style={{ marginBottom: "5px" }}>
                <strong>{data.service_2}</strong>
              </p>
              <p>{data.service_2_1}</p>
              <br />
            </div>
          </div>
          <div className={styles.right}>
            <h3>{translations.consult}</h3>
            <a href={data.link_whatsapp} target="_blank">
              <button className={styles.btn}>WhatsApp</button>
            </a>
            <a href={data.link_airbnb} target="_blank">
              <button className={styles.btn}>{translations.airbnb}</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
