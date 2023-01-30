import React, { useState, useEffect } from "react";
import _ from "lodash";
import useRouter from "application/hook/useRouter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import {
  Figura1SecaoRegras,
  Figura2RealizarCadastro,
  Figura2SecaoRegras,
  Figura3SecaoRegras,
  FiguraPontosImportantes,
  FiguraRealizarCadastro,
  FiguraSecaoBanner,
} from "resources/assets";

import { fetchSections } from "services/section.service";

import Button from "components/shared/button/Button";
import Section from "components/shared/section/Section";
import Image from "components/shared/img/Image";
import Animate from "components/shared/animate/Animate";

import ContactSection from "./ContactSection";
import Icon from "components/shared/icon/Icon";

export default function Home(props) {
  const router = useRouter();
  const [sections, setSections] = useState({});
  const [loading, setLoading] = useState(true);

  function goToSolicitar() {
    router.goToPage("/solicitar");
  }

  const renderHeaderSection = ({ title, body, img }) => {
    return (
      <Section bgColor="#0079E333" loading={loading}>
        <div className="row">
          <Animate animation="transition.slideLeftIn" delay={300}>
            <div className="col-lg-6 p-4">
              <h1 className="fw-bold mb-4" style={{ color: "#0079E3" }}>
                {title}
              </h1>
              <h4 className="fw-bold">{body}</h4>
              <Button
                title="Cadastre seu projeto!"
                onClick={goToSolicitar}
                iconRight="arrow-circle-alt"
              />
            </div>
          </Animate>
          <Animate animation="transition.slideRightIn" delay={300}>
            <div className="col-lg-6 d-flex justify-content-center">
              <Image
                src={img ? img : FiguraSecaoBanner}
                alt="Acompanhamento no desenvolvimento escolar"
                className="img-fluid rounded"
              />
            </div>
          </Animate>
        </div>
      </Section>
    );
  };

  const renderSectionOne = ({ title, body }) => {
    return (
      <Section className="mt-5" loading={loading}>
        <Animate animation="transition.fadeIn" delay={350}>
          <div>
            <h2 className="text-center fw-bold mb-4">
              {title}
              {/* O que é o <span className="text-primary">Projetos Rápidos</span> */}
            </h2>
            <p>{body}</p>
          </div>
        </Animate>
      </Section>
    );
  };

  const renderSectionTwo = ({ title, body }) => {
    return (
      <Section loading={loading}>
        <Animate animation="transition.fadeIn" delay={350}>
          <div>
            <h2 className="text-center fw-bold mb-4">
              {title}
              {/* Quais projetos podem ser{" "}
              <span className="text-primary">cadastrados</span>? */}
            </h2>
            <p>{body}</p>
          </div>
        </Animate>

        <Animate animation="transition.fadeIn" delay={350}>
          <h5 className="text-center fw-bold mb-5">
            Conheça alguns{" "}
            <span className="text-primary">tipos de projetos</span> que podem
            ser desenvolvidos
          </h5>
        </Animate>

        <div className="row d-flex justify-content-around">
          <div className="col-lg-4 text-center">
            <Animate animation="transition.slideLeftIn" delay={400}>
              <div>
                <Image
                  src={Figura1SecaoRegras}
                  alt="Acompanhamento no desenvolvimento escolar"
                  className="img-fluid rounded"
                />
                <h6 className="fw-bold my-3">formulários de cadastro</h6>
              </div>
            </Animate>
          </div>

          <div className="col-lg-4 text-center">
            <Animate delay={440}>
              <div>
                <Image
                  src={Figura2SecaoRegras}
                  alt="Acompanhamento no desenvolvimento escolar"
                  className="img-fluid rounded"
                />
                <h6 className="fw-bold my-3">sites informativos</h6>
              </div>
            </Animate>
          </div>

          <div className="col-lg-4 text-center">
            <Animate animation="transition.slideRightIn" delay={480}>
              <div>
                <Image
                  src={Figura3SecaoRegras}
                  alt="Acompanhamento no desenvolvimento escolar"
                  className="img-fluid rounded"
                />
                <h6 className="fw-bold my-3">
                  sistemas para acompanhamento de fluxos e processos
                </h6>
              </div>
            </Animate>
          </div>
        </div>
      </Section>
    );
  };

  const renderSectionThree = ({ title, body = "", img }) => {
    const listItems = body.split(";");
    return (
      <Section loading={loading}>
        <div className="row">
          <Animate animation="transition.slideLeftIn" delay={500}>
            <div className="col-lg-6 p-4">
              <h2 className="fw-bold mb-4">
                {/* O que é{" "}
                <span className="text-primary">importante considerar</span> para
                a solicitação da sua demanda de tecnologia? */}
                {title}
              </h2>
              <ul className="m-0 p-0">
                {listItems.map((item, index) => {
                  return (
                    <li className="my-3" key={index}>
                      <Icon name="check-circle" />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Animate>
          <div className="col-lg-6 d-flex justify-content-center">
            <Animate animation="transition.slideRightIn" delay={540}>
              <Image
                src={img ? img : FiguraPontosImportantes}
                alt="Acompanhamento no desenvolvimento escolar"
                className="img-fluid rounded"
              />
            </Animate>
          </div>
        </div>
      </Section>
    );
  };

  const renderSignupSection = ({ title, body = "" }) => {
    return (
      <Section
        bgColor="#0079E333"
        styleProps={{ position: "relative", overflow: "hidden" }}
        loading={loading}
      >
        <img
          src={FiguraRealizarCadastro}
          alt="Acompanhamento no desenvolvimento escolar"
          className="img-fluid rounded position-absolute d-none d-lg-block"
          style={{ left: 0 }}
        />
        <img
          src={Figura2RealizarCadastro}
          alt="Acompanhamento no desenvolvimento escolar"
          className="img-fluid rounded position-absolute d-none d-md-block"
          style={{ right: 0, bottom: "-50%" }}
        />
        <Animate animation="transition.fadeIn" delay={600}>
          <div className="text-center">
            <h2 className="fw-bolder mb-4">{title}</h2>
            <Button
              title="É só preencher esse breve formulário"
              onClick={goToSolicitar}
              iconRight="arrow-circle-alt"
            />
          </div>
        </Animate>
      </Section>
    );
  };

  async function handleGetSections() {
    try {
      const data = await fetchSections();
      setSections(_.groupBy(data, "tag_id"));
    } catch (error) {
      console.log("err", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleGetSections();
  }, []);

  return (
    <div id="conteudo" className="w-100">
      {renderHeaderSection(sections?.["header"] ? sections?.["header"][0] : {})}
      {renderSectionOne(
        sections?.["section_1"] ? sections?.["section_1"][0] : {}
      )}
      {renderSectionTwo(
        sections?.["section_2"] ? sections?.["section_2"][0] : {}
      )}
      {renderSectionThree(
        sections?.["section_3"] ? sections?.["section_3"][0] : {}
      )}
      {renderSignupSection(
        sections?.["section_action"] ? sections?.["section_action"][0] : {}
      )}
      <ContactSection />
    </div>
  );
}
