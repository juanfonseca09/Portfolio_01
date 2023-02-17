import React from 'react'
import { motion } from "framer-motion"
import { useState } from 'react'
import emailjs from "emailjs-com"
import Swal from "sweetalert2"

export const Contact = () => {

  const [validate, setValidate] = useState(false);

  const [mailValidation, setMailValidation] = useState(false);

  const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const validateEmail = () => {
	(validEmail.test(values.email)) ? setMailValidation(true) : setMailValidation(false);
  } 
  
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    validateEmail();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  };

  const handleForm = (e) => {
    e.preventDefault();
    setValidate(true);
    if(values.name && mailValidation === true && values.message){
      emailjs.sendForm("service_2adn4qg","template_bbejjgg",e.target,"9lkmUyUuS6TrPmYdK")    
      Swal.fire(
        'Mensaje Enviado!',
        'Gracias por contactarme, respondere a la brevedad!',
        'success'
      )
    };
  }


  return (
    <motion.div inicial={{ opacity: 0, }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <section id="contact" className="contact sec-pad dynamicBg">
        <div className="main-container">
          <h2 className="heading heading-sec heading-sec__mb-med">
            <span className="heading-sec__main heading-sec__main--lt">Contacto</span>
          </h2>
          <div className="contact__form-container">
            <form action="#" className="contact__form" onSubmit={handleForm}>
              <div className="contact__form-field">
                <label className="contact__form-label" for="name">Nombre</label>
                <input
                  placeholder="Ingrese Su Nombre"
                  type="text"
                  className="contact__form-input"
                  name="name"
                  id="name"
                  autocomplete="off"
                  value={values.name}
                  onChange={handleInputChange}
                />
                {validate === true &&  !values.name && <p className='error_message'>Debe ingresar un nombre valido.</p>}
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" for="email">Email</label>
                <input
                  placeholder="Ingrese Su Nombre"
                  type="text"
                  className="contact__form-input"
                  name="email"
                  id="email"
                  autocomplete="off"
                  value={values.email}
                  onChange={handleInputChange}
                />
                {validate === true && mailValidation == false && <p className='error_message'>Debe ingresar un email valido.</p>}
              </div>
              <div className="contact__form-field">
                <label className="contact__form-label" for="message">Mensaje</label>
                <textarea
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Ingrese Su Nombre"
                  name="message"
                  id="message"
                  autocomplete="off"
                  value={values.message}
                  onChange={handleInputChange}
                ></textarea>
                {validate === true && !values.message && <p className='error_message'>Debe ingresar un mensaje valido.</p>}
              </div>
              <button type="submit" className="btn btn--theme contact__btn">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  )
}


