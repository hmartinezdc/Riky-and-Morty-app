import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import './ResidentCard.css';
import GetStatus from '../../utils/GetStatus';
import { getCharacterByUrl } from '../../services/getCharacterByUrl';
import Spinner from '../Spinner/Spinner';

const ResidentCard = ({ urlResident }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  useEffect(() => {
    const loadResidentInfo = async () => {
      const residentData = await getCharacterByUrl(urlResident);
      setResidentInfo(residentData);
    };
    loadResidentInfo();
  }, [urlResident]);

  return (
    <>
      {residentInfo ? (
        <article className="resident__info">
          <div className="resident__info__img">
            <img loading="lazy" src={residentInfo.image} alt={residentInfo.name} />
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
              <span>Appearance in episodes:</span>
              {residentInfo.episode.length}
            </li>
          </ul>
        </article>
      ) : (
        <Spinner />
      )}
    </>
  );
};

ResidentCard.propTypes = {
  urlResident: PropTypes.string.isRequired,
};

export default ResidentCard;
