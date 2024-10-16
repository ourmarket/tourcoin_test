/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useFetch = (address) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const url = `https://api.dexscreener.com/latest/dex/tokens/${
    address || "0x34B08ccf9620aEd6d158BaE65e85Bb3bBe2c384A"
  }`;

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
