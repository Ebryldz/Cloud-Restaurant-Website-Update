import React, { useState } from 'react'
import '../css/Navbar.css';
import Cloud from '../images/cloud.png';
import Search from './Search';


export default function Navbar({ setPage }) {

    return (
        <header>
            <div className="container-fluid py-4">
                <div className="row">

                    <div className="col-sm-2">
                        <a href="index.html"><img src={Cloud} className="logo" width="100px" /></a>
                    </div>
                    <div className="col-sm-10">
                        <div className="header-right">
                            <nav className="my-navbar">
                                <ul className="unstyled-list">
                                    <li><a href="#"
                                        onClick={() => {
                                            setPage({ name: 'aboutUs' })
                                        }}
                                    >About Us</a></li>
                                    <li><a href="#"
                                        onClick={() => {
                                            setPage({ name: 'brands' })
                                        }}>Brands</a></li>
                                    <li><a href="#"
                                        onClick={() => {
                                            setPage({ name: 'career' })
                                        }}>Career</a></li>
                                    <li><a href="#"
                                        onClick={() => {
                                            setPage({ name: 'contact' })
                                        }}>Contact</a></li>
                                </ul>
                            </nav>
                            <Search />
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}
