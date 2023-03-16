import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getRandomNumber } from './utils/GetRandomNumber';
import Location from './components/Location/Location';
import ResidentList from './components/ResidentList/ResidentList';
import './App.css';
import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

const App = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [idLocationValue, setIdLocationValue] = useState('');

  const getIdLocationRandom = () => getRandomNumber(1, 126);

  const loadLocationInfo = async (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

    try {
      const res = await axios.get(url);
      setLocationInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const idLocationHandleOnChange = (e) => {
    const newValue = e.target.value;
    if (/^\d{0,3}$/.test(newValue)) setIdLocationValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idLocationValue) {
      loadLocationInfo(idLocationValue);
    } else loadLocationInfo(getIdLocationRandom());
  };
  useEffect(() => {
    loadLocationInfo(getIdLocationRandom());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="header"></header>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form__seach"
          type="search"
          name="id-location"
          value={idLocationValue}
          onChange={idLocationHandleOnChange}
          placeholder="Type a number between 1 and 126"
        />
        <input className="form__submit" type="submit" value="Search" />
      </form>
      {locationInfo && <Location {...locationInfo} />}
      {locationInfo && idLocationValue < 127 ? (
        locationInfo.residents.length === 0 ? (
          <Loader />
        ) : (
          <ResidentList residents={locationInfo.residents} />
        )
      ) : (
        <NotFound />
      )}
      <Footer />
    </>
  );
};

export default App;
