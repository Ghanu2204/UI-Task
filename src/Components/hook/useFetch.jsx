import { useCallback, useEffect, useState } from "react";

const useFetch = (filters, disableAutoFetch = false) => {
  const [tableData, setTableData] = useState({
    isLoading: false,
    data: [],
    isError: false,
    errorMessage: "",
  });

  const { data, errorMessage, isError, isLoading } = tableData;

  const getData = useCallback(async () => {
    setTableData((prev) => ({
      ...prev,
      isLoading: true,
      isError: false,
      errorMessage: "",
      data: [],
    }));
    try {
      const { search, location, isActive } = filters;
      let url = "https://dev.carzup.in/api/pricelist/test-mock";
      if (isActive) {
        url += `?active=${isActive}`;
      }
      if (search) {
        {
          isActive ? (url += `&search=${search}`) : (url += `?search=${search}`);
        }
      }
      if (location) {
        {
          isActive ? (url += `&location=${location}`) : (url += `?location=${location}`);
        }
      }
      const dt = await fetch(url, {
        method: "GET",
      });
      const jsonDt = await dt.json();
      setTableData((prev) => ({
        ...prev,
        isLoading: false,
        data: Array.from(jsonDt.data),
      }));
    } catch (error) {
      setTableData((prev) => ({
        ...prev,
        isLoading: false,
        isError: false,
        errorMessage: "",
      }));
      console.log(error);
    }
  }, [filters]);

  useEffect(() => {
    if (!disableAutoFetch) {
      getData();
    }
  }, [disableAutoFetch, getData]);

  return {
    isError,
    isLoading,
    data,
    errorMessage,
    getData,
  };
};

export default useFetch;
