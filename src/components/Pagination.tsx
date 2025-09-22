import type { PaginationProps } from "../interfaces/types";

const Pagination = ({
  page,
  setPage,
  totalItems,
  itemsPerPage = 10,
  paginationPages,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="flex items-center justify-end mt-4">
      <div className="flex items-center gap-2 w-[244px] h-[28px]">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={page <= 1}
          className={`p-1 rounded transition-colors w-7 h-7 flex items-center justify-center ${
            page <= 1
              ? "text-gray-300 dark:text-gray-600 cursor-not-allowed"
              : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          <span className="text-sm">‹</span>
        </button>

        {paginationPages.map((pageNo) => (
          <button
            key={pageNo}
            onClick={() => setPage(pageNo)}
            className={`w-7 h-7 rounded transition-colors flex items-center justify-center text-[14px] ${
              pageNo === page
                ? "bg-[#1C1C1C0D] dark:bg-gray-600"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {pageNo}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={page >= totalPages}
          className={`p-1 rounded transition-colors w-7 h-7 flex items-center justify-center ${
            page >= totalPages
              ? "text-gray-300 dark:text-gray-600 cursor-not-allowed"
              : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
          }`}
        >
          <span className="text-sm">›</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;