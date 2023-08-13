import React from 'react'
import { useNavigate } from 'react-router-dom'


function Price() {
    const navigate = useNavigate();

    const handlePurchase = (price, planType, planDuration) => {
        navigate('/payment', { state: { price: price, planType: planType, planDuration: planDuration } });
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
                <div className="col-lg-3">
                    <div className="pricing-item-regular">
                        <span className="price">$1</span>
                        <h4>basic</h4>
                        {/* <div className="icon">
                            <img src="assets/images/pricing-table-01.png" alt="" />
                        </div> */}
                        <ul>
                            <li>Lorem Ipsum Dolores</li>
                            <li>1 Day</li>
                            <li className="non-function">Life-time Support</li>
                            <li className="non-function">Premium Add-Ons</li>
                            <li className="non-function">Fastest Network</li>
                            <li className="non-function">More Options</li>
                        </ul>
                        <div className="border-button" onClick={() => handlePurchase(1, 'basic', 1)}>
                            Purchase
                        </div>

                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="pricing-item-regular">
                        <span className="price">$2</span>
                        <h4>influencer</h4>
                        {/* <div className="icon">
                            <img src="assets/images/pricing-table-01.png" alt="" />
                        </div> */}
                        <ul>
                            <li>Lorem Ipsum Dolores</li>
                            <li>2 Days</li>
                            <li className="non-function">Life-time Support</li>
                            <li className="non-function">Premium Add-Ons</li>
                            <li className="non-function">Fastest Network</li>
                            <li className="non-function">More Options</li>
                        </ul>
                        <div className="border-button" onClick={() => handlePurchase(2, 'influencer', 2)}>
                            Purchase
                        </div>

                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="pricing-item-regular">
                        <span className="price">$5</span>
                        <h4>vip</h4>
                        {/* <div className="icon">
                            <img src="assets/images/pricing-table-01.png" alt="" />
                        </div> */}
                        <ul>
                            <li>Lorem Ipsum Dolores</li>
                            <li>5 Days</li>
                            <li className="non-function">Life-time Support</li>
                            <li className="non-function">Premium Add-Ons</li>
                            <li className="non-function">Fastest Network</li>
                            <li className="non-function">More Options</li>
                        </ul>
                        <div className="border-button" onClick={() => handlePurchase(5, 'vip', 5)}>
                            Purchase
                        </div>

                    </div>
                </div>
                {/* <div className="col-lg-4">
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
                            Purchase
                        </div>
                    </div>
                </div> */}
                <div className="col-lg-3">
                    <div className="pricing-item-regular">
                        <span className="price">$10</span>
                        <h4>vvip</h4>
                        {/* <div className="icon">
                            <img src="assets/images/pricing-table-01.png" alt="" />
                        </div> */}
                        <ul>
                            <li>Lorem Ipsum Dolores</li>
                            <li>10 Days</li>
                            <li>Life-time Support</li>
                            <li>Premium Add-Ons</li>
                            <li>Fastest Network</li>
                            <li>More Options</li>
                            {/* <li className='sign-in-button-li'>

                            </li> */}
                        </ul>
                        <div className="border-button" onClick={() => handlePurchase(10, 'vvip', 10)}>
                            Purchase
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price
