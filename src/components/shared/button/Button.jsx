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
    <button class="btn btn-primary btn-large font-weight-bold btn-radius my-3" type="submit">
      {title}
      {iconRight &&
        <FontAwesomeIcon icon={icons[iconRight]} className="stretched-link ml-2"/>
      }
    </button>
  );
}
