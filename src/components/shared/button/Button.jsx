import React from "react";
import Spinner from "../spinner/Spinner";
import Icon from "../icon/Icon";
import "./button.scss";

export default function Button(props) {
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
      {loading ? <Spinner size="sm" /> : title}
      {iconRight && <Icon name="arrow-circle-alt" color="light" />}
    </button>
  );
}
