import React from 'react';
import { nanoid } from 'nanoid';

import CatalogItem from '../CatalogItem/CatalogItem';

import css from './CatalogList.module.css';

const CatalogList = ({ adverts }) => {
  return (
    <ul className={css.catalogWrap}>
      {adverts.map(advert => (
        <CatalogItem key={nanoid()} advert={advert} />
      ))}
    </ul>
  );
};

export default CatalogList;
