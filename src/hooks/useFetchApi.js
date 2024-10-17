/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export const useFetchApi = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
