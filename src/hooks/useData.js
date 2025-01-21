import React, { useEffect, useState } from "react";
import apiClient from "../utils/api-client.js";

const useData = (endpoint, customParams, deps) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);
      apiClient
        .get(endpoint, customParams)
        .then((res) => {
          if (
            endpoint === "/products" &&
            data &&
            data.products &&
            customParams.params.page !== 1
          ) {
            setData((prev) => ({
              ...prev,
              products: [...prev.products, ...res.data.products],
            }));
          } else {
            setData(res.data);
          }
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);

          setIsLoading(false);
        });
    },
    deps ? deps : []
  );

  return { data, error, isLoading };
};

export default useData;
