import React, { Component } from "react";
import { Figura1SecaoRegras, Figura2RealizarCadastro, Figura2SecaoRegras, Figura3SecaoRegras, FiguraPontosImportantes, FiguraRealizarCadastro, FiguraSecaoBanner } from "resources/assets";
import Menu from "../MenuSuperior/Menu";
import { Rodape } from "../Rodape";
import Button from "components/shared/button/Button";

export default function Home(props){

  const sections = {
    "headerSection": {
      title: "Você tem um novo projeto de tecnologia na sua área?",
      subtitle: "A frente de Projetos Rápidos desenvolve portais e sistemas simples em poucas semanas.",
      body: "",
      img: FiguraSecaoBanner,
      ctaTitle: "Cadastre seu projeto!",
      ctaLink: "Cadastre seu projeto!",
      bgColor: "#0079E333"
    },
    "aboutSection": {
      title: "O que é o Projetos Rápidos",
      body: "Em parceria com COTIC-DISIS, que possui uma equipe exclusiva para a realização de pequenas demandas de tecnologia, é possível realizar pequenos portais e sistemas em algumas semanas. Neste site, é possível conhecer mais a iniciativa e enviar as demandas da sua coordenadoria.",
    },
    "projectRulesSection": {
      title: "Quais projetos podem ser cadastrados?",
      body: "Esta iniciativa é focada no desenvolvimento de projetos mais simples, mas que apoiarão o seu trabalho no dia a dia. Se você tiver uma demanda mais complexa, não deixe de escrever para nós utilizando o formulário de contato ao final deste site.",
    },
    "considerSection": {
      title: "O que é importante considerar para a solicitação da sua demanda de tecnologia?",
      img: FiguraPontosImportantes
    },
    "signupSection": {
      title: "Realize seu cadastro agora mesmo!",
      img: FiguraPontosImportantes,
      ctaTitle: "É só preencher esse breve formulário",
      ctaLink: "Cadastre seu projeto!",
      bgColor: "#0079E333"
    },
  };

  const renderHeaderSection = () => {
    const { title, subtitle, img, ctaTitle, bgColor, cta } = sections["headerSection"];
    return (
      <div style={{backgroundColor: bgColor}}>
        <div className="row mx-5 p-5">
          <div className="col-lg-6 p-4">
            <h1 className="font-weight-bold mb-4" style={{color: '#0079E3'}}>
              {title}
            </h1>
            <h4 className="font-weight-bold">
              {subtitle}
            </h4>
            <Button
              title={ctaTitle}
              iconRight='arrow-circle-alt'
            />
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              src={img}
              alt="Acompanhamento no desenvolvimento escolar"
              className="img-fluid rounded"
            />
          </div>
        </div>
    </div>
    );
  }

  const renderAboutSection = () => {
    const { title, body } = sections["aboutSection"];
    return (
      <div className="mx-5 p-5">
        <h2 className="text-center font-weight-bold mb-4" style={{color: '#0079E3'}}>
          {title}
        </h2>
        <p className="mx-5">
          {body}
        </p>
      </div>
    );
  };

  const renderProjectRulesSection = () => {
    const { title, body } = sections["projectRulesSection"];
    return (
      <div className="mx-5 p-5">
        <h2 className="text-center font-weight-bold mb-4" style={{color: '#0079E3'}}>
          {title}
        </h2>
        <p className="mx-5">
          {body}
        </p>

        <h5 className="text-center font-weight-bold mb-5">
          Conheça alguns tipos de projetos que podem ser desenvolvidos
        </h5>

        <div className="row d-flex justify-content-around">
          <div className="col-lg-4 text-center">
            <img
              src={Figura1SecaoRegras}
              alt="Acompanhamento no desenvolvimento escolar"
              className="img-fluid rounded"
            />
            <h6 className="font-weight-bold my-3">formulários de cadastro</h6>
          </div>

          <div className="col-lg-4 text-center">
            <img
              src={Figura2SecaoRegras}
              alt="Acompanhamento no desenvolvimento escolar"
              className="img-fluid rounded"
            />
            <h6 className="font-weight-bold my-3">sites informativos</h6>
          </div>

          <div className="col-lg-4 text-center">
            <img
              src={Figura3SecaoRegras}
              alt="Acompanhamento no desenvolvimento escolar"
              className="img-fluid rounded"
            />
            <h6 className="font-weight-bold my-3">sistemas para acompanhamento de fluxos e processos</h6>
          </div>
        </div>
      </div>
    );
  };

  const renderConsiderSection = () => {
    const { title, img } = sections["considerSection"];
    return (
      <div className="row mx-5 p-5">
        <div className="col-lg-6 p-4">
          <h2 className="font-weight-bold mb-4">
            {title}
          </h2>
          <ul className="m-0 p-0">
            <li>
            A área técnica analisará sua demanda e identificará viabilidade de realização
            </li>
            <li>
            Será fundamental que exista um profissional responsável na coordenadoria demandante, com clareza das necessidades do projeto e disponibilidade de tempo para execução
            </li>
          </ul>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <img
            src={img}
            alt="Acompanhamento no desenvolvimento escolar"
            className="img-fluid rounded"
          />
        </div>
      </div>
    );
  };

  const renderSignupSection = () => {
    const { title, bgColor, ctaTitle } = sections["signupSection"];
    return (
      <div style={{backgroundColor: bgColor, position: 'relative', overflow: 'hidden', paddingTop: '5%'}}>
        <img
          src={FiguraRealizarCadastro}
          alt="Acompanhamento no desenvolvimento escolar"
          className="img-fluid rounded position-absolute"
        />
        <img
          src={Figura2RealizarCadastro}
          alt="Acompanhamento no desenvolvimento escolar"
          className="img-fluid rounded position-absolute"
          style={{right: 0, bottom: '-40%'}}
        />
        <div className="text-center mx-5 pt-5 p-5">
          <h2 className="font-weight-bold mb-4">
            {title}
          </h2>
          <Button
            title={ctaTitle}
            iconRight='arrow-circle-alt'
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Menu {...props} />
      <div id="conteudo" className="w-100 desenvolvimento-escolar">
          {renderHeaderSection()}
          {renderAboutSection()}
          {renderProjectRulesSection()}
          {renderConsiderSection()}
          {renderSignupSection()}
        </div>
      <Rodape />
    </div>
  );
}
