import React from 'react';
import { useSelector } from 'react-redux';
import CatalogItem from '../../components/CatalogItem/CatalogItem';

import css from './FavoritesPage.module.css';

export const FavoritesPage = () => {
  const selectedAdverts = useSelector(state => state.favorites.selectedAdverts);

  return (
    <>
      {selectedAdverts.length > 0 ? (
        <ul className={css.favoritesWrap}>
          {selectedAdverts.map(advert => (
            <CatalogItem key={advert.id} advert={advert} />
          ))}
        </ul>
      ) : (
        <div className={css.emptyContainer}>
          <p className={css.favoritesEmpty}>
            No favorites yet. Add some from the catalog!
          </p>
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
