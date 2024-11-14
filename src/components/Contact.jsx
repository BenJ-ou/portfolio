import React, { useState, useEffect } from 'react';
import '../styles/Contact.css'; 
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Ajout de l'état pour gérer les erreurs

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      emailjs.init('-YFTIKWXB8p5uB2Q_'); // Votre clé publique
    };
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Réinitialisation du message d'erreur
    window.emailjs.send('service_ny4vy5k', 'template_48lmbap', formState)
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true); // Message envoyé
          setFormState({ name: '', email: '', message: '' }); // Réinitialisation du formulaire
        },
        (error) => {
          console.log(error.text);
          setErrorMessage('Une erreur est survenue lors de l\'envoi du message.'); // Affichage du message d'erreur
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Prendre contact</h2>
      {isSent ? (
        <p className="success-message">Votre message a été envoyé avec succès !</p>
      ) : (
        <form className="contact-form" onSubmit={sendEmail}>
          <label className="form-label">
            Nom:
            <input
              className="form-input"
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="form-label">
            Email:
            <input
              className="form-input"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="form-label">
            Message:
            <textarea
              className="form-textarea"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button className="form-button" type="submit">Envoyer</button>
        </form>
      )}
      {/* Affichage du message d'erreur si il y en a */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Contact;
