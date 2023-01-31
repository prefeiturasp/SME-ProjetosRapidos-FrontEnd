import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faCheckCircle,
  faAdjust,
  faTextHeight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

// https://fontawesome.com/v6/docs/web/use-with/react/
export default function Icon({
  name,
  color = "primary",
  size = "1x",
  className = "",
}) {
  const icons = {
    "arrow-circle-alt": faArrowAltCircleRight,
    "check-circle": faCheckCircle,
    circle: faCircle,
    adjust: faAdjust,
    "text-height": faTextHeight,
    facebook: faFacebookSquare,
    instagram: faInstagram,
    twitter: faTwitter,
    youtube: faYoutube,
  };
  return (
    <FontAwesomeIcon
      icon={icons[name]}
      size={size}
      className={`stretched-link text-${color} ms-2 ${className}`}
      color={color}
    />
  );
}
