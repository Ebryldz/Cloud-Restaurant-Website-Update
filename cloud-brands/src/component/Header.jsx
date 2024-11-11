import React from 'react'
import '../css/Header.css';

export default function Header({ title, imgSrc }) {
    return (
        <div className="container-fluid p-0 position-relative">
            <img src={imgSrc} className="header-title-image" />
            <div className="container-fluid header-title">
                <h1>{title}</h1>
            </div>
        </div>


    )
}
