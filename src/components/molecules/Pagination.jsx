import React from "react";
import cn from "../../utils/cn";

const Pagination = ({
  currentPage = 1,
  totalItems = 0,
  itemsPerPage = 10,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages === 0) return null;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-10 text-sm text-gray-400 gap-4">
      <span className="font-medium">
        Show {Math.min(itemsPerPage, totalItems)} History of {totalItems}{" "}
        History
      </span>

      <div className="flex items-center gap-4 md:gap-6">
        <button
          disabled={currentPage === 1}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          className="text-grey text-base font-medium hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>

        <div className="flex items-center gap-4 md:gap-5">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={cn(
                "transition-colors text-base",
                currentPage === page
                  ? "text-primary font-bold"
                  : "text-gray-400 font-medium hover:text-black",
              )}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            currentPage < totalPages && onPageChange(currentPage + 1)
          }
          className="text-black font-bold text-base hover:text-primary transition-colors disabled:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
