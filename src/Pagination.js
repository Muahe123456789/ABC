import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => (
  <div className="pagination">
    <button
      className="pagination-btn"
      onClick={handlePrevPage}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <div className="page-numbers">
      <span>Page {currentPage} of {totalPages}</span>
    </div>
    <button
      className="pagination-btn"
      onClick={handleNextPage}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
);

export default Pagination; // Đảm bảo export đúng
