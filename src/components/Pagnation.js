import React from "react";

const Pagnation = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagnation-container">
      <div className="pagnation">
        {pages.map((page, index) => {
          return (
            <button
              onClick={() => setCurrentPage(page)}
              key={index}
              className={page === currentPage ? "active" : ""}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagnation;
