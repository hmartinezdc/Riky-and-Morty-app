import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ResidentInfo.css';
import GetStatus from '../../utils/GetStatus';

const ResidentInfo = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const loadResidentInfo = async () => {
    try {
      const res = await axios.get(urlResident);
      setResidentInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadResidentInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {residentInfo && (
        <article className="resident__info">
          <div className="resident__info__img">
            <img src={residentInfo.image} alt={residentInfo.name} />
          </div>
          <h3>{residentInfo.name}</h3>
          <ul className="resident__description">
            <li>
              <span>Specie: </span>
              {residentInfo.species}
            </li>
            <li>
              <span>{GetStatus(residentInfo.status)} </span>
              {residentInfo.status}
            </li>
            <li>
              <span>Origen: </span>
              {residentInfo.origin.name}
            </li>
            <li>
              <span>
                Appearance<br></br> in episodes:
              </span>
              {residentInfo.episode.length}
            </li>
          </ul>
        </article>
      )}
    </>
  );
};

export default ResidentInfo;
