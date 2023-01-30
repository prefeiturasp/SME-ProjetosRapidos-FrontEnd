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

export default function Icon({
  name,
  color = "primary", // https://getbootstrap.com/docs/5.2/utilities/colors/#colors
  size = "1x", // https://fontawesome.com/v6/docs/web/use-with/react/
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
      className={`stretched-link text-${color} ms-2`}
    />
  );
}
