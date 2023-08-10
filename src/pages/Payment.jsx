import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { logout } from '../redux/actions/AuthAction';
import { useDispatch } from 'react-redux';
import { getOrderPaypalDetails } from '../redux/actions/user/PaymentAction';
// import jwt_decode from 'jwt-decode'
const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;






function Payment() {
    const dispatch = useDispatch()
    const location = useLocation();
    const selectedPrice = location.state?.price;
    const planType = location.state?.planType;
    const token = localStorage.getItem('token')

    // useEffect(() => {
    //     // dispatch({
    //     //     type: GLOBALTYPES.ALERT,
    //     //     payload: {
    //     //     }
    //     // })
    //     if (alert.success) {
    //         navigate('/')
    //     }
    // }, [navigate, dispatch, alert.success])



    return (
        <>
            <header className=" header-area header-sticky position-fixed bg-light wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s" >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Link to="/" className="logo" >
                                    <img src="/assets/images/logo.png" alt="Chain App Dev" />
                                </Link>
                                <div style={{ display: "flex", alignItems: "center", gap: "20px", color: "black", fontWeight: "500" }}>
                                    <Link to="/">Home</Link>
                                    <div className="gradient-button">
                                        <div id="modal_trigger" onClick={() => dispatch(logout())}>Sign Out</div>
                                    </div>
                                </div>
                                {/* <ul className={showMenu ? "nav nav-flex" : "nav"} id='header-nav-ul' >
                        {/* Use ScrollLink from react-scroll */}

                                {/* Add other navigation items with smooth scrolling */}
                                {/* </ul> */}

                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <div className='paypal-main'>
                <div className='paypal-pop-up'>
                    <div className='selected-price-div'>Payment : ${selectedPrice}</div>
                    <PayPalScriptProvider options={{
                        'client-id': clientId,

                    }}>
                        <PayPalButtons
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: selectedPrice, // Replace with the amount you want to charge
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={(data, actions) => {
                                data.price = selectedPrice
                                data.planType = planType
                                console.log('data :>> ', data);
                                dispatch(getOrderPaypalDetails({ data, token }))


                            }}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>

        </>
    )
}

export default Payment
