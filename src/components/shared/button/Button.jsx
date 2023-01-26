import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

import "./button.scss";
import Spinner from "../spinner/Spinner";

export default function Button(props) {
  const icons = {
    "arrow-circle-alt": faArrowAltCircleRight,
  };
  const {
    title,
    iconRight,
    onClick,
    loading = false,
    color = "primary",
    size = "lg",
    ...rest
  } = props;

  function handleClick(ev) {
    ev.preventDefault();
    onClick();
  }

  return (
    <button
      className={`btn btn-${color} btn-${size} fw-bold btn-radius my-3 w-auto`}
      onClick={handleClick}
      {...rest}
    >
      {loading ? <Spinner /> : title}
      {iconRight && (
        <FontAwesomeIcon
          icon={icons[iconRight]}
          className="stretched-link ms-2"
        />
      )}
    </button>
  );
}
