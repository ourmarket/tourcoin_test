"use client";
import { IoHomeOutline } from "react-icons/io5";
import Styles from "./navbarServices.module.css";
import { MdOutlineDinnerDining } from "react-icons/md";
import { BsCompass } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setCategoryAll } from "@/redux/mapSlice";

export const NavbarServices = ({ translations }) => {
  const dispatch = useDispatch();
  const { li_1, li_2, li_3, li_4, li_5 } = translations;

  return (
    <div className={Styles.container}>
      <ul>
        <li onClick={() => dispatch(setCategoryAll())}>
          <AiOutlineUnorderedList size={30} /> {li_1}
        </li>
        <li onClick={() => dispatch(setCategory({ category: "activities" }))}>
          <BsStar size={30} /> {li_5}
        </li>
        <li
          onClick={() => dispatch(setCategory({ category: "accommodation" }))}
        >
          <IoHomeOutline size={30} /> {li_2}
        </li>
        <li onClick={() => dispatch(setCategory({ category: "services" }))}>
          <BsCompass size={30} /> {li_3}
        </li>
        <li onClick={() => dispatch(setCategory({ category: "gastronomy" }))}>
          <MdOutlineDinnerDining size={30} /> {li_4}
        </li>
      </ul>
    </div>
  );
};
