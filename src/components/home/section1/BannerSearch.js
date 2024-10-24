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

import "swiper/css/pagination";
import { useFetchApi } from "@/hooks/useFetchApi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import CardSkeleton from "@/components/loader/CardSkeleton";
import { Link } from "@/navigation";
import { useState } from "react";
import BannerSearchOverlay from "./BannerSearchOverlay";

const CardsSlider = ({ data, loading, error }) => {
  const cookies = document.cookie;

  const locale = cookies
    .split("; ")
    .find((row) => row.startsWith("NEXT_LOCALE"))
    .split("=")[1];

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  }

  return (
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
        {data &&
          data.map((item) => {
            return (
              <SwiperSlide key={item.allianceId}>
                <div className={styles.card}>
                  <Link href={`/alliances/${item.allianceId}`}>
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
                        {item.images.map((image, index) => (
                          <SwiperSlide key={index}>
                            <img
                              src={`${image}`}
                              alt="department"
                              style={{
                                display: "block",
                                objectFit: "cover",
                              }}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </Link>
                  <h3 style={{ textAlign: "center" }}>
                    <strong>{item.localization[locale].title}</strong>
                  </h3>
                  <p style={{ fontWeight: 300, textAlign: "center" }}>
                    {item.localization[locale].sub_title}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

const BannerSearch = ({ translations }) => {
  const { li_1, li_2, li_3, li_4, li_5, li_6 } = translations;

  const { data, loading, error } = useFetchApi(
    `${process.env.NEXT_PUBLIC_API_URL}/alliances/outstanding`
  );

  const [searchActive, setSearchActive] = useState(false);

  const cookies = document.cookie;

  const locale = cookies
    .split("; ")
    .find((row) => row.startsWith("NEXT_LOCALE"))
    .split("=")[1];

  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Que quieres hacer?</h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                href="/alliances?category=all"
                onClick={() => dispatch(setCategoryAll())}
              >
                <AiOutlineUnorderedList size={30} /> {li_1}
              </Link>
            </li>
            <li>
              <Link
                href="/alliances?category=accept_TRC"
                onClick={() => dispatch(setCategoryTRC())}
              >
                <RiMoneyDollarCircleLine size={30} /> {li_6}
              </Link>
            </li>
            <li>
              <Link
                href="/alliances?category=activities"
                onClick={() =>
                  dispatch(setCategory({ category: "activities" }))
                }
              >
                <BsStar size={30} /> {li_5}
              </Link>
            </li>
            <li>
              <Link
                href="/alliances?category=accommodation"
                onClick={() =>
                  dispatch(setCategory({ category: "accommodation" }))
                }
              >
                <IoHomeOutline size={30} /> {li_2}
              </Link>
            </li>
            <li>
              <Link
                href="/alliances?category=services"
                onClick={() => dispatch(setCategory({ category: "services" }))}
              >
                <BsCompass size={30} /> {li_3}
              </Link>
            </li>
            <li>
              <Link
                href="/alliances?category=gastronomy"
                onClick={() =>
                  dispatch(setCategory({ category: "gastronomy" }))
                }
              >
                <MdOutlineDinnerDining size={30} /> {li_4}
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Lugares donde ir, cosas que hacer..."
            onClick={() => setSearchActive(true)}
          />
          {searchActive && (
            <>
              <div
                className={styles.overlay}
                onClick={() => setSearchActive(false)}
              ></div>
              <BannerSearchOverlay outstanding={data} locale={locale} />
            </>
          )}
        </div>
        <div className={styles.banner}>
          <Swiper
            spaceBetween={1}
            slidesPerView={1}
            loop={true}
            pagination={true}
            navigation={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            modules={[Autoplay, Navigation, Pagination, Mousewheel]}
          >
            <SwiperSlide>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/WhatsApp%20Image%202024-10-18%20at%2013.07.25_4irAgbCf6.jpeg?updatedAt=1729267692690"
                alt="tourCoin"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/WhatsApp%20Image%202024-10-18%20at%2013.07.25_4irAgbCf6.jpeg?updatedAt=1729267692690"
                alt="tourCoin"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://ik.imagekit.io/mrprwema7/Tour%20Coin/WhatsApp%20Image%202024-10-18%20at%2013.07.25_4irAgbCf6.jpeg?updatedAt=1729267692690"
                alt="tourCoin"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className={styles.container2}>
        <div className={styles.limit}>
          <small className={styles.small}>Recomendaciones</small>
          <h2 className={styles.h2}>Lugares recomendados</h2>
          <p className={styles.sub_title}>
            Estos son los lugares que te recomendamos desde TourCoin.
          </p>

          <CardsSlider data={data} loading={loading} error={error} />
        </div>
      </section>
    </>
  );
};

export default BannerSearch;
