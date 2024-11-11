import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import Header from '../component/Header'

export default function HomePage() {
    return (
        <div>
            <Header title={'About Us'} imgSrc={Headerbackgroundbrands} />
            <Breadcrumb />
        </div>
    )
}
