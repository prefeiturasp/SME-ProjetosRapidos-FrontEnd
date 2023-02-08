import React from "react";

export default function Spinner({ size = "md" }) {
  return (
    <div
      className={`spinner-border text-default spinner-border-${size}`}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
