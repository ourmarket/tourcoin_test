/* eslint-disable @next/next/no-img-element */
"use client";
import { AiOutlineUnorderedList } from "react-icons/ai";
import styles from "./bannerSearch.module.css";
import { BsCompass, BsStar } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineDinnerDining } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const BannerSearch = ({ translations }) => {
  const { li_1, li_2, li_3, li_4, li_5 } = translations;

  const images = [
    "https://res.cloudinary.com/djbiwx3ma/image/upload/v1729116181/tourCoin/rgh7wb4ek7srhoeo1xlm.webp",
    "https://res.cloudinary.com/djbiwx3ma/image/upload/v1729116181/tourCoin/rgh7wb4ek7srhoeo1xlm.webp",
  ];
  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Que quieres hacer?</h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <AiOutlineUnorderedList size={30} /> {li_1}
            </li>
            <li>
              <BsStar size={30} /> {li_5}
            </li>
            <li>
              <IoHomeOutline size={30} /> {li_2}
            </li>
            <li>
              <BsCompass size={30} /> {li_3}
            </li>
            <li>
              <MdOutlineDinnerDining size={30} /> {li_4}
            </li>
          </ul>
        </nav>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Lugares donde ir, cosas que hacer..."
          />
        </div>
        <div className={styles.banner}>
          <img
            src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/WhatsApp%20Image%202024-10-18%20at%2013.07.25_4irAgbCf6.jpeg?updatedAt=1729267692690"
            alt="tourCoin"
          />
        </div>
      </section>
      <section className={styles.container2}>
        <div className={styles.limit}>
          <small className={styles.small}>Recomendaciones</small>
          <h2 className={styles.h2}>Lugares recomendados</h2>
          <p className={styles.sub_title}>
            Estos son los lugares que te recomendamos desde TourCoin.
          </p>

          <div className={styles.cards_container}>
            <Swiper
              spaceBetween={15}
              slidesPerView={3}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                reverseDirection: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <div className={styles.card}>
                  <Link href={`/alliances/1`}>
                    <div className={styles.image_container}>
                      <Swiper
                        cssMode={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        /*  navigation={!isMobile} */
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
                    <strong>Paseo a Caballo</strong>
                  </h3>
                  <p style={{ fontWeight: 300, textAlign: "center" }}>
                    Descubre la Naturaleza a Caballo con Ecoturismo
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card}>
                  <Link href={`/alliances/1`}>
                    <div className={styles.image_container}>
                      <Swiper
                        cssMode={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        /*  navigation={!isMobile} */
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
                    <strong>Paseo a Caballo</strong>
                  </h3>
                  <p style={{ fontWeight: 300, textAlign: "center" }}>
                    Descubre la Naturaleza a Caballo con Ecoturismo
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card}>
                  <Link href={`/alliances/1`}>
                    <div className={styles.image_container}>
                      <Swiper
                        cssMode={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        /*  navigation={!isMobile} */
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
                    <strong>Paseo a Caballo</strong>
                  </h3>
                  <p style={{ fontWeight: 300, textAlign: "center" }}>
                    Descubre la Naturaleza a Caballo con Ecoturismo
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card}>
                  <Link href={`/alliances/1`}>
                    <div className={styles.image_container}>
                      <Swiper
                        cssMode={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        /*  navigation={!isMobile} */
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
                    <strong>Paseo a Caballo</strong>
                  </h3>
                  <p style={{ fontWeight: 300, textAlign: "center" }}>
                    Descubre la Naturaleza a Caballo con Ecoturismo
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSearch;
