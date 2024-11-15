import React, { useState, useEffect } from 'react';
import '../styles/Contact.css'; 
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonText, setButtonText] = useState('Envoyer');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      emailjs.init('-YFTIKWXB8p5uB2Q_');
    };
    document.body.appendChild(script);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Envoi...');

    const serviceID = 'default_service';
    const templateID = 'template_48lmbap';

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams)
      .then(() => {
        setButtonText('Envoyer');
        setIsSent(true);
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' });
      }, (err) => {
        setButtonText('Envoyer');
        setErrorMessage('Une erreur est survenue lors de l\'envoi.');
        console.error('Erreur d\'envoi:', err.text);
      });
  };

  return (
    <>
      <h1 className="contact-title">Prendre contact</h1>
      <div className="contact-container">
        {isSent ? (
          <p className="success-message">Votre message a été envoyé avec succès !</p>
        ) : (
          <form id="form" className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="from_name">Nom :</label>
              <input
                type="text"
                name="name"
                id="from_name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="reply_to">Votre adresse email :</label>
              <input
                type="email"
                name="email"
                id="reply_to"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message :</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <input type="submit" id="button" value={buttonText} />
          </form>
        )}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </>
  );
};

export default Contact;
