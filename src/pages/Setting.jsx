import React from 'react'
import Header from '../components/Header'
import Features from '../components/Features'
import Price from '../components/Price'

function Setting() {
    return (
        <div>
            <Header />
            <Features />
            <Price header={false} />

        </div>
    )
}

export default Setting
