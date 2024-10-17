"use client";
import { Loading } from "@/components/loader/Loading";
import { useFetchApi } from "@/hooks/useFetchApi";
import { clearAlliances } from "@/redux/mapSlice";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Details } from "./Details";

const DetailsFetch = ({ translations }) => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  const {
    data: apiData,
    loading,
    error,
  } = useFetchApi(`${process.env.NEXT_PUBLIC_API_URL}/alliances/${slug}`);

  useEffect(() => {
    const cookies = document.cookie;

    const locale = cookies
      .split("; ")
      .find((row) => row.startsWith("NEXT_LOCALE"))
      .split("=")[1];

    if (locale === "es") {
      const dataMap = {
        ...apiData,
        title: apiData?.localization.es.title,
        sub_title: apiData?.localization.es.sub_title,
        details: apiData?.localization.es.details,
        service_1: apiData?.localization.es.service_1,
        service_1_details: apiData?.localization.es.service_1_details,
        service_2: apiData?.localization.es.service_2,
        service_2_details: apiData?.localization.es.service_2_details,
      };
      setData(dataMap);
    }
    if (locale === "en") {
      const dataMap = {
        ...apiData,
        title: apiData?.localization.en.title,
        sub_title: apiData?.localization.en.sub_title,
        details: apiData?.localization.en.details,
        service_1: apiData?.localization.en.service_1,
        service_1_details: apiData?.localization.en.service_1_details,
        service_2: apiData?.localization.en.service_2,
        service_2_details: apiData?.localization.en.service_2_details,
      };
      setData(dataMap);
    }
    if (locale === "pt") {
      const dataMap = {
        ...apiData,
        title: apiData?.localization.pt.title,
        sub_title: apiData?.localization.pt.sub_title,
        details: apiData?.localization.pt.details,
        service_1: apiData?.localization.pt.service_1,
        service_1_details: apiData?.localization.pt.service_1_details,
        service_2: apiData?.localization.pt.service_2,
        service_2_details: apiData?.localization.pt.service_2_details,
      };
      setData(dataMap);
    }
  }, [apiData]);

  useEffect(() => {
    dispatch(clearAlliances());
  }, [dispatch]);

  return (
    <>
      {loading && <Loading />}
      {error && (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ color: "#ddd" }}>⚠️ An error has occurred.</div>
        </div>
      )}
      {apiData && data && data.images && (
        <Details data={data} translations={translations} />
      )}
    </>
  );
};

export default DetailsFetch;
