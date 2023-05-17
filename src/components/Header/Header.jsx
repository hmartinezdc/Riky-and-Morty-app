import React from 'react';
import PropTypes from 'prop-types';
import headerImages from '../../assets/headerImgs.json';
import './Header.css';

const Header = ({ isFocused }) => {
  return (
    <header className={isFocused ? 'focused header' : 'header'}>
      {headerImages.map((image) => (
        <img key={image.id} src={image.url} alt="" />
      ))}
    </header>
  );
};

Header.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};
export default Header;
