import React from "react";

export default function Image(props) {
  const { ...rest } = props;

  return <img {...rest} />;
}
