import React from 'react'
import Header from '../component/Header'
import Breadcrumb from '../component/Breadcrumb'
import Headerbackgroundbrands from '../images/header-background-brands.jpg';
import Locationicon from '../images/location-icon.png';
import Callicon from '../images/call-icon.png';

export default function ContactPage() {
    return (
        <div>
            <Header title={'Contact'} imgSrc={Headerbackgroundbrands} />
            <Breadcrumb />
            Contact
            <main>

                <div className="container-fluid mt-5">
                    <div className="row px-5">
                        <div className="col-6">
                            <img src={Locationicon} alt="search" width="30px" height="30px" />
                            <span className="contact-span">GENERAL CENTER</span>
                            <p className="fs-4 text-black mt-3">Kuleli, Çengelköy, Kuleli Cd. 58/1,<br /> 34680 Üsküdar/İstanbul</p>
                            <a className="text-secondary"
                                href="https://www.google.com/maps/dir//kuleli+askeri+lisesi+adres/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x14cac9da385b5999:0x255f42fb140fd33c?sa=X&ved=1t:3061&ictx=111">SHOW
                                ON MAP
                            </a>
                        </div>

                        <div className="col-6 fs-4" style={{
                            textAlign: 'right'
                        }}>
                            <div>
                                <img src={Callicon} alt="search" width="30px" height="30px" />
                                <a className="text-black fs-5" href="tel:+90 216 777 77 77">
                                    +90 216 777 77 77
                                </a>
                            </div>
                            <div className="mt-3">
                                <a className="text-black" href="mailto:contact@cloud.com.tr">
                                    contact@cloud.com.tr
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="row ">
                        <div className="col-12">
                            <div className="fs-3 fw-bold ta-center py-4">
                                <a className="text-black">WOULD YOU LIKE TO GET NEWS FROM US?</a>
                            </div>
                        </div>
                    </div>


                    <form>
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label for="full-name-input" className="form-label">Name & Surname: </label>

                                    <input type="text" placeholder="Enter your full name." className="form-control"
                                        id="full-name-input" />

                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label for="phone-input" className="form-label">Phone:</label>

                                    <input type="text" placeholder="Enter your phone number." className="form-control"
                                        id="phone-input" />

                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label for="e-mail-input" className="form-label">e-mail: </label>

                                    <input type="text" placeholder="Enter your e-mail." className="form-control" id="e-mail-input" />

                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label for="birthday-input" className="form-label">Birthday:</label>

                                    <input type="date" placeholder="Enter your birthday." className="form-control"
                                        id="birthday-input" />

                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <label className="form-label mt-3">I read <a className="text-decoration-underline text-black">term of
                                    services.</a></label>


                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="tos-radio" id="tos-accept-radio" />
                                    <label className="form-check-label" for="tos-accept-radio">
                                        Accept
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="tos-radio" id="tos-decline-radio" />
                                    <label className="form-check-label" for="tos-decline-radio">
                                        Decline
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <label className="form-label mt-3">Commination Preference:</label>


                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="cp-sms-checkbox" id="cp-sms-checkbox" />
                                    <label className="form-check-label" for="cp-sms-checkbox">
                                        SMS
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" name="cp-e-mail-checkbox"
                                        id="cp-e-mail-checkbox" />
                                    <label className="form-check-label" for="cp-e-mail-checkbox">
                                        e-mail
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <label className="form-label mt-3">I agree to my personal preferences and interests being processed
                                    and
                                    shared with Cloud's subsidiaries for the purpose of receiving personalized offers,
                                    advertisements, promotions, marketing and campaigns and increasing customer satisfaction and
                                    providing personalized service in restaurants.</label>


                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="pref-radio" id="pref-yes-radio" />
                                    <label className="form-check-label" for="pref-yes-radio">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="pref-radio" id="pref-no-radio" />
                                    <label className="form-check-label" for="pref-no-radio">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 mt-3 p-5">
                                <button clasName="career-button" type="submit">Submit</button>
                            </div>
                        </div>


                    </form>

                </div>
            </main >
        </div >
    )
}
