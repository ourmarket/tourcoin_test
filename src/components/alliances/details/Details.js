/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useParams } from "next/navigation";
import styles from "./details.module.css";
import { es, en, pt } from "../../../../data/data";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import { MapProvider } from "../googleMap/MapProvider";
import { Maps } from "../googleMap/Maps";
import { useDispatch, useSelector } from "react-redux";
import { clearAlliances } from "@/redux/mapSlice";
import axios from "axios";
import { decimalLimit } from "@/utils/decimalLimit";
import { useGetBalance } from "@/hooks/useGetBalance";

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
  );
};
const OtherCategory = ({ data, translations }) => {
  const leftDetailRef = useRef(null);
  const [mapContainerHeight, setMapContainerHeight] = useState("442px"); // Default height

  useEffect(() => {
    console.log(leftDetailRef);
    console.log(leftDetailRef.current);
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

  console.log(mapContainerHeight);

  // api dolar crypto https://dolarapi.com/v1/dolares/cripto

  useGetBalance();
  const { amountTRC, TRCPrice } = useSelector((state) => state.balance);

  const [quantityTRC, setQuantityTRC] = useState(0);
  const [quantityLocal, setQuantityLocal] = useState(undefined);
  const [valueARS, setValueARS] = useState(0);
  const [valueBRL, setValueBRL] = useState(0);
  const [localCurrency, setLocalCurrency] = useState("ARS");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://dolarapi.com/v1/dolares/cripto"
      );

      setValueARS(data.compra);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=brl"
      );

      setValueBRL(data.tether.brl);
    };
    getData();
  }, []);

  const handleValueChange = (newValue) => {
    if (localCurrency === "ARS") {
      setQuantityLocal(newValue);
      setQuantityTRC(decimalLimit(newValue / valueARS / TRCPrice));
    }
    if (localCurrency === "BRL") {
      setQuantityLocal(newValue);
      setQuantityTRC(decimalLimit(newValue / valueBRL / TRCPrice));
    }
    if (localCurrency === "USD") {
      setQuantityLocal(newValue);
      setQuantityTRC(decimalLimit(newValue / TRCPrice));
    }
  };
  const handleCurrencyChange = (newValue) => {
    if (newValue === "ARS") {
      setLocalCurrency(newValue);
      setQuantityTRC(decimalLimit(quantityLocal / valueARS / TRCPrice));
    }
    if (newValue === "BRL") {
      setLocalCurrency(newValue);
      setQuantityTRC(decimalLimit(quantityLocal / valueBRL / TRCPrice));
    }
    if (newValue === "USD") {
      setLocalCurrency(newValue);
      setQuantityTRC(decimalLimit(quantityLocal / TRCPrice));
    }
  };

  return (
    <MapProvider>
      <div className={styles.limit}>
        <h1>{data.title}</h1>
        <div className={styles.flex_container}>
          <div className={styles.left_detail} ref={leftDetailRef}>
            <img src={data.images[0]} alt="department" />
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
            <div className={styles.payment}>
              <h3>Pagar</h3>
              <p>
                Desde aquí puedes pagar a Gráfica Net Print con tus tokens TRC
              </p>

              <div className={styles.input}>
                <label>Moneda Local</label>
                <select
                  onChange={(e) => handleCurrencyChange(e.target.value)}
                  value={localCurrency}
                >
                  <option value="ARS">ARS</option>
                  <option value="BRL">BRL</option>
                  <option value="USD">USD</option>
                </select>
              </div>
              <div className={styles.input}>
                <label>Monto en moneda local</label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={quantityLocal}
                  onChange={(e) => handleValueChange(e.target.value)}
                />
              </div>

              <div className={styles.row}>
                <div className={styles.row_50}>
                  <label>Cantidad a pagar</label>
                  <input
                    disabled={true}
                    type="text"
                    placeholder="0.00"
                    value={`${quantityTRC} TRC`}
                  />
                </div>
                <div className={styles.row_50}>
                  <label>Disponible</label>
                  <input
                    disabled={true}
                    type="text"
                    placeholder="0.00"
                    value={`${amountTRC} TRC`}
                  />
                </div>
              </div>

              <button className={styles.btn}>Pagar</button>
            </div>
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
          </div>
        </div>
        <div className={styles.map_mobile}>
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

export const Details = ({ translations }) => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const [data, setData] = useState(es.find((item) => item.id === slug));

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

  useEffect(() => {
    dispatch(clearAlliances());
  }, []);

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
