/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./details.module.css";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import { MapProvider } from "../googleMap/MapProvider";
import { Maps } from "../googleMap/Maps";
import PaidTrc from "./PaidTrc";

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

const Accommodation = ({ data, translations }) => {
  return (
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
            <p>{data.service_1_details}</p>
            <br />
            <p style={{ marginBottom: "5px" }}>
              <strong>{data.service_2}</strong>
            </p>
            <p>{data.service_2_details}</p>
            <br />
          </div>
        </div>
        <div className={styles.right}>
          {data?.accept_TRC && (
            <PaidTrc
              translations={translations}
              wallet={data.wallet}
              alliance={data.title}
            />
          )}
          <div className={styles.contact}>
            <h3>{translations.consult}</h3>
            <a href={data.link_whatsapp} target="_blank">
              <button className={styles.btn}>WhatsApp</button>
            </a>
            <a href={data.link_airbnb} target="_blank">
              <button className={styles.btn}>Airbnb</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const OtherCategory = ({ data, translations }) => {
  console.log(data);
  const leftDetailRef = useRef(null);
  const [mapContainerHeight, setMapContainerHeight] = useState("442px"); // Default height

  useEffect(() => {
    if (leftDetailRef.current) {
      const leftDetailHeight = leftDetailRef.current.offsetHeight;
      setMapContainerHeight(`${leftDetailHeight}px`);
    }
  }, []);

  const defaultMapContainerStyle = {
    width: "100%",
    height: mapContainerHeight,
    backgroundColor: "#111111",
  };

  const defaultMapCenter = {
    lat: data.lat,
    lng: data.lng,
  };

  const defaultMapZoom = 13;

  // api dolar crypto https://dolarapi.com/v1/dolares/cripto

  return (
    <MapProvider>
      <div className={styles.limit}>
        <h1>{data.title}</h1>
        <div className={styles.flex_container}>
          <div className={styles.left_detail} ref={leftDetailRef}>
            <img src={data?.images[0]} alt="department" />
          </div>
          <div className={styles.right_detail}>
            <Maps
              defaultMapContainerStyle={defaultMapContainerStyle}
              defaultMapCenter={defaultMapCenter}
              defaultMapZoom={defaultMapZoom}
              marker={true}
            />
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
              <p>{data.service_1_details}</p>
              <br />
              {data && data.service_2 && (
                <>
                  <p style={{ marginBottom: "5px" }}>
                    <strong>{data.service_2}</strong>
                  </p>
                  <p>{data.service_2_details}</p>
                  <br />
                </>
              )}
            </div>
          </div>
          <div className={styles.right}>
            {data?.accept_TRC && (
              <PaidTrc
                translations={translations}
                wallet={data.wallet}
                alliance={data.title}
              />
            )}
            {(data?.link_airbnb ||
              data?.link_web ||
              data?.link_tiktok ||
              data?.link_instagram ||
              data?.link_whatsapp) && (
              <div className={styles.card_right}>
                <h3>{translations.consult}</h3>
                <a href={data.link_whatsapp} target="_blank">
                  <button className={styles.btn}>WhatsApp</button>
                </a>
                <a href={data.link_instagram} target="_blank">
                  <button className={styles.btn}>Instagram</button>
                </a>
                {data?.link_tiktok && (
                  <a href={data.link_tiktok} target="_blank">
                    <button className={styles.btn}>TikTok</button>
                  </a>
                )}
                {data?.link_web && (
                  <a href={data.link_web} target="_blank">
                    <button className={styles.btn}>Web</button>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
        <div className={styles.map_mobile}>
          <h3 style={{ textAlign: "center", marginBottom: 20 }}>Ubicación</h3>
          <Maps
            defaultMapContainerStyle={defaultMapContainerStyle}
            defaultMapCenter={defaultMapCenter}
            defaultMapZoom={defaultMapZoom}
            marker={true}
          />
        </div>
      </div>
    </MapProvider>
  );
};

export const Details = ({ data, translations }) => {
  return (
    <section className={styles.container}>
      {data.category === "accommodation" && (
        <Accommodation data={data} translations={translations} />
      )}
      {data.category !== "accommodation" && (
        <OtherCategory data={data} translations={translations} />
      )}
    </section>
  );
};
