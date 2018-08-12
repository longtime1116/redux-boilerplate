import React from "react";

function Link({ active, onClick, children }) {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={event => {
        event.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
}

const FilterLink = ({ children, filter, currentFilter, onClick }) => {
  return (
    <Link
      active={currentFilter === filter}
      onClick={() => {
        onClick(filter);
      }}
    >
      {children}
    </Link>
  );
};

export default function Footer({ visibilityFilter, onVisibilityFilterClick }) {
  return (
    <p>
      Show:{" "}
      <FilterLink
        filter="SHOW_ALL"
        currentFilter={visibilityFilter}
        onClick={filter => {
          onVisibilityFilterClick(filter);
        }}
      >
        ALL
      </FilterLink>{" "}
      <FilterLink
        filter="SHOW_ACTIVE"
        currentFilter={visibilityFilter}
        onClick={filter => {
          onVisibilityFilterClick(filter);
        }}
      >
        ACTIVE
      </FilterLink>{" "}
      <FilterLink
        filter="SHOW_COMPLETED"
        currentFilter={visibilityFilter}
        onClick={filter => {
          onVisibilityFilterClick(filter);
        }}
      >
        COMPLETED
      </FilterLink>
    </p>
  );
}
