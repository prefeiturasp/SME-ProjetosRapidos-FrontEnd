import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "pages/Home/Home";
import "resources/style/style";
import ProjectRequestForm from "pages/ProjectRequest/ProjectRequestForm";
import Menu from "components/MenuSuperior/Menu";
import { Rodape } from "components/Rodape";

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
      <Menu/>
      <Switch>
        <Route
          path="/"
          exact
          render={props => (
            <Home
              {...props}
            />
          )}
        />
        <Route
          path="/solicitar"
          render={props => (
            <ProjectRequestForm
              {...props}
            />
          )}
        />
      </Switch>
      <Rodape/>
    </div>
  );
}
