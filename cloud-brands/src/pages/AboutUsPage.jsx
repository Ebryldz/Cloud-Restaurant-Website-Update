import React from 'react'
import Headerbackgroundbrands from '../images/header-background-brands.jpg';
import Breadcrumb from '../component/Breadcrumb'
import Header from '../component/Header'
import aboutusimage from '../images/lets-eat-image.jpg';
import aboutusheaderimage from '../images/aboutUsTitle.jpg';
import styles from '../css/Aboutus.module.css'

export default function AboutUsPage({ params }) {
    return (
        <>
            <Header title={'About Us'} imgSrc={aboutusheaderimage} />
            <Breadcrumb />
            <body>
                <main>
                    <div className="container-fluid mt-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-5">
                                <img src={aboutusimage} className={styles.imageAboutUs} />
                            </div>
                            <div className="col-sm-12 col-md-7">
                                <p className="text">
                                    Empowered by its vision and expertise, Cloud has emerged as a global force in theculinary and
                                    entertainment industry, setting new standards with its exceptional brands and innovative
                                    concepts.
                                    <br /><br />
                                    Starting its journey in Istanbul, where culture, flavor, and entertainment converge, Cloud has
                                    expanded its influence through strategic partnerships and international ventures, becoming a
                                    renowned name in the global market.With a presence in over 7 countries and 21 cities, and more
                                    than 77 locations, Cloud offers an unparalleled dining experience across a range of segments.
                                    Our portfolio includes over 6 distinctive concepts and 18 brands, creating iconic destinations
                                    and luxurious spaces worldwide.
                                    <br /><br />
                                    As an industry leader, we are dedicated to elevating standards and introducing fresh
                                    perspectives, ensuring that our brands resonate on the international stage.
                                </p>

                            </div>
                        </div>
                    </div>
                </main>
            </body>


        </>
    )
}
