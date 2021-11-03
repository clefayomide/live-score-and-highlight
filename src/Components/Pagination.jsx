import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, value }) => {
  const pagination = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pagination.push(i);
  }
  return (
    <nav className="nav">
      <ul className="nav-links">
        {pagination.map((page, index) => {
          return (
            <li
              className={`link-lists ${index === value && `active`}`}
              key={page}
              onClick={() => paginate(page)}
            >
              <a href="!#" className="link">
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;