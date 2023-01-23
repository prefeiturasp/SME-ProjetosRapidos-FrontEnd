import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";

import "./button.scss";

export default function Button(props){
  const icons = {
    'arrow-circle-alt': faArrowAltCircleRight
  };
  const { title, iconRight } = props;

  return (
    <button className="btn btn-primary btn-large fw-bold btn-radius fs-5 my-3" type="submit" color="custom-color">
      {title}
      {iconRight &&
        <FontAwesomeIcon icon={icons[iconRight]} className="stretched-link ms-2"/>
      }
    </button>
  );
}
