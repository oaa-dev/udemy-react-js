import React from "react";
import "./Pagination.css";

const Pagination = ({ totalPosts, postPerPage, onClick, currentPage }) => {
  let pages = [];

  for (let index = 1; index <= Math.ceil(totalPosts / postPerPage); index++) {
    pages.push(index);
  }
  return (
    <>
      {pages.length > 1 && (
        <ul className="pagination">
          {pages.map((page) => (
            <li key={page}>
              <button
                className={
                  parseInt(currentPage) === page
                    ? "pagination_button active"
                    : "pagination_button"
                }
                onClick={() => onClick(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Pagination;
