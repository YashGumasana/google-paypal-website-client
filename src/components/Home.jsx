import React from 'react'

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h2>Lorem ipsum dolor sit amet consectetur. </h2>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, nobis! Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    {/* <div className="col-lg-12">
                                        <div className="white-button first-button scroll-to-section">
                                            <a href="#contact">Free Quote <i className="fab fa-apple"></i></a>
                                        </div>
                                        <div className="white-button scroll-to-section">
                                            <a href="#contact">Free Quote <i className="fab fa-google-play"></i></a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img src="/assets/images/slider-dec.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
