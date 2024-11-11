import React from 'react'
import '../css/Footer.css';
import Location from '../images/location-icon.png';
import Call from '../images/call-icon.png';
import Mail from '../images/mail-icon.png';
import Footerlogo from '../images/footer-logo.png';

export default function Footer() {
    return (
        <footer>
            <hr className="footer-line" />

            <div className="container-fluid row mt-5 pt-5">
                <div className="footer-group col-md-6 col-xs-12 px-md-5 py-xs-5 gap-10">

                    <div className="line">
                        <h3 style={{
                            paddingLeft: '25px',
                            fontSize: '25px',
                            paddingBottom: '50px'
                        }}>
                            Contact</h3>
                    </div>
                    <a className="line">
                        <div className="line scale-anim">
                            <img src={Location} alt="search" width="30px" height="30px" />
                            <span>
                                Beylerbeyi, Beylerbeyi Parkı İçi Yolu, 34676 <br />
                                Üsküdar/İstanbul
                            </span>
                        </div>
                    </a>

                    <a className="line" href="tel:05435039871">
                        <div className="line scale-anim">
                            <img src={Call} alt="search" width="30px" height="30px" />
                            <span>
                                0543 503 9871
                            </span>
                        </div>
                    </a>

                    <a className="line" href="mailto:betulebruyildizz@gmail.com">
                        <div className="line scale-anim">
                            <img src={Mail} alt="search" width="30px" height="30px" />
                            <span>
                                betulebruyildizz@gmail.com
                            </span>
                        </div>
                    </a>
                </div>
                <div className="footer-group align-right col-md-6 col-xs-12  px-md-5 py-xs-5 gap-10">
                    <div className="line">
                        <a href="#">
                            Information Society Services
                        </a>
                    </div>
                    <div className="line">
                        <a href="#">
                            Personal Data Protection
                        </a>
                    </div>
                    <div className="line">
                        <a href="#">
                            Term Of Use
                        </a>
                    </div>
                    <div className="line">
                        <a href="#">
                            Cookie Policy
                        </a>
                    </div>

                </div>
            </div>

            <div className="footer-box mx-auto">
                <div className="row">

                    <div className="col-sm-12 md-6 lg-12">
                        <p style={{
                            textAlign: 'center'
                        }}>Special Guest Line for You</p>
                        <a href="#" style={{
                            color: 'black',
                            fontSize: 18,
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}>
                            +90 216 777 77 77
                        </a>
                    </div>
                </div>
            </div>

            <hr style={{
                height: 0.1,
                color: 'black',
                backgroundColor: 'black'
            }} />

            <div className=" container-fluid row">
                <div className="footer-group col-md-6 col-xs-12">
                    <div className="line">
                        <img src={Footerlogo} alt="search" width="80px" height="80px" />
                    </div>
                </div>
                <div className="footer-group col-md-6 col-xs-12 align-right">
                    <div className="line" style={{
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <span style={{
                            fontSize: 14,
                            textAlign: 'right'
                        }}>
                            Copyright 2024 © cloud, All rights reserved
                        </span>
                    </div>
                </div>
            </div>

        </footer>
    )
}
