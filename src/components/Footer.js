import React from "react";

const FilterLink = ({ children, filter, currentFilter, onClick }) => {
  if (currentFilter === filter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={event => {
        event.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  );
};

export default function Footer({ visibilityFilter, onVisiblityFilterClick }) {
  return (
    <p>
      Show:{" "}
      <FilterLink
        filter="SHOW_ALL"
        currentFilter={visibilityFilter}
        onClick={filter => {
          onVisiblityFilterClick(filter);
        }}
      >
        ALL
      </FilterLink>{" "}
      <FilterLink
        filter="SHOW_ACTIVE"
        currentFilter={visibilityFilter}
        onClick={filter => {
          onVisiblityFilterClick(filter);
        }}
      >
        ACTIVE
      </FilterLink>{" "}
      <FilterLink
        filter="SHOW_COMPLETED"
        currentFilter={visibilityFilter}
        onClick={filter => {
          onVisiblityFilterClick(filter);
        }}
      >
        COMPLETED
      </FilterLink>
    </p>
  );
}
