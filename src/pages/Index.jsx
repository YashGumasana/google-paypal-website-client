import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import Services from '../components/Services'
import Price from '../components/Price'
import Clients from '../components/Client'
import Aboutus from '../components/Aboutus'
import Footer from '../components/Footer'

function Index() {
    const isAuth = localStorage.getItem('eonToken')

    return (
        <>
            <Header />
            <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                <Home />
            </div>

            {isAuth && <div id="pricing" className="pricing-tables">
                <Price />

            </div>
            }

            <div id="services" className="services section">
                <Services />
            </div>

            <div id="about" className="about-us section">
                <Aboutus />
            </div>

            <div id="clients" className="the-clients">
                <Clients />
            </div>

            <footer id="newsletter">
                <Footer />
            </footer>
        </>
    )
}

export default Index
