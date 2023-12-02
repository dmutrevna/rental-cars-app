import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CatalogList from '../../components/CatalogList/CatalogList';
import FilterBrand from '../../components/FilterBrand/FilterBrand';
import { loadAdvertsOperation } from '../../redux/advertsOperations';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(state => state.adverts.data);
  const status = useSelector(state => state.adverts.status);
  const error = useSelector(state => state.adverts.error);
  const [currentPage, setCurrentPage] = useState(1);
  const [isButtonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    dispatch(loadAdvertsOperation()).then(() => {
      setButtonVisible(true);
    });
  }, [dispatch]);

  const handleLoadMore = async () => {
    setButtonVisible(false);
    const nextPage = currentPage + 1;
    await dispatch(loadAdvertsOperation(nextPage));
    setCurrentPage(nextPage);
    setButtonVisible(true);
  };

  return (
    <div>
      <FilterBrand />
      {status === 'loading'}
      {status === 'failed' && <p>Error loading adverts: {error}</p>}
      {status === 'successful' && <CatalogList adverts={adverts} />}
      {isButtonVisible && (
        <button onClick={handleLoadMore} className={css.buttonLoad}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
