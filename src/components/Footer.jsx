import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="section-heading">
                        <h4>Contact Us</h4>
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-3">
                    <form id="search" action="#" method="GET">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                                <fieldset>
                                    <input type="address" name="address" className="email" placeholder="Email Address..." autoComplete="on" required />
                                </fieldset>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                                <fieldset>
                                    <button type="submit" className="main-button">Subscribe Now <i className="fa fa-angle-right"></i></button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                <div className="col-lg-3">
                    <div className="footer-widget">
                        <h4>Contact Us</h4>
                        <p>Rio de Janeiro - RJ, 22795-008, Brazil</p>
                        <p><Link to="#">010-020-0340</Link></p>
                        <p><Link to="#">info@company.co</Link></p>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="footer-widget">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><Link to="#">Free Apps</Link></li>
                            <li><Link to="#">App Engine</Link></li>
                            <li><Link to="#">Programming</Link></li>
                            <li><Link to="#">Development</Link></li>
                            <li><Link to="#">App News</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="#">App Dev Team</Link></li>
                            <li><Link to="#">Digital Web</Link></li>
                            <li><Link to="#">Normal Apps</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer-widget">
                        <h4>About Our Company</h4>
                        <div className="logo" style={{ color: "white", fontWeight: "bold" }}>
                            Website
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="copyright-text">
                        <p>Copyright © 2023 Webisite. All Rights Reserved.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
