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
import { useEffect, useRef, useState } from "react";
import { MapProvider } from "../googleMap/MapProvider";
import { Maps } from "../googleMap/Maps";
import { useDispatch, useSelector } from "react-redux";
import {
  setActive,
  setAlliances,
  setClearAllianceActive,
  setInActive,
  setInActiveAll,
} from "@/redux/mapSlice";
import { AiOutlineExpand } from "react-icons/ai";
import { MdOutlineArrowBack } from "react-icons/md";
import { toggleMap } from "@/redux/uiSlice";
import { Footer } from "@/components/footer/Footer";

export const CardSlider = ({ images, data, isMobile, locale }) => {
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    dispatch(setActive(data.allianceId));
  };

  const handleMouseLeave = () => {
    dispatch(setInActive(data.allianceId));
  };

  return (
    <div className={styles.card}>
      <Link href={`/alliances/${data.allianceId}`}>
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
      <h3 style={{ textAlign: "center" }}>
        <strong>{data.localization[locale].title}</strong>
      </h3>
      <p style={{ fontWeight: 300, textAlign: "center" }}>
        {data.localization[locale].sub_title}
      </p>
    </div>
  );
};

export const Section1 = ({ dataApi }) => {
  const dispatch = useDispatch();
  const { fullMap } = useSelector((store) => store.ui);

  const { alliancesDisplay } = useSelector((store) => store.alliances);

  const [data, setData] = useState([]);

  const [isMobile, setIsMobile] = useState(false);

  const cookies = document.cookie;

  const locale = cookies
    .split("; ")
    .find((row) => row.startsWith("NEXT_LOCALE"))
    .split("=")[1];

  useEffect(() => {
    const dataMap = dataApi.map((item) => {
      return {
        ...item,
        active: false,
      };
    });
    setData(dataMap);
  }, [dataApi]);

  useEffect(() => {
    dispatch(setAlliances(data));
  }, [data, dispatch]);

  const [mapContainerHeight, setMapContainerHeight] = useState("37vh"); // Default height
  const mapHeight = useRef(null);

  useEffect(() => {
    if (mapHeight.current && !fullMap) {
      setMapContainerHeight(`${mapHeight.current.offsetHeight}px`);
    } else {
      // 100vh - 145px
      setMapContainerHeight("calc(100dvh - 145px)");
    }
  }, [fullMap]);

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

  const defaultMapZoom = fullMap ? 12 : 5;

  return (
    <>
      <section className={styles.container}>
        <div className={styles.limit}>
          {fullMap && (
            <div className={styles.map_absolute_full} ref={mapHeight}>
              {fullMap && (
                <div
                  className={styles.full_screen_icon}
                  onClick={() => {
                    dispatch(toggleMap());
                    dispatch(setClearAllianceActive());
                    dispatch(setInActiveAll());
                  }}
                >
                  <MdOutlineArrowBack size={30} />
                </div>
              )}
              {!fullMap && (
                <div
                  className={styles.full_screen_icon}
                  onClick={() => dispatch(toggleMap())}
                >
                  <AiOutlineExpand size={30} />
                </div>
              )}

              <MapProvider>
                <Maps
                  defaultMapContainerStyle={defaultMapContainerStyle}
                  defaultMapCenter={defaultMapCenter}
                  defaultMapZoom={defaultMapZoom}
                  marker={false}
                  locale={locale}
                />
              </MapProvider>
            </div>
          )}
          {!fullMap && (
            <div className={styles.wrapper}>
              <div className={styles.left}>
                {alliancesDisplay.map((item) => {
                  return (
                    <CardSlider
                      key={item.allianceId}
                      images={item.images}
                      data={item}
                      isMobile={isMobile}
                      locale={locale}
                    />
                  );
                })}
              </div>
              <div className={styles.right}>
                <div className={styles.map_absolute} ref={mapHeight}>
                  {fullMap && (
                    <div
                      className={styles.full_screen_icon}
                      onClick={() => dispatch(toggleMap())}
                    >
                      <MdOutlineArrowBack size={30} />
                    </div>
                  )}
                  {!fullMap && (
                    <div
                      className={styles.full_screen_icon}
                      onClick={() => dispatch(toggleMap())}
                    >
                      <AiOutlineExpand size={30} />
                    </div>
                  )}

                  <MapProvider>
                    <Maps
                      defaultMapContainerStyle={defaultMapContainerStyle}
                      defaultMapCenter={defaultMapCenter}
                      defaultMapZoom={defaultMapZoom}
                      marker={false}
                      locale={locale}
                    />
                  </MapProvider>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
