import React from "react";
import { Link } from "react-router-dom";
export default function Button({ children, size }) {
  return (
    <Link
      to="#!"
      className={`${
        size === "NormalBtn"
          ? "header__button"
          : size === "SmallerBtn"
          ? "price-offers__button"
          : size === "BiggerBtn"
          ? "search-button"
          : ""
      } button`}
    >
      {children}
    </Link>
  );
}
