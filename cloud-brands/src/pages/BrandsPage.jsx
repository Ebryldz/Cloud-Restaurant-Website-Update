import React from 'react'
import Brand from '../component/Brand'
import { brands } from '../data'
import Headerbackgroundbrands from '../images/header-background-brands.jpg';
import Breadcrumb from '../component/Breadcrumb'
import Header from '../component/Header'
import styles from '../css/BrandsPage.module.css'

export default function BrandsPage() {
    return (
        <>
            <Header title={'Brands'} imgSrc={Headerbackgroundbrands} />
            <Breadcrumb />
            <div className={`container-fluid ${styles.brandImageContainer}`}>
                {brands?.map((brand) => (
                    <Brand key={brand.id} brand={brand} />

                ))}
            </div>
        </>
    )
}
