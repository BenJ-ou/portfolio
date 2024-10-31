import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContactForm } from '../redux/store';
import '../styles/Contact.css'; 

const Contact = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez traiter le formulaire ou le stocker dans Redux
    dispatch(updateContactForm(formData));
    // Réinitialiser le formulaire après l'envoi
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contactez-moi</h2>
      <label htmlFor="name">Nom</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default Contact;
