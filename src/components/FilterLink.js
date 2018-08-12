import React from "react";
import Link from "./Link";

export default function FilterLink({
  children,
  filter,
  currentFilter,
  onClick
}) {
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
}
