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
