import React from 'react';

export const FavoritesItem = ({ advert }) => {
  return (
    <li key={advert.id}>
      <img src={advert.img} alt={`Car ${advert.make} ${advert.model}`} />
      <div>
        <p>
          {advert.make}, {advert.year}
        </p>
        <p>{advert.rentalPrice}</p>
      </div>
    </li>
  );
};

export default FavoritesItem;
