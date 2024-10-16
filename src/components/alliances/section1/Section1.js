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
import { useEffect, useRef, useState } from "react";

import { MapProvider } from "../googleMap/MapProvider";
import { Maps } from "../googleMap/Maps";
import { useDispatch, useSelector } from "react-redux";
import { setActive, setAlliances, setInActive } from "@/redux/mapSlice";

export const CardSlider = ({ images, data, isMobile }) => {
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    dispatch(setActive(data.id));
  };

  const handleMouseLeave = () => {
    dispatch(setInActive(data.id));
  };

  return (
    <div className={styles.card}>
      <Link href={`/alliances/${data.id}`}>
        <div
          className={
            data.active && !isMobile
              ? styles.image_container_active
              : styles.image_container
          }
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            cssMode={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            navigation={!isMobile}
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

export const Section1 = () => {
  const dispatch = useDispatch();

  const { alliances } = useSelector((store) => store.alliances);

  const [data, setData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    dispatch(setAlliances(data));
  }, [data, dispatch]);

  const [mapContainerHeight, setMapContainerHeight] = useState("37vh"); // Default height
  const mapHeight = useRef(null);

  useEffect(() => {
    if (mapHeight.current) {
      setMapContainerHeight(`${mapHeight.current.offsetHeight}px`);
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Add listener
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Clean up listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const defaultMapContainerStyle = {
    width: "100%",
    height: mapContainerHeight,
    backgroundColor: "#111111",
  };

  const defaultMapCenter = {
    lat: -27.343232866677276,
    lng: -48.548254433122885,
  };

  const defaultMapZoom = 4;

  return (
    <>
      <section className={styles.container}>
        <div className={styles.limit}>
          <div className={styles.wrapper}>
            <div className={styles.left}>
              {alliances.map((item) => {
                return (
                  <CardSlider
                    key={item.id}
                    images={item.images}
                    data={item}
                    isMobile={isMobile}
                  />
                );
              })}
            </div>
            <div className={styles.right}>
              <div className={styles.map_absolute} ref={mapHeight}>
                <MapProvider>
                  <Maps
                    defaultMapContainerStyle={defaultMapContainerStyle}
                    defaultMapCenter={defaultMapCenter}
                    defaultMapZoom={defaultMapZoom}
                    marker={false}
                  />
                </MapProvider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
