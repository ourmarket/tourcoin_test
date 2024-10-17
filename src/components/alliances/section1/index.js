"use client";
import { Loading } from "@/components/loader/Loading";
import { Section1 } from "./Section1";

import { useFetchApi } from "@/hooks/useFetchApi";

export const Section1_index = () => {
  const { data, loading, error } = useFetchApi(
    `${process.env.NEXT_PUBLIC_API_URL}/alliances`
  );

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
