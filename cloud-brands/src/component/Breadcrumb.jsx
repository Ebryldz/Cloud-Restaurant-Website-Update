import React from 'react'
import '../css/Breadcrumb.css';
import '../css/Search.css';
import Searchicon from '../images/search-icon.png';

export default function Breadcrumb() {
    return (
        <div className="container-fluid mt-2 mb-5">
            <ul className="my-breadcrumb unstyled-list">
                <li><a href="index.html">HOME</a></li>
                <li><a href="brands.html">Our Brands</a></li>
            </ul>
            <div className="search-button">
                <input type="search" placeholder="search" name="brandsSearch" />
                <img className="search-icon" src={Searchicon} alt="search" width="30px" height="30px" />
            </div>
        </div>

    )
}
