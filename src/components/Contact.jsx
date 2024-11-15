import React, { useState, useEffect } from 'react';
import '../styles/Contact.css'; // Assurez-vous que le CSS est correctement configuré
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonText, setButtonText] = useState('Envoyer');
  
  // État local pour chaque champ du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Fonction pour gérer les changements dans les champs de formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Met à jour la valeur du champ spécifique
    }));
  };

  // Initialisation d'EmailJS
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      emailjs.init('-YFTIKWXB8p5uB2Q_');  // Remplacez avec votre clé EmailJS
    };
    document.body.appendChild(script);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Envoi...');

    const serviceID = 'default_service';
    const templateID = 'template_48lmbap';  // Remplacez avec votre ID de modèle

    // Crée un objet avec les données du formulaire
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    // Envoi du message via emailjs
    emailjs.send(serviceID, templateID, templateParams)
      .then(() => {
        setButtonText('Envoyer');
        setIsSent(true);
        setErrorMessage('');
        setFormData({ name: '', email: '', message: '' }); // Réinitialise le formulaire
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
                name="name"  // Change "from_name" en "name" pour correspondre avec l'état
                id="from_name"
                value={formData.name}  // Lier à formData
                onChange={handleChange}  // Mettre à jour formData au changement
                required
              />
            </div>
            <div className="field">
              <label htmlFor="reply_to">Votre adresse email :</label>
              <input
                type="email"
                name="email"  // Change "reply_to" en "email" pour correspondre avec l'état
                id="reply_to"
                value={formData.email}  // Lier à formData
                onChange={handleChange}  // Mettre à jour formData au changement
                required
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message :</label>
              <textarea
                name="message"  // Change "message" en "message" pour correspondre avec l'état
                id="message"
                value={formData.message}  // Lier à formData
                onChange={handleChange}  // Mettre à jour formData au changement
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
