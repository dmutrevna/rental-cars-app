import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CatalogList from '../../components/CatalogList/CatalogList';
import { loadAdverts } from '../../redux/advertsOperations';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(state => state.adverts.data);
  const status = useSelector(state => state.adverts.status);
  const error = useSelector(state => state.adverts.error);

  useEffect(() => {
    dispatch(loadAdverts());
  }, [dispatch]);

  return (
    <div>
      <h1>Car Catalog</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error loading adverts: {error}</p>}
      {status === 'successful' && <CatalogList adverts={adverts} />}
      <button>Load more</button>
    </div>
  );
};

export default CatalogPage;
