import React from "react";
import FilterLink from "./FilterLink";

export default function Footer({ store }) {
  return (
    <p>
      Show:{" "}
      <FilterLink filter="SHOW_ALL" store={store}>
        ALL
      </FilterLink>{" "}
      <FilterLink filter="SHOW_ACTIVE" store={store}>
        ACTIVE
      </FilterLink>{" "}
      <FilterLink filter="SHOW_COMPLETED" store={store}>
        COMPLETED
      </FilterLink>
    </p>
  );
}
