import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../FirstScreen/ButtonComponent";

const Pagination = ({ setPage, page, totalPage, handlePageChange }) => {
  const previousPage = () => {
    if (page > 1) {
      const newPage = page - 1;
      setPage(newPage);
      handlePageChange(newPage);
    }
  };

  const nextPage = () => {
    if (page < totalPage) {
      const newPage = page + 1;
      setPage(newPage);
      handlePageChange(newPage);
    }
  };

  const handlePageClick = (selectedPage) => {
    setPage(selectedPage);
    handlePageChange(selectedPage);
  };

  return (
    <>
      <div className="bg-white py-10 text-center dark:bg-gray-300">
        <div className="inline-flex gap-1 rounded-full border border-stroke p-3 dark:bg-gray-200">
          <ul className="flex gap-1 items-center">
            <li>
              <Button
                onClick={previousPage}
                disabled={page === 1}
                className="flex h-10 min-w-10 items-center justify-center rounded-full px-2 text-dark hover:bg-gray-200 dark:hover:bg-gray-300"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
            </li>
            <li className="flex">
              {[...Array(totalPage)].map((_, index) => (
                <Button
                  key={index}
                  disabled={page === index + 1}
                  onClick={() => handlePageClick(index + 1)}
                  className={`flex h-10 min-w-10 items-center justify-center rounded-full px-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-300  ${
                    page === index + 1
                      ? "bg-blue-500 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-black text-white"
                      : "text-black"
                  }`}
                >
                  {index + 1}
                </Button>
              ))}
            </li>
            <li>
              <Button
                onClick={nextPage}
                disabled={page === totalPage}
                className="flex h-10 min-w-10 items-center justify-center rounded-full px-2 text-black hover:bg-gray-200 dark:hover:bg-gray-300"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Pagination;
