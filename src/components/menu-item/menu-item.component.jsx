import React from 'react'
import './menu-item-styles.scss'

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
     <div className="background-image"
         style={{
        backgroundImage: `url(${imageUrl})`
    }}
     />
        <div className="content">
            <span className="title">{title.toUpperCase()}</span>
            <button className="btn">SHOP NOW</button>
        </div>
    </div>
)


export default MenuItem 