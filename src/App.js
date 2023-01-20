import React, { Component, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "resources/style/style";

export default function App(props){
  const initialState = {
    alterarFonte:
      (localStorage.getItem("alterarFonte") &&
        localStorage.getItem("alterarFonte") === "true") ||
      false,
    alterarContraste:
      (localStorage.getItem("alterarContraste") &&
        localStorage.getItem("alterarContraste") === "true") ||
      false,
    focusBuscaAtributo: false,
    focusBusca: false
  };
  const [state, setState] = useState(initialState);

  function handleFocusBusca() {
    setState({ focusBuscaAtributo: true });
  }

  function handleAlterarFonte() {
    const alterarFonte =
      localStorage.getItem("alterarFonte") !== null
        ? localStorage.getItem("alterarFonte") !== "true"
        : true;
    localStorage.setItem("alterarFonte", alterarFonte);
    setState({ alterarFonte });
  }

  function handleAlterarContraste() {
    const alterarContraste =
      localStorage.getItem("alterarContraste") !== null
        ? localStorage.getItem("alterarContraste") !== "true"
        : true;
    localStorage.setItem("alterarContraste", alterarContraste);
    setState({ alterarContraste });
  }


  return (
    <div
      className={`${state.alterarFonte && "fonte-maior"}
        ${state.alterarContraste && "alto-contraste"}`}
    >
      <Switch>
        <Route
          path="/"
          exact
          render={props => (
            <Home
              {...props}
              alterarFonte={handleAlterarFonte}
              alterarContraste={handleAlterarContraste}
              focusBusca={handleFocusBusca}
              focusBuscaAtributo={state.focusBuscaAtributo}
            />
          )}
        />
      </Switch>
    </div>
  );
}
