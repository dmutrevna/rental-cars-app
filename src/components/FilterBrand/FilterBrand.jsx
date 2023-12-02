import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setFilters } from '../../redux/advertsSlice';

import css from './FilterBrand.module.css';

const FilterBrand = () => {
  const dispatch = useDispatch();
  const makes = useSelector(state => state.adverts.data.map(item => item.make));

  const handleBrandChange = e => {
    const selectedMake = e.target.value;
    dispatch(setFilters(selectedMake));
  };

  return (
    <div className={css.filterWrap}>
      <label htmlFor="brand" className={css.filterBrand}>
        Car Brand:
      </label>
      <select id="brand" onChange={handleBrandChange}>
        <option value="">All Brands</option>
        {makes &&
          Array.from(new Set(makes)).map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
      </select>
    </div>
  );
};

export default FilterBrand;
