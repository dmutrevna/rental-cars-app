import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { IoMdCloseCircleOutline } from 'react-icons/io';

import imageNotFound from '../../img/noImage.jpg';

import css from './ModalCar.module.css';

export const ModalCar = ({ isOpen, onRequestClose, advert }) => {
  const [isLocalModalOpen, setIsLocalModalOpen] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isLocalModalOpen) {
      htmlElement.style.overflow = 'hidden';
    } else {
      htmlElement.style.overflow = '';
    }

    return () => {
      htmlElement.style.overflow = '';
    };
  }, [isLocalModalOpen]);

  const closeLocalModal = () => {
    setIsLocalModalOpen(false);
    onRequestClose();
  };

  useEffect(() => {
    setIsLocalModalOpen(isOpen);
  }, [isOpen]);

  const handleImageError = event => {
    event.target.src = imageNotFound;
  };

  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={isLocalModalOpen}
      onRequestClose={closeLocalModal}
      contentLabel="Car Details"
      appElement={document.getElementById('root')}
    >
      <button onClick={closeLocalModal} className={css.buttonClose}>
        <IoMdCloseCircleOutline className={css.closeIcon} />
      </button>
      <img
        src={advert.img}
        alt={`Car ${advert.make} ${advert.model}`}
        onError={handleImageError}
        className={css.imgModal}
      />
      <p className={css.titleModal}>
        {advert.make}, {advert.year}
      </p>

      <p className={css.modalDescription}>{advert.description}</p>
      <p className={css.modalAbout}>Accessories and functionalities:</p>
      <ul className={css.modalAccessories}>
        {advert.accessories &&
          advert.accessories.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <ul className={css.modalAccessories}>
        {advert.functionalities &&
          advert.functionalities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
      <p className={css.modalRental}>Rental Conditions:</p>
      <div className={css.rental}>
        <p className={css.rentalConditionals}>{advert.rentalConditions}</p>
      </div>
      <ul className={css.priseWrap}>
        <li className={css.mileage}>Mileage:{advert.mileage}</li>
        <li className={css.price}>Price: {advert.rentalPrice}</li>
      </ul>
      <a href={`tel:+380730000000`}>
        <button className={css.buttonRental}>Rental car</button>
      </a>
    </Modal>
  );
};

export default ModalCar;
