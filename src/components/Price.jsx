import React from 'react'
import { useNavigate } from 'react-router-dom'


function Price() {
    const navigate = useNavigate();

    const handlePurchase = (price, planType) => {
        navigate('/payment', { state: { price: price, planType: planType } });
    };

    return (
        <div className="container" >
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="section-heading">
                        <h4>We Have The Best Pre-Order <em>Prices</em> You Can Get</h4>
                        <img src="assets/images/heading-line-dec.png" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="pricing-item-regular">
                        <span className="price">$0.01</span>
                        <h4>Standard Plan App</h4>
                        <div className="icon">
                            <img src="assets/images/pricing-table-01.png" alt="" />
                        </div>
                        <ul>
                            <li>Lorem Ipsum Dolores</li>
                            <li>20 TB of Storage</li>
                            <li className="non-function">Life-time Support</li>
                            <li className="non-function">Premium Add-Ons</li>
                            <li className="non-function">Fastest Network</li>
                            <li className="non-function">More Options</li>
                        </ul>
                        <div className="border-button" onClick={() => handlePurchase(0.01, 'Standard')}>
                            Purchase This Plan Now
                        </div>

                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="pricing-item-pro">
                        <span className="price">$0.02</span>
                        <h4>Business Plan App</h4>
                        <div className="icon">
                            <img src="assets/images/pricing-table-01.png" alt="" />
                        </div>
                        <ul>
                            <li>Lorem Ipsum Dolores</li>
                            <li>50 TB of Storage</li>
                            <li>Life-time Support</li>
                            <li>Premium Add-Ons</li>
                            <li className="non-function">Fastest Network</li>
                            <li className="non-function">More Options</li>
                        </ul>
                        <div className="border-button" onClick={() => handlePurchase(0.02, 'Business')}>
                            Purchase This Plan Now
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="pricing-item-regular">
                        <span className="price">$0.03</span>
                        <h4>Premium Plan App</h4>
                        <div className="icon">
                            <img src="assets/images/pricing-table-01.png" alt="" />
                        </div>
                        <ul>
                            <li>Lorem Ipsum Dolores</li>
                            <li>120 TB of Storage</li>
                            <li>Life-time Support</li>
                            <li>Premium Add-Ons</li>
                            <li>Fastest Network</li>
                            <li>More Options</li>
                            {/* <li className='sign-in-button-li'>

                            </li> */}
                        </ul>
                        <div className="border-button" onClick={() => handlePurchase(0.03, 'Premium')}>
                            Purchase This Plan Now
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price
