import React, { useState } from "react";

import { fetchNewProjectRequest } from "services/projectRequest.service";
import feedbackService from "application/service/feedbackService";

import Button from "components/shared/button/Button";
import InputText from "components/shared/input/InputText";
import InputSelect from "components/shared/input-select/InputSelect";
import Modal from "components/shared/modal/Modal";
import Section from "components/shared/section/Section";
import InputDatepicker from "components/shared/input-datepicker/InputDatepicker";

import "./project-request.scss";
import Step from "components/shared/step/Step";

export default function ProjectRequestForm(props) {
  const renderHeaderSection = () => {
    return (
      <Section bgColor={"#0079E333"}>
        <div className="row">
          <div className="col-lg-12 p-4">
            <h1 className="fw-bold mb-4" style={{ color: "#0079E3" }}>
              Qual o seu projeto?
            </h1>
            <p>
              COTIC-DISIS tem uma equipe exclusiva para realização de pequenas
              demandas da Secretaria Municipal de Educação de São Paulo. Esta
              frente de desenvolvimento é focada em demandas mais simples, mas
              que apoiarão uma parte de seu trabalho no dia a dia ou que
              ajudarão você e sua equipe em iniciativas pontuais.
            </p>
            <p>
              Este formulário tem o objetivo de coletar as demandas, que serão
              analisadas pela equipe técnica para identificar as possibilidades
              de execução do desenvolvimento do produto digital. Qualquer
              dúvida, escreva para idscotic@sme.prefeitura.sp.gov.br.
            </p>
          </div>
        </div>
      </Section>
    );
  };

  function Contact() {
    const resolveOptions = [
      "Uma demanda pontual (inscrições, divulgação de eventos, entre outros)",
      "Uma demanda contínua da minha área",
    ];

    const coordenadorias = [
      "COTIC",
      "COPED",
      "CODAE",
      "COPLAN",
      "COCEU",
      "COGEP",
      "COMPS",
      "COMAPRE",
      "COSERV",
      "CONT",
      "ASCOM",
      "AJ",
      "ASPAR",
      "NUTAC",
      "Núcleo Administrativo",
      "Outra",
    ];

    const steps = [
      { title: "Dados do cadastrante", key: 1, current: true },
      { title: "Entendimento da demanda", key: 2, current: false },
    ];

    const actionsSelect = [
      "Acessar informações sobre o projeto",
      "Realizar um cadastro",
      "Acompanhar um fluxo de processo",
      "Outro",
    ];

    const funcionalidadesSelect = [
      "Página Inicial",
      "Páginas de conteúdo/informativas",
      "Formulário de cadastro",
      "Área para usuário realizar login",
      "Área para visualização de fluxos de acompanhamento de processos",
      "Outro",
    ];

    const defaultState = {
      name: "",
      contact: "",
      responsible_name: "",
      coordenadoria: "",
      coordenadoria_other: "",

      demand: "",
      demand_type: "",
      approx_release_date: "",
      target_users: "",
      approx_quantity_users: "",
      users_actions: "",
      users_actions_other: "",
      external_factors: "",
      functionalities: "",
      functionalities_other: "",
    };

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(defaultState);

    const [currentStep, setStep] = useState(1);
    const [modalConfirm, setModalConfirm] = useState(false);

    const [openAnotherActions, setOpenAnotherActions] = useState(false);
    const [openAnotherFunctions, setOpenAnotherFunctins] = useState(false);
    const [openAnotherCoord, setOpenAnotherCoord] = useState(false);

    function handleChange(ev) {
      setForm((prev) => {
        return { ...prev, [ev.target.name]: ev.target.value };
      });
    }

    function handleChangeInputSelect(name, value) {
      setForm((prev) => {
        return { ...prev, [name]: value };
      });
    }

    function canBeSubmitted() {
      return currentStep === 1
        ? form.name !== "" &&
            form.contact !== "" &&
            form.responsible_name &&
            (form.coordenadoria !== "" || form.coordenadoria_other !== "")
        : form.demand !== "" &&
            form.demand_type !== "" &&
            form.approx_release_date !== "" &&
            form.target_users !== "" &&
            form.approx_quantity_users !== "" &&
            (form.users_actions !== "" || form.users_actions_other !== "") &&
            form.external_factors !== "" &&
            (form.functionalities !== "" || form.functionalities_other !== "");
    }

    function handleNext() {
      setStep((prev) => prev + 1);
    }

    function handleBack() {
      setStep((prev) => prev - 1);
    }

    function handleCleanForm() {
      setForm(defaultState);
      setStep(1);
    }

    function handlePayloadFormat() {
      let data = form;

      data.users_actions = data.users_actions
        .map((_actions) => _actions.value)
        .concat(data.users_actions_other)
        .join();

      data.functionalities = data.functionalities
        .map((_fun) => _fun.value)
        .concat(data.functionalities_other)
        .join();

      if (data.coordenadoria_other !== "") {
        data.coordenadoria = data.coordenadoria.concat(
          `, ${data.coordenadoria_other}`
        );
      }
      data.coordenadoria = data.coordenadoria
        ? data.coordenadoria.value
        : data.coordenadoria_other;
      data.demand_type = data.demand_type.value;
      return data;
    }

    async function handleSubmit() {
      setLoading(true);
      try {
        let data = handlePayloadFormat();
        await fetchNewProjectRequest(data);
        handleCleanForm();
        setModalConfirm(true);
      } catch (err) {
        console.log(err);
        feedbackService.showErrorMessage(
          "Ops! Houve um problema ao enviar formulário. Tente novamente mais tarde."
        );
      } finally {
        setLoading(false);
      }
    }

    function handleCloseModal() {
      setModalConfirm(false);
    }

    return (
      <Section bgColor="#F8F8F9" className="request-form-section">
        <Modal
          open={modalConfirm}
          close={handleCloseModal}
          title="Sua solicitação foi enviada com sucesso."
          subtitle="Em breve, COTIC-DISIS entrará em contato."
        />
        <form className="d-flex justify-content-center">
          <div className="row my-3 w-100 w-lg-50 col-md-12">
            <Step steps={steps} currentStep={currentStep} />
            {currentStep === 1 ? (
              <>
                <InputText
                  label="Nome: *"
                  name="name"
                  value={form.name}
                  callbackChange={handleChange}
                />
                <InputSelect
                  label="Qual sua coordenadoria, assessoria ou núcleo?: *"
                  name="coordenadoria"
                  value={form.coordenadoria}
                  options={coordenadorias}
                  callbackChange={(value) =>
                    handleChangeInputSelect("coordenadoria", value)
                  }
                  callbackAnother={setOpenAnotherCoord}
                />
                {openAnotherCoord ? (
                  <InputText
                    label="Insira aqui outra coordenadoria: *"
                    name="coordenadoria_other"
                    value={form.coordenadoria_other}
                    callbackChange={handleChange}
                  />
                ) : null}
                <InputText
                  label="Qual seu telefone/e-mail de contato?: *"
                  name="contact"
                  value={form.contact}
                  callbackChange={handleChange}
                />
                <InputText
                  label="Quem será o responsável pelo projeto?: *"
                  name="responsible_name"
                  value={form.responsible_name}
                  callbackChange={handleChange}
                />
              </>
            ) : currentStep === 2 ? (
              <>
                <InputText
                  label="Qual sua necessidade de desenvolvimento de portais/sistemas?: *"
                  name="demand"
                  value={form.demand}
                  callbackChange={handleChange}
                  textarea
                />
                <InputSelect
                  label="O sistema resolverá: *"
                  name="demand_type"
                  value={form.demand_type}
                  options={resolveOptions}
                  callbackChange={(value) =>
                    handleChangeInputSelect("demand_type", value)
                  }
                />
                <InputDatepicker
                  label="Qual a data aproximada que o produto precisa estar pronto para uso?: *"
                  name="approx_release_date"
                  value={form.approx_release_date}
                  callbackChange={handleChange}
                />
                <InputText
                  label="Quem serão os principais usuários deste produto digital?: *"
                  name="target_users"
                  value={form.target_users}
                  callbackChange={handleChange}
                />
                <InputText
                  label="Quantas pessoas você estima que utilizarão este sistema/portal?: *"
                  name="approx_quantity_users"
                  type="number"
                  value={form.approx_quantity_users}
                  callbackChange={handleChange}
                />
                <InputSelect
                  label="Elenque as ações que os usuários realizarão neste sistema/portal: *"
                  name="users_actions"
                  value={form.users_actions}
                  options={actionsSelect}
                  callbackChange={(value) =>
                    handleChangeInputSelect("users_actions", value)
                  }
                  callbackAnother={setOpenAnotherActions}
                  isMulti
                />
                {openAnotherActions ? (
                  <InputText
                    label="Insira aqui outras ações: *"
                    name="users_actions_other"
                    value={form.users_actions_other}
                    callbackChange={handleChange}
                    textarea
                  />
                ) : null}
                <InputText
                  label="Existem fatores externos que continuam impactando o usuário, apesar da construção de um sistema/portal, como burocracias ou outros sistemas? Em caso afirmativo, explique melhor: *"
                  name="external_factors"
                  value={form.external_factors}
                  callbackChange={handleChange}
                  textarea
                />
                <InputSelect
                  label="Quais funcionalidades você entende que o sistema deve disponibilizar?: *"
                  name="functionalities"
                  value={form.functionalities}
                  options={funcionalidadesSelect}
                  callbackChange={(value) =>
                    handleChangeInputSelect("functionalities", value)
                  }
                  callbackAnother={setOpenAnotherFunctins}
                  isMulti
                />
                {openAnotherFunctions ? (
                  <InputText
                    label="Insira aqui outras funcionalidades: *"
                    name="functionalities_other"
                    value={form.functionalities_other}
                    callbackChange={handleChange}
                    textarea
                  />
                ) : null}
              </>
            ) : null}
            <div className="row d-flex justify-content-end m-0">
              {currentStep > 1 && (
                <Button
                  title="Voltar"
                  color="light"
                  size="md"
                  onClick={handleBack}
                />
              )}
              <Button
                title={currentStep === 1 ? "Continuar" : "Enviar solicitação"}
                loading={loading}
                onClick={currentStep === 1 ? handleNext : handleSubmit}
                disabled={!canBeSubmitted()}
              />
            </div>
          </div>
        </form>
      </Section>
    );
  }

  return (
    <div>
      <nav aria-label="breadcrumb" className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Início</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Solicitar projeto
          </li>
        </ol>
      </nav>
      {renderHeaderSection()}
      <Contact />
    </div>
  );
}
