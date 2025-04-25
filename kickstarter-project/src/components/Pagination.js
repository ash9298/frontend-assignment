import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onPrevClick,
  onNextClick,
  onPageNumClick,
}) => {
  if (totalPages <= 1) {
    return null;
  }
  const getDisplayPages = () => {
    const displayRange = 3;
    let pages = [];
    let startPage = Math.max(1, currentPage - displayRange);
    let endPage = Math.min(totalPages, currentPage + displayRange);

    if (totalPages <= 2 * displayRange + 1) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= displayRange) {
        startPage = 1;
        endPage = 2 * displayRange + 1;
      } else if (currentPage >= totalPages - displayRange) {
        startPage = totalPages - 2 * displayRange;
        endPage = totalPages;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };
  const displayPages = getDisplayPages();
  return (
    <nav
      className="pagination-controls"
      aria-label="Project page navigation"
      role="navigation"
    >
      <button
        type="button"
        id="prev-button"
        onClick={onPrevClick}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        Previous
      </button>
      {displayPages.map((page) => (
        <button
          type="button"
          key={page}
          onClick={() => onPageNumClick(page)}
          className={`${currentPage === page ? "active" : ""}`}
          aria-label={`Go to page ${page}`}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        id="next-button"
        onClick={onNextClick}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
