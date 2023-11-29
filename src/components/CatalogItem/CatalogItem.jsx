import React from 'react'

const CatalogItem = ({ advert }) => {
  return (
    <div key={advert.id}>
      <img
        src={advert.img}
        alt={`Car ${advert.make} ${advert.model}`}
        style={{ width: '274px', height: 'auto' }}
      />
      {advert.id} - {advert.make}
    </div>
  )
}

export default CatalogItem
