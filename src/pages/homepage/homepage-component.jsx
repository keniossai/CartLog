import React from 'react'

import '../homepage/homepage.styles.scss'


const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Collection</h1>
                    <button className="btn">SHOP NOW</button>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Kids</h1>
                    <button className="btn">SHOP NOW</button>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Accessories</h1>
                    <button className="btn">SHOP NOW</button>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Womens</h1>
                    <button className="btn">SHOP NOW</button>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">Mens</h1>
                    <button type='button' className="btn">SHOP NOW</button>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage