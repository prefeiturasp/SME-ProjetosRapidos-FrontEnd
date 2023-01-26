import React from "react";
import { LogoSP } from "resources/assets";
import "./style.scss";

export const Rodape = (props) => {

  return (
    <footer>
      <div id="rodape" className="area-rodape text-white p-5">
        <div className="container">
          <div className="row">
            <div className="logo-sp col-md-3 d-flex justify-content-around align-items-center mb-5 mb-md-0">
              <img
                src={LogoSP}
                alt="Prefeitura de SP"
                className="img-fluid h-fit"
                width="150"
              />
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Secretaria Municipal de Educação</h5>
              <ul>
                <li>
                  Rua Borges Lagoa, 1230
                </li>
                <li>
                  Vila Clementino
                </li>
                <li>
                  CEP: 04038-003
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Contatos</h5>
              <ul>
                <li>
                  <a href="#">156</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Redes sociais</h5>
              <ul className="list-inline pt-1 mb-3">
                  <li className="list-inline-item pr-1">
                    <a
                      className="text-white"
                      href="https://www.facebook.com/PrefSP/"
                    >
                      <img
                        src="https://educacao.sme.prefeitura.sp.gov.br/wp-content/uploads/2019/09/icone-facebook-topo.png"
                        alt="Ir para Facebook da Secerataria Muncipal de Educação de São Paulo"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-white" href="https://twitter.com/prefsp">
                      <img
                        src="https://educacao.sme.prefeitura.sp.gov.br/wp-content/uploads/2019/09/icone-twitter-topo.png"
                        alt="Ir para Twitter da Secerataria Muncipal de Educação de São Paulo"
                      />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="text-white"
                      href="https://www.youtube.com/user/prefeiturasaopaulo"
                    >
                      <img
                        src="https://educacao.sme.prefeitura.sp.gov.br/wp-content/uploads/2019/09/icone-youtube-topo.png"
                        alt="Ir para YouTube da Secerataria Muncipal de Educação de São Paulo"
                      />
                    </a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="area-endereco text-white text-center pt-2 pb-2">
        <span>
          Prefeitura Municipal de São Paulo - Viaduto do Chá, 15 - Centro - CEP: 01002-020
        </span>
      </div>
    </footer>
  );
};
