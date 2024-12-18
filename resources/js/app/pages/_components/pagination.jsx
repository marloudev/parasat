import React from 'react';
import Button from './button';


const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="default"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>

      {pageNumbers.map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? 'info' : 'default'}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Button>
      ))}

      <Button
        variant="default"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
