import React from "react";

interface PaginationButtonsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  pageSize: number;
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onPageSizeChange,
  pageSize,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push("...");
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers.map((pageNumber, index) =>
      pageNumber === "..." ? (
        <span key={index} className="px-3 h-8 leading-tight text-gray-500">
          {pageNumber}
        </span>
      ) : (
        <button
          key={index}
          onClick={() => onPageChange(Number(pageNumber))}
          className={`flex items-center justify-center px-3 h-8 leading-tight ${
            currentPage === pageNumber
              ? "text-blue-600 border border-blue-300 bg-green-100"
              : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          }`}
        >
          {pageNumber}
        </button>
      )
    );
  };

  return (
    <div className="flex items-center justify-between py-2 w-full p-4">
      <div className="flex items-center">
        <span className="text-sm">Rows per page:</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="ml-2 rounded-md h-9 w-14rounded-md border border-green-700 bg-background px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-400"
        >
          {[5, 10, 20, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center gap-3">
        <div className="">
          <p className="text-sm">
            page {currentPage} 0f {totalPages}
          </p>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="flex items-center -space-x-px h-8 text-sm">
            <li>
              <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </button>
            </li>
            {renderPageNumbers()}
            <li>
              <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PaginationButtons;
