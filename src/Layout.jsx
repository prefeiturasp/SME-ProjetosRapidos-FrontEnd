import React, { useState } from "react";
import Menu from "components/MenuSuperior/Menu";
import { Rodape } from "components/Rodape";

function Layout(props) {
  const { children } = props;

  const initialState = {
    alterarFonte:
      (localStorage.getItem("alterarFonte") &&
        localStorage.getItem("alterarFonte") === "true") ||
      false,
    alterarContraste:
      (localStorage.getItem("alterarContraste") &&
        localStorage.getItem("alterarContraste") === "true") ||
      false,
  };

  const [state, setState] = useState(initialState);

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
      <Menu
        alterarFonte={handleAlterarFonte}
        alterarContraste={handleAlterarContraste}
      />
      {children}
      <Rodape />
    </div>
  );
}
export default Layout;
