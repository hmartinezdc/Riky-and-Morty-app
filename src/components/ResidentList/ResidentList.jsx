import React from 'react';
import ResidentInfo from '../ResidentInfo/ResidentInfo';
import './ResidentList.css';
const ResidentList = ({ residents }) => {
  return (
    <section className="container__resident_list">
      {residents.map((resident) => (
        <ResidentInfo key={resident} urlResident={resident} />
      ))}
    </section>
  );
};

export default ResidentList;
