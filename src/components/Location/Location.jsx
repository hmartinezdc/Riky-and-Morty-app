import React from 'react';
import './Location.css';
const Location = ({ name, type, dimension, residents }) => {
  return (
    <section className="section_location">
      <h2>
        <span>Name: </span> {name}
      </h2>
      <ul className="section_description">
        <li>
          <span>Type: </span>
          {type}
        </li>
        <li>
          <span>Dimesion: </span>
          {dimension}
        </li>
        <li>
          <span>Population: </span>
          {residents.length}
        </li>
      </ul>
    </section>
  );
};

export default Location;
