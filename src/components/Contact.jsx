import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContactForm } from '../redux/store';
import '../styles/Contact.css'; 

const Contact = () => {
  const dispatch = useDispatch();
  const { name, email, message } = useSelector((state) => state.contactForm);

  const handleChange = (e) => {
      const { name, value } = e.target;
      dispatch(updateContactForm(name, value));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Formulaire soumis:', { name, email, message });
  };

  return (
      <div className="contact-wrapper">
          <h2>Contactez-moi</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Nom :</label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
              />

              <label htmlFor="email">Email :</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
              />

              <label htmlFor="message">Message :</label>
              <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleChange}
              ></textarea>

              <button type="submit">Envoyer</button>
          </form>
      </div>
  );
};

export default Contact;
