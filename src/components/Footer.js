import React from "react";
import FilterLink from "./FilterLink";

export default function Footer({ visibilityFilter, onVisibilityFilterClick }) {
  return (
    <p>
      Show: <FilterLink filter="SHOW_ALL">ALL</FilterLink>{" "}
      <FilterLink filter="SHOW_ACTIVE">ACTIVE</FilterLink>{" "}
      <FilterLink filter="SHOW_COMPLETED">COMPLETED</FilterLink>
    </p>
  );
}
