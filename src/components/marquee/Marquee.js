"use client";
import { useFetch } from "@/hooks/useFetch";
import styles from "./Marquee.module.css";
import { Fragment } from "react";

const Marquee = ({ setIsVisible, translate }) => {
  const { data, loading, error } = useFetch(
    "0x34B08ccf9620aEd6d158BaE65e85Bb3bBe2c384A"
  );

  const pairs = data?.pairs || [];

  const repeat = [0, 1, 2, 4, 5, 6, 7, 8, 9];

  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeText}>
        {data &&
          !loading &&
          repeat.map((item) => {
            return (
              <Fragment key={item}>
                <span>
                  {" "}
                  | TRC/WBNB
                  <span style={{ color: "greenyellow" }}>
                    {" "}
                    ${pairs[0]?.priceUsd || ""}
                  </span>{" "}
                  {translate.volume}{" "}
                  <span style={{ color: "greenyellow" }}>
                    ${pairs[0]?.volume.h24 || ""}
                  </span>{" "}
                  {translate.liquidity}{" "}
                  <span style={{ color: "greenyellow" }}>
                    ${pairs[0]?.liquidity?.usd || ""}
                  </span>
                </span>
                <span>
                  {" "}
                  | TRC/BTCB
                  <span style={{ color: "greenyellow" }}>
                    {" "}
                    ${pairs[1]?.priceUsd || ""}
                  </span>{" "}
                  {translate.volume}{" "}
                  <span style={{ color: "greenyellow" }}>
                    ${pairs[1]?.volume.h24 || ""}
                  </span>{" "}
                  {translate.liquidity}{" "}
                  <span style={{ color: "greenyellow" }}>
                    ${pairs[1]?.liquidity?.usd || ""}
                  </span>
                </span>
              </Fragment>
            );
          })}
      </div>
      <div className={styles.btn_container}>
        <button
          className={styles.closeButton}
          onClick={() => setIsVisible(false)}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Marquee;
