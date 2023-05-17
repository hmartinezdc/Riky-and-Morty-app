import React from 'react';
import PropTypes from 'prop-types';
import './Location.css';

const Location = ({ name, type, dimension, residents }) => {
  return (
    <section className="section__location">
      <h2>
        <span>Name: </span> {name}
      </h2>
      <ul className="section__description">
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

Location.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired,
  residents: PropTypes.array.isRequired,
};

export default Location;
