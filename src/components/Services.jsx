import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                            <h4>Amazing <em>Services &amp; Features</em> for you</h4>
                            <img src="assets/images/heading-line-dec.png" alt="" />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto error labore, temporibus rerum quae consectetur consequuntur quidem, impedit veniam iure expedita illo sapiente.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="service-item first-service">
                            <div className="icon"></div>
                            <h4>App Maintenance</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, modi?</p>
                            <div className="text-button">
                                <Link to="/">Read More <i className="fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="service-item second-service">
                            <div className="icon"></div>
                            <h4>Rocket Speed of App</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium? Cupiditate, nostrum!</p>
                            <div className="text-button">
                                <Link to="/">Read More <i className="fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="service-item third-service">
                            <div className="icon"></div>
                            <h4>Multi Workflow Idea</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis. </p>
                            <div className="text-button">
                                <Link to="/">Read More <i className="fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="service-item fourth-service">
                            <div className="icon"></div>
                            <h4>24/7 Help &amp; Support</h4>
                            <p>Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg photo booth quinoa and fashion axe.</p>
                            <div className="text-button">
                                <Link to="/">Read More <i className="fa fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
