import React from 'react';

export const FavoritesItem = ({ advert }) => {
  return (
    <div key={advert.id}>
      <img src={advert.img} alt={`Car ${advert.make} ${advert.model}`} />
      <div>
        <p>
          {advert.make}, {advert.year}
        </p>
        <p>{advert.rentalPrice}</p>
      </div>
    </div>
  );
};

export default FavoritesItem;
