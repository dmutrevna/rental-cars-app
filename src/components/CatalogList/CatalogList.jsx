import React from 'react'
import CatalogItem from '../CatalogItem/CatalogItem'

const CatalogList = ({ adverts }) => {
  return (
    <div>
      {adverts.map((advert) => (
        <CatalogItem key={advert.id} advert={advert} />
      ))}
    </div>
  )
}

export default CatalogList
