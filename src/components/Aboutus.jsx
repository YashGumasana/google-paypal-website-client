import React from 'react'
import { Link } from 'react-router-dom'

function Aboutus() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 align-self-center">
                    <div className="section-heading">
                        <h4>About <em>What We Do</em> &amp; Who We Are</h4>
                        <img src="assets/images/heading-line-dec.png" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="box-item">
                                <h4><Link href="/">Maintance Problems</Link></h4>
                                <p>Lorem Ipsum Text</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box-item">
                                <h4><Link to="#">24/7 Support &amp; Help</Link></h4>
                                <p>Lorem Ipsum Text</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box-item">
                                <h4><Link to="#">Fixing Issues About</Link></h4>
                                <p>Lorem Ipsum Text</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="box-item">
                                <h4><Link to="#">Co. Development</Link></h4>
                                <p>Lorem Ipsum Text</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor idunte ut labore et dolore adipiscing  magna.</p>
                            {/* <div className="gradient-button">
                                <Link to="#">Start 14-Day Free Trial</Link>
                            </div>
                            <span>*No Credit Card Required</span> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-image">
                        <img src="assets/images/about-right-dec.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus
