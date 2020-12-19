import React from 'react';

const Pagination = ({ numItems, itemsPerPage, paginate }) => {
  const pageNumbers = [1, 2, 3, 4, 5];
  return (
    <div className="nav-pagination">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
