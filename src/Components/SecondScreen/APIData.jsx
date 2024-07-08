import React, { useEffect, useState } from "react";

const APIData = ({ search, location }) => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [activeData, setActiveData] = useState(false);
  const [page, setPage] = useState(1);
  const itemsperPage = 10;

  let API = "https://dev.carzup.in/api/pricelist/test-mock";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch(API);
        const result = await response.json();
        setData(result.data);
        setFilterData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleactiveData = () => {
    setActiveData((preActive) => !preActive);
  };

  const handleSwitchChange = (index) => {
    const updatedData = data.filter((item) => {
      if (item === index) {
        item.active = !item.active;
        return true;
      }
      return true;
    });
    setFilterData(updatedData);
  };

  const startIndex = (page - 1) * itemsperPage;
  const endIndex = startIndex + itemsperPage;
  const totalPage = Math.ceil(filterData.length / itemsperPage);
  const currentPage = filterData.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage);
  };

  useEffect(() => {
    setPage(1);
  }, [search, location, activeData]);

  useEffect(() => {
    const filterdata = () => {
      let newData = data;
      if (search.trim()) {
        newData = newData.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase().trim())
        );
      }

      if (location.trim()) {
        newData = newData.filter((item) => item.location === location);
      }

      if (activeData) {
        newData = newData.filter((item) => {
          if (activeData) {
            if (item.active === true) {
              return true;
            } else {
              return false;
            }
          }
          return true;
        });
      }

      setFilterData(newData);
    };
    filterdata();
  }, [search, location, activeData, data]);

  return {
    data,
    isLoading,
    isError,
    handleSwitchChange,
    handleactiveData,
    activeData,
    currentPage,
    setPage,
    page,
    totalPage,
    itemsperPage,
    handlePageChange,
    startIndex,
    endIndex,
  };
};

export default APIData;
