import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

const SearchForm = ({ onSubmit, handleFocus, handleBlur }) => {
  const [searchLocationId, setSearchLocationId] = useState('');
  const [errorSearch, setErrorSearch] = useState('');

  const idLocationHandleOnChange = (e) => {
    const newValue = e.target.value;

    if (isNaN(Number(newValue))) {
      setErrorSearch('No se admite letras, espacios ni simbolos');
    } else if (!/^\d{0,3}$/.test(Number(newValue))) {
      setErrorSearch('Digite solo numeros de 1 a 3 caracteres');
    } else if (Number(newValue) > 126) {
      setErrorSearch('Digite un numero entre 1 y 126');
    } else {
      setErrorSearch('');
    }
    if (/^\d{0,3}$/.test(newValue)) setSearchLocationId(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorSearch) return;
    onSubmit(searchLocationId);
    setSearchLocationId('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__container">
        <input
          className="form__seach"
          type="text"
          value={searchLocationId}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={idLocationHandleOnChange}
          placeholder="Escribe un numero entre 1 - 126"
        />
        <input className="form__submit" type="submit" value="Search" />
      </div>
      <p>{errorSearch}</p>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default SearchForm;
