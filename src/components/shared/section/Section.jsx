import React from "react";
import Spinner from "../spinner/Spinner";

export default function Section({
  children,
  loading = false,
  styleProps = {},
  className = "",
  bgColor = "",
}) {
  return (
    <div
      style={{ ...styleProps, backgroundColor: bgColor }}
      className={className}
    >
      <section className="container">
        <div className="mx-md-5 p-3 p-md-5">
          {loading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: 300 }}
            >
              <Spinner size={32} />
            </div>
          ) : (
            children
          )}
        </div>
      </section>
    </div>
  );
}
