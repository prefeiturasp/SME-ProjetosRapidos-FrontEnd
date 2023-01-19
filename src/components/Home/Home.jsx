import React, { Component } from "react";
import Menu from "../MenuSuperior/Menu";
import { Rodape } from "../Rodape";

export default function Home(props){

  return (
    <div>
      <Menu {...props} />
      <Rodape />
    </div>
  );
}
