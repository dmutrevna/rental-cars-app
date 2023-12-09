import React from 'react';
import { nanoid } from 'nanoid';

import FavoritesItem from '../FavoritesItem/FavoritesItem';

import css from './FavoritesList.module.css';

export const FavoritesList = ({ adverts }) => {
  return (
    <ul className={css.catalogWrap}>
      {adverts.map(advert => (
        <FavoritesItem key={nanoid()} advert={advert} />
      ))}
    </ul>
  );
};

export default FavoritesList;
