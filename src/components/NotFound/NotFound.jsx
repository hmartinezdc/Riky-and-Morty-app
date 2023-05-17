import React from 'react';
import './NotFound.css';
const NotFound = () => {
  return (
    <>
      <h3 className="not__found-title">No hay habitantes en esta dimensión</h3>
      <div className="not__found">
        <img src="/NotFound.png" alt="not found riky and Morty" />
      </div>
    </>
  );
};

export default NotFound;
