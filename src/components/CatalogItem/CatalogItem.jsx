import React, { useState } from 'react';
import ModalCar from '../ModalCar/ModalCar';
import { IoMdHeartEmpty } from 'react-icons/io';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';

import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/favoritesSlice';
import imageNotFound from '../../img/noImage.jpg';

import css from './CatalogItem.module.css';

export const CatalogItem = ({ advert }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      dispatch(addToFavorites(advert));
      Notify.success('Added to Favorites!');
    } else {
      dispatch(removeFromFavorites(advert));
      Notify.success('Removed from Favorites!');
    }
  };
  Notify.init({
    success: {
      background: 'var(--button-second-color)',
      textColor: 'white',
    },
  });

  const handleImageError = event => {
    event.target.src = imageNotFound;
  };

  return (
    <li key={advert.id} className={css.catalogItemWrap}>
      <IoMdHeartEmpty
        className={`${css.favoriteIcon} ${isFavorite ? css.favorite : ''}`}
        onClick={toggleFavorite}
      />
      <img
        className={css.catalogImg}
        src={advert.img}
        alt={`Car ${advert.make} ${advert.model}`}
        onError={handleImageError}
      />
      <div className={css.catalogItemTitle}>
        <p>
          {advert.make}, {advert.year}
        </p>
        <p>{advert.rentalPrice}</p>
      </div>
      <button
        className={css.catalogItemButton}
        onClick={() => setIsModalOpen(true)}
      >
        Learn more
      </button>
      <ModalCar
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        advert={advert}
      ></ModalCar>
    </li>
  );
};

export default CatalogItem;
