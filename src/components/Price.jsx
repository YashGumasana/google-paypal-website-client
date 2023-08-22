import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { GLOBALTYPES } from '../redux/actions/GlobalTypes';
import { getDataAPI } from '../utils/FetchData';
import SignInModal from './SignInModal';


function Price() {
    const [activePlan, setActivePlan] = useState('')
    const token = localStorage.getItem('eonToken')
    const navigate = useNavigate();
    const dispatch = useDispatch()



    const handlePurchase = (price, planType, planDuration) => {
        navigate('/payment', { state: { price: price, planType: planType, planDuration: planDuration } });
    };

    const handleSignIn = () => {
        console.log('handleSignIn')
        dispatch({
            type: GLOBALTYPES.SIGNIN,
            payload: {
                signin: true
            }
        })
    }

    useEffect(() => {

        async function getActivePlan() {
            dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
            const res = await getDataAPI(`user/getActivePlan`, token)

            if (res) {
                setActivePlan(res?.data?.data?.response?.planType)
            }

            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: {

                }
            })
        }

        if (token) {
            getActivePlan()
        }

    }, [dispatch, token])

    return (
        <div className="container" >
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="section-heading">
                        <h4>2. We Have The Best Pre-Order <em>Prices</em> You Can Get</h4>
                        <img src="assets/images/heading-line-dec.png" alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={activePlan === 'basic' ? "pricing-item-pro" : "pricing-item-regular"}>
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

                        <div className="border-button"
                            onClick={() => token ? handlePurchase(1, 'basic', 1) : handleSignIn()}
                        >
                            Purchase
                        </div>

                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={activePlan === 'influencer' ? "pricing-item-pro" : "pricing-item-regular"}>
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
                        <div className="border-button" onClick={() => token ? handlePurchase(2, 'influencer', 2) : handleSignIn()}>
                            Purchase
                        </div>

                    </div>
                </div>
                <div className="col-lg-3">
                    <div className={activePlan === 'vip' ? "pricing-item-pro" : "pricing-item-regular"}>
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
                        <div className="border-button" onClick={() => token ? handlePurchase(5, 'vip', 5) : handleSignIn()}>
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
                    <div className={activePlan === 'vvip' ? "pricing-item-pro" : "pricing-item-regular"}>
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
                        <div className="border-button" onClick={() => token ? handlePurchase(10, 'vvip', 10) : handleSignIn()}>
                            Purchase
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price
