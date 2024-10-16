/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./section5.module.css";
import { useState, useEffect } from "react";

export const Section5 = ({ translations }) => {
  const { small, title, p_1, p_2, days_t, hours_t, minutes_t, seconds_t } =
    translations;
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const countDownDate = new Date("Apr 5, 2024 21:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days < 10 ? "0" + days : days);
      setHours(hours < 10 ? "0" + hours : hours);
      setMinutes(minutes < 10 ? "0" + minutes : minutes);
      setSeconds(seconds < 10 ? "0" + seconds : seconds);

      if (distance < 0) {
        clearInterval(interval);
        // Update states for Happy New Year
        setDays("00");
        setHours("00");
        setMinutes("00");
        setSeconds("00");
      }
    }, 1000);

    // Cleanup function to clear interval
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.container} id="buy">
      <div className={styles.limit}>
        <small>{small}</small>
        <h2>{title}</h2>
        <p>{p_1}</p>
        <div className={styles.counters}>
          <div className={styles.card}>
            <span className={styles.counter} id="days">
              {days}
            </span>
            <p className={styles.date}>{days_t}</p>
          </div>
          <div className={styles.card}>
            <span className={styles.counter} id="hours">
              {hours}
            </span>
            <p className={styles.date}>{hours_t}</p>
          </div>
          <div className={styles.card}>
            <span className={styles.counter} id="minutes">
              {minutes}
            </span>
            <p className={styles.date}>{minutes_t}</p>
          </div>
          <div className={styles.card}>
            <span className={styles.counter} id="seconds">
              {seconds}
            </span>
            <p className={styles.date}>{seconds_t}</p>
          </div>
        </div>
        <p>{p_2}</p>
      </div>
    </section>
  );
};
