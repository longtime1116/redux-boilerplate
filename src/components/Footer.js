import React from "react";
import FilterLink from "./FilterLink";

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
