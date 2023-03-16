import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <>
      <h2 className="portal">This dimension has no population</h2>
      <div class="loader">
        <img src="/Portal.webp" alt="portal" />
      </div>
    </>
  );
};

export default Loader;
