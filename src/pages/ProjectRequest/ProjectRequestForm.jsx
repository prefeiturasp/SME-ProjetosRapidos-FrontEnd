import React, {useState} from "react";
import Button from "components/shared/button/Button";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import InputText from "components/shared/input/InputText";
import InputSelect from "components/shared/input-select/InputSelect";
import "./step.scss";

export default function ProjectRequestForm(props){

  function Section({children, styleProps ={}, className='', bgColor = ''}) {
    return(
      <div style={{...styleProps, backgroundColor: bgColor}} className={className}>
        <section className="container">
          <div className="mx-md-5 p-3 px-md-5">
            {children}
          </div>
        </section>
      </div>
    );
  };

  const renderHeaderSection = () => {
    return (
      <Section bgColor={"#0079E333"}>
        <div className="row">
          <div className="col-lg-12 p-4">
            <h1 className="fw-bold mb-4" style={{color: '#0079E3'}}>
              Qual o seu projeto?
            </h1>
            <p>
              COTIC-DISIS tem uma equipe exclusiva para realização de pequenas demandas da Secretaria Municipal de Educação de São Paulo.
              Esta frente de desenvolvimento é focada em demandas mais simples, mas que apoiarão uma parte de seu trabalho no dia a dia ou que ajudarão você e sua equipe em iniciativas pontuais.
            </p>
            <p>
              Este formulário tem o objetivo de coletar as demandas, que serão analisadas pela equipe técnica para identificar as possibilidades de execução do desenvolvimento do produto digital.
              Qualquer dúvida, escreva para idscotic@sme.prefeitura.sp.gov.br.
            </p>
          </div>
        </div>
      </Section>
    );
  }

  function Contact(){
    const resolveOptions = [
      "Uma demanda pontual (inscrições, divulgação de eventos, entre outros)",
      "Uma demanda contínua da minha área"
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
      "Outra: abrir campo de texto"
    ];
    const [form, setForm] = useState({
      name: '',
      contact: '',
      phone: '',
      responsible_name: '',
      coordenadoria: '',

      necessidade: '',
      resolucoes: '',
      principais_usuarios: '',
      estimativa_publico: '',
      acoes: '',
      fatores_externos: '',
      funcionalidades: ''
    });

    const steps = {
      1: "Dados do cadastrante",
      2: "Entendimento da demanda"
    };

    const actionsSelect = [
      "Acessar informações sobre o projeto",
      "Realizar um cadastro",
      "Acompanhar um fluxo de processo"
    ];

    const funcionalidadesSelect = [
      "Página Inicial",
      "Páginas de conteúdo/informativas",
      "Formulário de cadastro",
      "Área para usuário realizar login",
      "Área para visualização de fluxos de acompanhamento de processos"
    ];

    const [currentStep, setStep] = useState(2);

    function handleChange(ev){
      setForm(prev => {return {...prev, [ev.target.name]: ev.target.value}})
    };

    function canBeSubmitted(){
      return (
        currentStep === 1 ? (
          form.name !== '' &&
          form.contact !== '' &&
          form.responsible_name &&
          form.coordenadoria !== ''
        ) : (
          form.name !== '' &&
          form.contact !== '' &&
          form.responsible_name &&
          form.coordenadoria !== ''
        )
      );
    };

    function handleNext(){
      setStep(prev => prev + 1);
    };

    function handleBack(){
      setStep(prev => prev - 1);
    };

    function handleSubmit(){

    };

    return (
      <Section bgColor="#F8F8F9">
        <form className="d-flex justify-content-center">
          <div className="row my-3 w-100 w-lg-50 col-md-12">
            <div className="step mb-3 d-flex justify-content-around">
                <div className="text-center">
                  <span> 1</span>
                  <h6 className="w-100 mt-2 fw-bold">{steps[1]}</h6>
                </div>
                <hr width="100%"/>
                <div className="text-center">
                  <span> 2</span>
                  <h6 className="w-100 mt-2 fw-bold">{steps[2]}</h6>
                </div>
            </div>
            {
              currentStep === 1 ? (
                <>
                <InputText
                  label='Nome: *'
                  name='name'
                  value={form.name}
                  callbackChange={handleChange}
                />
                <InputSelect
                  label='Qual sua coordenadoria, assessoria ou núcleo?: *'
                  name='coordenadoria'
                  value={form.coordenadoria}
                  options={coordenadorias}
                />
                <InputText
                  label='Qual seu telefone/e-mail de contato?: *'
                  name='contact'
                  mask='phone'
                  value={form.contact}
                  callbackChange={handleChange}
                />
                <InputText
                  label='Quem será o responsável pelo projeto?: *'
                  name='responsible_name'
                  value={form.responsible_name}
                  callbackChange={handleChange}
                />
                </>
              ) : currentStep === 2 ? (
                <>
                <InputText
                  label='Qual sua necessidade de desenvolvimento de portais/sistemas?: *'
                  name='necessidade'
                  value={form.necessidade}
                  callbackChange={handleChange}
                  textarea
                />
                <InputSelect
                  label='O sistema resolverá: *'
                  value={form.resolucoes}
                  options={resolveOptions}
                />
                <InputText
                  label='Quem serão os principais usuários deste produto digital?: *'
                  name='necessidade'
                  value={form.principais_usuarios}
                  callbackChange={handleChange}
                />
                <InputText
                  label='Quantas pessoas você estima que utilizarão este sistema/portal?: *'
                  name='necessidade'
                  value={form.estimativa_publico}
                  callbackChange={handleChange}
                />
                <InputSelect
                  label='Elenque as ações que os usuários realizarão neste sistema/portal: *'
                  value={form.acoes}
                  options={actionsSelect}
                />
                <InputText
                  label='Existem fatores externos que continuam impactando o usuário, apesar da construção de um sistema/portal, como burocracias ou outros sistemas? Em caso afirmativo, explique melhor: *'
                  name='necessidade'
                  value={form.fatores_externos}
                  callbackChange={handleChange}
                  textarea
                />
                <InputSelect
                  label='Quais funcionalidades você entende que o sistema deve disponibilizar?: *'
                  value={form.funcionalidades}
                  options={funcionalidadesSelect}
                />
                </>
              ) : null
            }
            <div className="row d-flex justify-content-end m-0">
              {
                currentStep > 1  && (
                  <Button
                    title="Voltar"
                    color="light"
                    size="md"
                    onClick={handleBack}
                  />
                )
              }
              <Button
                title={currentStep === 1 ? 'Continuar' : 'Enviar solicitação'}
                onClick={currentStep === 1 ? handleNext : handleSubmit}
                disabled={!canBeSubmitted()}
              />
            </div>
          </div>
        </form>
      </Section>
    );
  };

  return (
    <div>
      <nav aria-label="breadcrumb" className="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Início</a></li>
          <li class="breadcrumb-item active" aria-current="page">Solicitar projeto</li>
        </ol>
      </nav>
      {renderHeaderSection()}
      <Contact/>
    </div>
  );
}
