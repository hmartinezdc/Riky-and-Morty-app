import React, { useEffect, useState } from 'react';
import { getRandomNumber } from './utils/GetRandomNumber';
import { getLocationById } from './services/getLocationById';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import Location from './components/Location/Location';
import ResidentList from './components/ResidentList/ResidentList';
import Footer from './components/Footer/Footer';
import SearchForm from './components/SearchForm/SearchForm';
import './App.css';

const App = () => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const getIdRandom = () => getRandomNumber(1, 126);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const loadLocationInfo = async (LocationId) => {
    const locationData = await getLocationById(LocationId);
    setLocationInfo(locationData);
  };

  const handleSendSubmit = (id) => {
    if (id) {
      loadLocationInfo(id);
    } else loadLocationInfo(getIdRandom());
  };

  useEffect(() => {
    loadLocationInfo(getIdRandom());
  }, []);

  return (
    <>
      <Header isFocused={isFocused} />
      {locationInfo ? (
        <>
          <SearchForm
            onSubmit={handleSendSubmit}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            isFocused={isFocused}
          />
          <Location {...locationInfo} />
        </>
      ) : (
        <Loading />
      )}
      {locationInfo && <ResidentList residents={locationInfo.residents} />}
      {/* <ResidentList residents={locationInfo?.residents} /> */}
      <Footer />
    </>
  );
};

export default App;
