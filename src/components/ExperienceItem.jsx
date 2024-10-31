import React from 'react';

const ExperienceItem = ({ icon, title, year, location, description }) => {
  return (
    <section>
      <i className={`icon fas ${icon}`}></i>
      <div className="details">
        <span className="title">{title}</span>
        <span>{year}</span>
      </div>
      <p>{location}</p>
      <i>{description}</i>
    </section>
  );
};

export default ExperienceItem;
