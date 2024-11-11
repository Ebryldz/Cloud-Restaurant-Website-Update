import React from 'react'
import Header from '../component/Header'
import Careerimagefirst from '../images/career-image-first.jpg';
import Careerimagesecond from '../images/career-image-second.webp';
import Headerbackgroundbrands from '../images/header-background-brands.jpg';
import Breadcrumb from "../component/Breadcrumb.jsx";

export default function CareerPage() {
    return (
        <div>
            <Header title={'Career'} imgSrc={Headerbackgroundbrands} />
            <Breadcrumb />
            <main>
                <div className="container-fluid mt-3">
                    <h3 className="mt-5 mb-4">International Opportunities and Diverse Experiences</h3>
                    <div className="row">
                        <div className="col-sm-7 col-xs-12 ">
                            <ul className="text">
                                <li>
                                    At Cloud, we offer you the chance to explore new cultures and discover job opportunities in
                                    various countries. With your talent and motivation, you can work with innovative and
                                    experienced
                                    teams around the globe. These unique experiences can significantly contribute to both your
                                    personal growth and career path.
                                </li>
                                <li>
                                    Additionally, we provide opportunities to gain experience in different functional roles at
                                    our
                                    headquarters. This will allow you to contribute to our corporate vision while advancing your
                                    own
                                    career goals. Simply keep an eye on our current job postings and apply for the positions
                                    that
                                    best match your interests and skills.
                                </li>
                                <li>
                                    We look forward to working with you and growing together!
                                </li>

                            </ul>

                        </div>
                        <div className="col-sm-5 col-xs-12">
                            <div className="image-box" style={{
                                imageLeft: 30
                            }}>
                                <img src={Careerimagefirst} className="imageAboutUs" />
                            </div>
                        </div>
                    </div>

                    <h3 className="mt-4 mb-4">Learning & Development</h3>
                    <div className="row">
                        <div className="col-sm-5 col-xs-12">
                            <div className="image-box" style={{
                                imageLeft: -30
                            }}>
                                <img src={Careerimagesecond} className="imageAboutUs" />
                            </div>

                        </div>
                        <div className="col-sm-7 col-xs-12 ">
                            <ul className="text">
                                <li>
                                    At Cloud, our Learning & Development mission is centered around your personal growth and
                                    your
                                    contributions to our company. We are committed to designing unique development programs
                                    tailored
                                    to each employee’s competencies and technical needs.
                                </li>
                                <li>
                                    We offer comprehensive support to help you achieve your goals through our strategic
                                    guidance,
                                    career management tools, and performance management systems. Our focus is to ensure that you
                                    have the resources and opportunities necessary to thrive and excel in your role.
                                </li>

                                <li>
                                    Explore our development programs and discover how we can support your career journey at
                                    Cloud.
                                </li>

                            </ul>


                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mt-5 p-5">
                            <button className="career-button">APPLY NOW</button>
                        </div>
                    </div>
                </div>

            </main>

        </div>
    )
}
