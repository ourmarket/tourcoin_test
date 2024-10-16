"use client";
import { IoHomeOutline } from "react-icons/io5";
import Styles from "./navbarServices.module.css";
import { MdOutlineDinnerDining } from "react-icons/md";
import { BsCompass } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setCategory, setCategoryAll } from "@/redux/mapSlice";
import { es } from "../../../../data/data";

export const NavbarServices = ({ translations }) => {
  const dispatch = useDispatch();
  const { li_1, li_2, li_3, li_4 } = translations;

  return (
    <div className={Styles.container}>
      <ul>
        <li onClick={() => dispatch(setCategoryAll(es))}>
          <AiOutlineUnorderedList size={30} /> {li_1}
        </li>
        <li
          onClick={() =>
            dispatch(setCategory({ data: es, category: "accommodation" }))
          }
        >
          <IoHomeOutline size={30} /> {li_2}
        </li>
        <li
          onClick={() =>
            dispatch(setCategory({ data: es, category: "services" }))
          }
        >
          <BsCompass size={30} /> {li_3}
        </li>
        <li
          onClick={() =>
            dispatch(setCategory({ data: es, category: "gastronomy" }))
          }
        >
          <MdOutlineDinnerDining size={30} /> {li_4}
        </li>
      </ul>
    </div>
  );
};
