/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import { Link } from "@/navigation";
import styles from "./BannerSearchOverlay.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";

const BannerSearchOverlay = ({ outstanding, locale, setSearchActive }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/alliances/search?locale=${locale}&query=${input}&limit=10`
      );

      setData(data);
    };
    if (!input) {
      setData([]);
    }
    if (input) {
      getData();
    }
  }, [input]);

  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={() => setSearchActive(false)}>
        <MdOutlineArrowBack />
      </div>
      <input
        type="text"
        placeholder="Lugares donde ir, cosas que hacer..."
        id={styles.input_overlay}
        onChange={handleInputChange}
      />

      <div className={styles.cards_container}>
        {!input &&
          outstanding.map((item) => {
            return (
              <Link
                href={`/alliances/${item.allianceId}`}
                key={item.allianceId}
              >
                <div className={styles.card}>
                  <div className={styles.image_container}>
                    <img
                      src={item.images[0]}
                      alt={item.localization[locale].title}
                    />
                  </div>
                  <div className={styles.text}>
                    <h4>{item.localization[locale].title}</h4>
                    <p>Recomendación</p>
                  </div>
                </div>
              </Link>
            );
          })}
        {data &&
          data.map((item) => {
            return (
              <Link
                href={`/alliances/${item.allianceId}`}
                key={item.allianceId}
              >
                <div className={styles.card}>
                  <div className={styles.image_container}>
                    <img
                      src={item.images[0]}
                      alt={item.localization[locale].title}
                    />
                  </div>
                  <div className={styles.text}>
                    <h4>{item.localization[locale].title}</h4>
                    <p>{item.localization[locale].sub_title}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default BannerSearchOverlay;
