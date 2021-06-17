
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from 'react';

import { Container, Content, Poster } from './styles.js'
import "./contato.css"

function useFormik({
  initialValues,
  validate
}) {
  const [touched, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    validateValues(values);
  }, [values]);

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    const { value } = event.target;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  function handleBlur(event) {
    const fieldName = event.target.getAttribute('name');
    console.log(fieldName);
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    })
  }

  function validateValues(values) {
    setErrors(validate(values));
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
    setValues
  };
}

function Contato() {
  const formik = useFormik({
    initialValues: {
      userName: '',
      userEmail: '',
      userAssunto: '',
      userMessage: '',
    },

    validate: function (values) {
      const errors = {};
      if(!values.userEmail.includes('@')) {
        errors.userEmail = 'Insira um e-mail válido.';
      }

      if(values.userMessage.length < 8) {
        errors.userMessage = 'A mesagem deve ter no minimo 8 caracteres.'
      }
      return errors;
    }
  });

  return (
    <Container>
      <Content>
        <Poster/>
        <form onSubmit={(event) => {
          event.preventDefault();
          console.log(formik.errors);
          if(Object.keys(formik.errors).length > 0){
            for(var error of Object.values(formik.errors)) {
              alert(error);
            }
          } else {
            alert('O seu contato foi enviado');
            // formik.setValues({
            //   userName: '',
            //   userEmail: '',
            //   userAssunto: '',
            //   userMessage: '',
            // });
            // formik.setErrors({});
          }

        }}
        >
          <div className="formField">
            <label>Nome:</label>
            <input
              type="text"
              placeholder="Informe o seu nome"
              id="userName"
              name="userName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.userName}
            ></input>
          </div>
          <div className="formField">
            <label htmlFor="userEmail">
              E-mail:
            </label>
            <input
              type="text"
              placeholder="email@example.com"
              name="userEmail"
              id="userEmail"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.userEmail}
            />
            {formik.touched.userEmail && formik.errors.userEmail && <span className="formField__error">{formik.errors.userEmail}</span>}
          </div>
          <div className="formField">
            <label>Assunto:</label>
            <input
              type="text"
              placeholder="Informe o assunto"
              id="userAssunto"
              name="userAssunto"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.userAssunto}
            ></input>
          </div>
          <div className="formField">
            <label htmlFor="userMessage">
              Mensagem
            </label>
            <textarea
              type="text"
              placeholder=""
              name="userMessage"
              id="userMessage"
              multiple={true}
              rows="2"
              style={{minWidth: '100%'}}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.userMessage}
            />
            <br />
            {formik.touched.userMessage && formik.errors.userMessage && <span className="formField__error">{formik.errors.userMessage}</span>}
          </div>

          <button type="submit">
            Enviar
          </button>
        </form>
      </Content>
    </Container>
  );
}

export default Contato
