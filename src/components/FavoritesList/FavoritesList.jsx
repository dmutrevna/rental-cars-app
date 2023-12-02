import React from 'react';
import { nanoid } from 'nanoid';

import FavoritesItem from '../FavoritesItem/FavoritesItem';

export const FavoritesList = ({ adverts }) => {
  return (
    <div>
      {adverts.map(advert => (
        <FavoritesItem key={nanoid()} advert={advert} />
      ))}
    </div>
  );
};

export default FavoritesList;
