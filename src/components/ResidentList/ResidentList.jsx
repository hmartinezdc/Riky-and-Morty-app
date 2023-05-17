import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ResidentCard from '../ResidentCard/ResidentCard';
import './ResidentList.css';
import NotFound from '../NotFound/NotFound';
import { usePagination } from '../../hooks/usePagination';

const ResidentList = ({ residents = [] }) => {
  const [quantity, setQuantity] = useState(15);

  const [pageNumber, residentsToShow, changePages, pages] = usePagination(
    residents,
    quantity,
  );

  return (
    <>
      {!residentsToShow.length && <NotFound />}
      {Boolean(residentsToShow.length) && (
        <section className="container__resident_list">
          {residentsToShow.map((resident) => (
            <ResidentCard key={resident} urlResident={resident} />
          ))}
        </section>
      )}

      <div className="container__pagination">
        <button className="pagination__arrow" onClick={() => changePages(pageNumber - 1)}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <div className="pagination__pages">
          {pages.map((i) => (
            <button
              className={
                i === pageNumber
                  ? 'pagination__current-page pagination__current--active'
                  : 'pagination__current-page'
              }
              key={i}
              onClick={() => changePages(i)}
            >
              {i}
            </button>
          ))}
        </div>
        <button className="pagination__arrow" onClick={() => changePages(pageNumber + 1)}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </>
  );
};

ResidentList.propTypes = {
  residents: PropTypes.array.isRequired,
};

export default ResidentList;
