export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageRange = 2; // Number of page numbers to display on each side of the current page
  const pageNumbers = [];

  for (
    let i = Math.max(1, currentPage - pageRange);
    i <= Math.min(currentPage + pageRange, totalPages);
    i++
  ) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div className="flex items-center justify-center gap-2 pt-8">
      <button
        className={`hover:text-white" flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-100 px-4 text-sm text-white transition hover:bg-primary hover:bg-opacity-100 ${
          currentPage <= 1 && "cursor-not-allowed opacity-50"
        }`}
        disabled={currentPage <= 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Prev
      </button>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`flex h-[40px] min-w-[40px] items-center justify-center rounded-md bg-body-color bg-opacity-100 px-4 text-sm text-white transition hover:bg-primary hover:bg-opacity-100 hover:text-white ${
            currentPage == pageNumber && "bg-primary bg-opacity-100 text-white"
          } `}
        >
          {pageNumber}
        </button>
      ))}

      {/* {currentPage < totalPages && ( */}
      <button
        className={`hover:text-white" flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-100 px-4 text-sm text-white transition hover:bg-primary hover:bg-opacity-100 ${
          currentPage >= totalPages && "cursor-not-allowed opacity-50"
        } `}
        disabled={currentPage >= totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
      {/* )} */}
    </div>
  );
};
