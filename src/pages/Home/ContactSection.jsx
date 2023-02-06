import React, { useState } from "react";

import { fetchNewContactMessage } from "services/contact.service";
import feedbackService from "application/service/feedbackService";

import Button from "components/shared/button/Button";
import InputText from "components/shared/input/InputText";
import Section from "components/shared/section/Section";
import validationUtil from "application/util/validationUtil";

const defaultState = {
  name: "",
  email: "",
  phone: "",
  coordenadoria: "",
  message: "",
};

export default function ContactSection() {
  const emailValidation = validationUtil.emailValidation;
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(defaultState);
  const [validEmail, setValidEmail] = useState(true);

  function handleChange(ev) {
    setForm((prev) => {
      return { ...prev, [ev.target.name]: ev.target.value };
    });
  }

  function canBeSubmitted() {
    return (
      form.name !== "" && form.email !== "" && form.message !== "" && validEmail
    );
  }

  function handleCleanForm() {
    setForm(defaultState);
  }

  async function handleSubmit() {
    setLoading(true);
    try {
      await fetchNewContactMessage({
        ...form,
        phone: form.phone.replace(/[^\d]/g, ""),
      });
      setTimeout(() => {
        setLoading(false);
        handleCleanForm();
        feedbackService.showSuccessMessage(
          "Mensagem enviada com sucesso. Em breve, COTIC-DISIS entrará em contato."
        );
      }, 2000);
    } catch (err) {
      setLoading(false);
      feedbackService.showErrorMessage(
        "Ops! Houve um problema ao enviar formulário. Tente novamente mais tarde."
      );
    }
  }

  function validateEmail() {
    setValidEmail(emailValidation(form.email));
  }

  return (
    <Section bgColor="#F8F8F9">
      <form className="d-flex justify-content-center">
        <div className="row w-100 w-lg-50 col-md-12">
          <h2 className="text-center fw-bold mb-4 px-0">
            Ficou com dúvidas? <span className="text-primary">Escreva</span>{" "}
            para nós!
          </h2>
          <InputText
            label="Nome: *"
            name="name"
            value={form.name}
            callbackChange={handleChange}
          />
          <InputText
            label="E-mail: *"
            name="email"
            value={form.email}
            callbackChange={handleChange}
            onBlur={validateEmail}
            error={!validEmail}
            errorMessage={"E-mail precisa ser válido"}
          />
          <div className="row d-flex align-items-end m-0">
            <div className="col-6 pe-2 ps-0">
              <InputText
                label="Telefone:"
                name="phone"
                mask="phone"
                value={form.phone}
                callbackChange={handleChange}
              />
            </div>
            <div className="col-6 ps-2 pe-0">
              <InputText
                label="Coordenadoria ou Núcleo:"
                name="coordenadoria"
                value={form.coordenadoria}
                callbackChange={handleChange}
              />
            </div>
          </div>
          <InputText
            label="Mensagem: *"
            name="message"
            value={form.message}
            callbackChange={handleChange}
            textarea
          />
          <Button
            title={"Enviar mensagem"}
            loading={loading}
            onClick={handleSubmit}
            disabled={!canBeSubmitted()}
          />
        </div>
      </form>
    </Section>
  );
}
