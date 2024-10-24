"use client";
import { IoHomeOutline } from "react-icons/io5";
import Styles from "./navbarServices.module.css";
import { MdOutlineDinnerDining } from "react-icons/md";
import { BsCompass } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "@/navigation";

export const NavbarServices = ({ translations }) => {
  const { li_1, li_2, li_3, li_4, li_5, li_6 } = translations;

  return (
    <div className={Styles.container}>
      <ul>
        <li>
          <Link href="/alliances?category=all">
            <AiOutlineUnorderedList size={30} /> {li_1}
          </Link>
        </li>
        <li>
          <Link href="/alliances?category=accept_TRC">
            <RiMoneyDollarCircleLine size={30} /> {li_6}
          </Link>
        </li>
        <li>
          <Link href="/alliances?category=activities">
            <BsStar size={30} /> {li_5}
          </Link>
        </li>
        <li>
          <Link href="/alliances?category=accommodation">
            <IoHomeOutline size={30} /> {li_2}
          </Link>
        </li>
        <li>
          <Link href="/alliances?category=services">
            <BsCompass size={30} /> {li_3}
          </Link>
        </li>
        <li>
          <Link href="/alliances?category=gastronomy">
            <MdOutlineDinnerDining size={30} /> {li_4}
          </Link>
        </li>
      </ul>
    </div>
  );
};
