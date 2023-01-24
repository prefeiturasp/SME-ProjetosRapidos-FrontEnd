import React, {useState} from "react";

import { fetchNewContactMessage } from "services/contact.service";
import feedbackService from "application/service/feedbackService";

import Button from "components/shared/button/Button";
import InputText from "components/shared/input/InputText";
import Section from "components/shared/section/Section";
import Spinner from "components/shared/spinner/Spinner";

const defaultState = {
  name: '',
  email: '',
  phone: '',
  coordenadoria: '',
  message: ''
};

export default function ContactSection(){
  let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(defaultState);
  const [validEmail, setValidEmail] = useState(true);

  function handleChange(ev){
    setForm(prev => {return {...prev, [ev.target.name]: ev.target.value}})
  };

  function canBeSubmitted(){
    return (
      form.name !== '' &&
      form.email !== '' &&
      form.message !== '' &&
      validEmail
    );
  };

  function handleCleanForm(){
    setForm(defaultState);
  };

  async function handleSubmit(){
    setLoading(true);
    try{
      await fetchNewContactMessage({
        ...form,
        phone : form.phone.replace(/[^\d]/g, '')
      });
      handleCleanForm();
      feedbackService.showSuccessMessage("Mensagem enviada com sucesso. Em breve, COTIC-DISIS entrará em contato.")
    } catch (err) {
      feedbackService.showErrorMessage("Ops! Houve um problema ao enviar formulário. Tente novamente mais tarde.")
    } finally {
      setLoading(false);
    }
  };

  function validateEmail(){
    setValidEmail(emailRegex.test(form.email));
  };

  return (
    <Section bgColor="#F8F8F9">
      <form className="d-flex justify-content-center">
        <div className="row w-100 w-lg-50 col-md-12">
          <h2 className="text-center fw-bold mb-4 px-0">
            Ficou com dúvidas? <span className="text-primary">Escreva</span> para nós!
          </h2>
          <InputText
            label='Nome: *'
            name='name'
            value={form.name}
            callbackChange={handleChange}
          />
          <InputText
            label='E-mail: *'
            name='email'
            value={form.email}
            callbackChange={handleChange}
            onBlur={validateEmail}
            error={!validEmail}
            errorMessage={'E-mail precisa ser válido'}
          />
          <div className="row d-flex align-items-end m-0">
            <div className="col-6 pe-2 ps-0">
              <InputText
                label='Telefone:'
                name='phone'
                mask='phone'
                value={form.phone}
                callbackChange={handleChange}
              />
              </div>
              <div className="col-6 ps-2 pe-0">
                <InputText
                  label='Coordenadoria ou Núcleo:'
                  name='coordenadoria'
                  value={form.coordenadoria}
                  callbackChange={handleChange}
                />
            </div>
          </div>
          <InputText
            label='Mensagem: *'
            name='message'
            value={form.message}
            callbackChange={handleChange}
            textarea
          />
          <Button
            title={loading ? <Spinner/> : 'Enviar mensagem'}
            onClick={handleSubmit}
            disabled={!canBeSubmitted()}
          />
        </div>
      </form>
    </Section>
  );
};
