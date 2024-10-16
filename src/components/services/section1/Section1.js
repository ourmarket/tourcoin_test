/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./section1.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Link } from "@/navigation";
import { es, en, pt } from "../../../../data/data";
import { useEffect, useState } from "react";

export const CardSlider = ({ images, data }) => {
  return (
    <div className={styles.card}>
      <Link href={`/services/${data.id}`}>
        <div className={styles.image_container}>
          <Swiper
            cssMode={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            navigation={true}
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
        </div>
      </Link>
      <h3>
        <strong>{data.title}</strong>
      </h3>
      <p style={{ fontWeight: 300 }}>{data.sub_title}</p>
    </div>
  );
};

export const Section1 = ({ translations }) => {
  const { small, h2, p_1 } = translations;

  const [data, setData] = useState([]);

  useEffect(() => {
    const cookies = document.cookie;

    const locale = cookies
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE"))
      .split("=")[1];

    if (locale === "es") {
      setData(es);
    }
    if (locale === "en") {
      setData(en);
    }
    if (locale === "pt") {
      setData(pt);
    }
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.limit}>
        <small>{small}</small>
        <h2>{h2}</h2>
        <p className={styles.sub_title}>{p_1}</p>

        <div className={styles.cards_container}>
          {data.map((item) => {
            return (
              <CardSlider key={item.id} images={item.images} data={item} />
            );
          })}
        </div>
      </div>
    </section>
  );
};
