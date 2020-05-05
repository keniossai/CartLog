import React from 'react'

import './collection-item.styles.scss'


const CollectionItem = ({id, name, price, imageUrl}) => (
  <div className="collection-item">
    <div className="image"
        style={{
            backgroundImage: `url(${imageUrl})` 
        }}
    />
        <div className="collection-footer">
        <span className="name ml-3">{name}</span>
        <span className="price mr-5">{'\u20A6'}{price}</span>
        </div>
  </div>
)

export default CollectionItem