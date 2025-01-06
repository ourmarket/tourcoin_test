"use client";
import Image from "next/image";
import { Link } from "../../navigation";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import LanguageChangerReload from "../languageChanger/LanguageChangerReload";
import Marquee from "../marquee/Marquee";
import styles from "./navbar.module.css";
import { MenuReload } from "./MenuReload";
import { FaUserCircle } from "react-icons/fa";

export const Navbar = ({
  Home,
  profile,
  About,
  Actives,
  Language,
  Spanish,
  English,
  Portuguese,
  back,
  buy,
  Community,
  volume,
  liquidity,
  marquee,
}) => {
  const [mobile, setMobile] = useState(false);

  const translate = {
    Home,
    profile,
    About,
    Actives,
    Language,
    Spanish,
    English,
    Portuguese,
    back,
    buy,
    Community,
    volume,
    liquidity,
  };
  const [isVisible, setIsVisible] = useState(marquee);

  return (
    <header>
      <AnimatePresence>
        {mobile && <MenuReload translate={translate} setMobile={setMobile} />}
      </AnimatePresence>
      {isVisible && (
        <Marquee setIsVisible={setIsVisible} translate={translate} />
      )}

      <motion.nav
        className={styles.navbar}
        style={{ top: `${isVisible ? "40px" : "0px"}` }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,

          transition: { duration: 0.5 },
        }}
      >
        <div className={styles.container}>
          <div className={styles.links_mobile} onClick={() => setMobile(true)}>
            <IoMenu size={"2.5rem"} color={"#f9ba32"} />
          </div>
          <div className={styles.center}>
            <Link href={"/"}>
              <Image
                className={styles.logo}
                src="/logo_final.png"
                alt="Logo"
                width={190}
                height={50}
                priority
              />
            </Link>
          </div>
          <div>
            <ul className={styles.links}>
              <li>
                <Link href="/#home" onClick={() => setMobile(false)}>
                  {Home}
                </Link>
              </li>
              <li>
                <Link href="/tourCoin" onClick={() => setMobile(false)}>
                  TourCoin
                </Link>
              </li>

              <li>
                <Link
                  href="/alliances?category=all"
                  onClick={() => setMobile(false)}
                >
                  {Actives}
                </Link>
              </li>

              <li>
                <Link href="/community" onClick={() => setMobile(false)}>
                  {Community}
                </Link>
              </li>

              <li>
                <LanguageChangerReload language={Language} />
              </li>
            </ul>
          </div>
          <div>
            <button className={styles.btn_buy}>
              <Link href="/profile">{profile}</Link>
            </button>
          </div>
          <div className={styles.links_mobile}>
            <Link href="/profile">
              <FaUserCircle size={"1.9rem"} color={"#f9ba32"} />
            </Link>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};
