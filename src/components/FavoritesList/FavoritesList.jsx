import React from 'react';
import { nanoid } from 'nanoid';

import FavoritesItem from '../FavoritesItem/FavoritesItem';

export const FavoritesList = ({ adverts }) => {
  return (
    <ul>
      {adverts.map(advert => (
        <FavoritesItem key={nanoid()} advert={advert} />
      ))}
    </ul>
  );
};

export default FavoritesList;
