import { IoMdClose } from "react-icons/io";
import { useRouter, usePathname } from "../../navigation";
import { motion } from "framer-motion";
import { Link } from "../../navigation";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import styles from "./navbar.module.css";
import { useState } from "react";

export const Menu = ({ translate, setMobile }) => {
  const {
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
  } = translate;
  const [menu, setMenu] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (language) => {
    router.push(pathname, { locale: language });
  };
  return (
    <motion.div
      className={styles.menu_mobile}
      initial={{ opacity: 1, y: "-100%" }}
      animate={{
        opacity: 1,
        y: "0%",
        transition: { duration: 0.4 },
      }}
      exit={{ y: "-110%" }}
    >
      <div className={styles.btn_close} onClick={() => setMobile(false)}>
        <IoMdClose size={"3rem"} />
      </div>
      <div
        className={
          !menu
            ? styles.menu_mobile_container
            : styles.menu_mobile_container_active
        }
      >
        <ul className={styles.menu_mobile_links}>
          <li>
            <Link href="/#home" onClick={() => setMobile(false)}>
              {Home}
            </Link>
          </li>
          <li>
            <Link href="/tourcoin" onClick={() => setMobile(false)}>
              TourCoin
            </Link>
          </li>

          <li>
            <Link href="/alliances" onClick={() => setMobile(false)}>
              {Actives}
            </Link>
          </li>

          <li>
            <Link href="/#mission" onClick={() => setMobile(false)}>
              {About}
            </Link>
          </li>
          <li>
            <Link href="/community" onClick={() => setMobile(false)}>
              {Community}
            </Link>
          </li>
          <li>
            <Link href="/tutorials" onClick={() => setMobile(false)}>
              {buy}
            </Link>
          </li>

          <li
            onClick={() => setMenu(true)}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#f9ba32",
              position: "relative",
            }}
          >
            {Language}
            <GoChevronRight style={{ top: "3px", position: "relative" }} />
          </li>
        </ul>
        <ul className={styles.menu_mobile_links}>
          <li
            onClick={() => {
              setMobile(false);
              handleChange("es");
            }}
          >
            {Spanish}
          </li>
          <li
            onClick={() => {
              setMobile(false);
              handleChange("en");
            }}
          >
            {English}
          </li>
          <li
            onClick={() => {
              setMobile(false);
              handleChange("pt");
            }}
          >
            {Portuguese}
          </li>
          <li
            onClick={() => setMenu(false)}
            style={{
              display: "flex",
              alignItems: "center",
              color: "#f9ba32",
              position: "relative",
              left: "-7px",
            }}
          >
            <GoChevronLeft style={{ top: "2px", position: "relative" }} />
            {back}
          </li>
        </ul>
      </div>
    </motion.div>
  );
};
