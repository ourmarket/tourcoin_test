"use client";
import { Loading } from "@/components/loader/Loading";
import { Section1 } from "./Section1";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const Section1_index = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/alliances?category=${category}`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [category]);

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
      {data && <Section1 dataApi={data} />}
    </>
  );
};
