import React, { Component } from "react";
import { LogoProjetosRapidos, LogoEducacaoSP } from "resources/assets";
import Animate from "components/shared/animate/Animate";
import Icon from "components/shared/icon/Icon";
import "./style.scss";

export default class Menu extends Component {
  render() {
    const { alterarFonte, alterarContraste } = this.props;

    function renderSocialIconLink(href, icon) {
      return (
        <li className="list-inline-item">
          <a href={href} target="_blank">
            <Icon name={icon} size="2x" color="light" />
          </a>
        </li>
      );
    }

    return (
      <div id="menu-principal">
        <div className="header-acessibilidade">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <ul className="list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="#conteudo">
                      Ir ao Conteúdo<span className="span-accesskey">1</span>{" "}
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#menu-principal">
                      Ir para menu principal
                      <span className="span-accesskey">2</span>{" "}
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#rodape">
                      Ir para o rodapé
                      <span className="span-accesskey">3</span>{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 text-end">
                <ul className="list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="https://educacao.sme.prefeitura.sp.gov.br/acessibilidade/">
                      Acessibilidade<span className="span-accesskey">5</span>{" "}
                    </a>
                  </li>
                  <li onClick={alterarContraste} className="list-inline-item">
                    Alternar Alto Contraste
                    <Icon name="adjust" />
                  </li>
                  <li onClick={alterarFonte} className="list-inline-item">
                    Alternar Tamanho da Fonte
                    <Icon name="text-height" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pref-menu">
          <div className="container">
            <div className="row py-2">
              <div className="col-lg-6 col-xs-12 d-flex justify-content-lg-start justify-content-center align-items-center">
                <ul className="list-inline mb-3 m-lg-0">
                  <li className="list-inline-item">
                    <a href="http://transparencia.prefeitura.sp.gov.br/acesso-a-informacao">
                      Acesso à informação e-sic
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/ouvidoria/fale_com_a_ouvidoria/index.php?p=464">
                      Ouvidoria
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://dados.prefeitura.sp.gov.br/organization/educacao1">
                      Portal da Transparência
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://sp156.prefeitura.sp.gov.br/portal/servicos">
                      SP 156
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-xs-12 d-flex justify-content-lg-end justify-content-center align-items-center">
                <ul className="list-inline m-0">
                  {renderSocialIconLink(
                    "https://pt-br.facebook.com/EducaPrefSP/",
                    "facebook"
                  )}
                  {renderSocialIconLink(
                    "https://www.instagram.com/educaprefsp/",
                    "instagram"
                  )}
                  {renderSocialIconLink(
                    "https://twitter.com/EducaPrefSP",
                    "twitter"
                  )}
                  {renderSocialIconLink(
                    "https://www.youtube.com/c/EducaPrefSP",
                    "youtube"
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-4 mb-4">
            <div className="col-lg-3 col-sm-12 d-flex justify-content-lg-start justify-content-center align-items-end">
              <Animate>
                <h1 className="d-flex align-items-center m-0">
                  <a
                    href="https://educacao.sme.prefeitura.sp.gov.br/"
                    className="me-3"
                  >
                    <img
                      src={LogoProjetosRapidos}
                      alt="Logo São Paulo educação"
                      className="img-fluid"
                    />
                  </a>
                  <hr className="vertical" />
                  <a
                    href="https://educacao.sme.prefeitura.sp.gov.br/"
                    className="ms-3"
                  >
                    <img
                      src={LogoEducacaoSP}
                      alt="Logo São Paulo educação"
                      className="img-fluid"
                    />
                  </a>
                </h1>
              </Animate>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
