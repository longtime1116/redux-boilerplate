import React from "react";
export default function Link({ active, onClick, children }) {
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
