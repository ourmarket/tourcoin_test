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
import { useDispatch } from "react-redux";
import { setCategory, setCategoryAll, setCategoryTRC } from "@/redux/mapSlice";

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
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          698: {
            slidesPerView: 2,
          },
          865: {
            slidesPerView: 2,
          },
          1010: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 3,
          },
          1700: {
            slidesPerView: 3,
          },
        }}
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
                        keyboard={false}
                        loop={true}
                        modules={[Navigation]}
                        className="mySwiper"
                      >
                        {item.images.map((image, index) => (
                          <SwiperSlide key={index}>
                            <div className={styles.image_container}>
                              <img
                                src={`${image}`}
                                alt="department"
                                style={{
                                  display: "block",
                                  objectFit: "cover",
                                  width: "100%",
                                  borderRadius: "5px",
                                }}
                              />
                            </div>
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
  const {
    li_1,
    li_2,
    li_3,
    li_4,
    li_5,
    li_6,
    banner_1_1400,
    banner_2_1400,
    banner_1_530,
    banner_2_530,
    title,
    placeholder,
    button,
    recommendation,
    small_1,
    title_2,
    p_1,
  } = translations;

  const dispatch = useDispatch();

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
        <div className={styles.limit}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.div1}>
            <div className={styles.div2}>
              <Link
                href="/alliances?category=all"
                onClick={() => dispatch(setCategoryAll())}
              >
                <AiOutlineUnorderedList size={30} /> {li_1}
              </Link>
            </div>
            <div className={styles.div2}>
              <Link
                href="/alliances?category=accept_TRC"
                onClick={() => dispatch(setCategoryTRC())}
              >
                <RiMoneyDollarCircleLine size={30} /> {li_6}
              </Link>
            </div>
            <div className={styles.div2}>
              <Link
                href="/alliances?category=activities"
                onClick={() =>
                  dispatch(setCategory({ category: "activities" }))
                }
              >
                <BsStar size={30} /> {li_5}
              </Link>
            </div>
            <div className={styles.div2}>
              <Link
                href="/alliances?category=accommodation"
                onClick={() =>
                  dispatch(setCategory({ category: "accommodation" }))
                }
              >
                <IoHomeOutline size={30} /> {li_2}
              </Link>
            </div>
            <div className={styles.div2}>
              <Link
                href="/alliances?category=services"
                onClick={() => dispatch(setCategory({ category: "services" }))}
              >
                <BsCompass size={30} /> {li_3}
              </Link>
            </div>
            <div className={styles.div2}>
              <Link
                href="/alliances?category=gastronomy"
                onClick={() =>
                  dispatch(setCategory({ category: "gastronomy" }))
                }
              >
                <MdOutlineDinnerDining size={30} /> {li_4}
              </Link>
            </div>
          </div>

          <div className={styles.search}>
            <input
              type="text"
              placeholder={placeholder}
              onClick={() => setSearchActive(true)}
            />
            {searchActive && (
              <>
                <div
                  className={styles.overlay}
                  onClick={() => setSearchActive(false)}
                ></div>
                <BannerSearchOverlay
                  outstanding={data}
                  locale={locale}
                  setSearchActive={setSearchActive}
                  translations={translations}
                />
              </>
            )}
          </div>
          <div className={styles.search_mobile}>
            <div className={styles.search_mobile_input}>
              <input
                type="text"
                placeholder={`🔎 ${placeholder}`}
                onClick={() => setSearchActive(true)}
              />
              <button
                className={styles.btn_search}
                onClick={() => setSearchActive(true)}
              >
                {button}
              </button>
            </div>
            {searchActive && (
              <>
                <div
                  className={styles.overlay}
                  onClick={() => setSearchActive(false)}
                ></div>
                <BannerSearchOverlay
                  outstanding={data}
                  locale={locale}
                  setSearchActive={setSearchActive}
                  translations={translations}
                />
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
                <div className={styles.banner_img}>
                  <img
                    src={
                      "https://ik.imagekit.io/mrprwema7/Tour%20Coin/banners/Agregar%20un%20t%C3%ADtulo%20(1)_hmO1nXY5w.webp?updatedAt=1730982493151"
                    }
                    alt="tourCoin"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.banner_img}>
                  <img src={banner_1_1400} alt="tourCoin" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.banner_img}>
                  <img src={banner_2_1400} alt="tourCoin" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.banner_mobile}>
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
                <div className={styles.banner_img}>
                  <img
                    src={
                      "https://ik.imagekit.io/mrprwema7/Tour%20Coin/banners/Tu%20pr%C3%B3xima%20aventura%20empieza%20aqu%C3%AD%20(2)_K1zmfEJKZ.webp?updatedAt=1730983961674"
                    }
                    alt="tourCoin"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.banner_img}>
                  <img src={banner_1_530} alt="tourCoin" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.banner_img}>
                  <img src={banner_2_530} alt="tourCoin" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className={styles.container2}>
        <div className={styles.limit}>
          <small className={styles.small}>{small_1}</small>
          <h2 className={styles.h2}>{title_2}</h2>
          <p className={styles.sub_title}>{p_1}</p>

          <CardsSlider data={data} loading={loading} error={error} />
        </div>
      </section>
    </>
  );
};

export default BannerSearch;
