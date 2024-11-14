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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => {
      emailjs.init('-YFTIKWXB8p5uB2Q_'); 
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
    window.emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formState)
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setFormState({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log(error.text);
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
    </div>
  );
};

export default Contact;
