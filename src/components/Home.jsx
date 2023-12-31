import React, { useEffect, useState } from 'react'
import { Audio } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { getUserYoutubeDetails, youtubSignIn } from '../redux/actions/user/YoutubeAction'
import Typed from 'react-typed';
import Dropdown from './modal/DropDown';
import SubscribeButton from './plan/BasicPlan';



function Home() {
    const token = localStorage.getItem('eonToken')
    const isYoutubeSignIn = localStorage.getItem('isYoutubeSignIn')
    const loading = useSelector(state => state.youtube.loading)
    const influencer_details = useSelector(state => state.youtube.influencer_details)
    const [selectedChannelInfo, setSelectedChannelInfo] = useState(null);
    // const [reloadComponent, setReloadComponent] = useState(false);


    const dispatch = useDispatch()

    useEffect(() => {
        if (isYoutubeSignIn) {
            dispatch(getUserYoutubeDetails(token))
        }
    }, [dispatch, isYoutubeSignIn, token])

    const handleYoutubeSignIn = (e) => {
        e.preventDefault();
        dispatch(youtubSignIn(token))
    }

    return (

        <>
            {/* <SubscribeButton /> */}
            <div className="container max-w-[1400px]  text-white">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row home-container" >
                            <div className='yt-signin flex items-center justify-center bg-gray-900 p-[40px]  rounded-lg shadow-lg' >
                                {
                                    token ?
                                        <>
                                            {
                                                !loading && !isYoutubeSignIn &&
                                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                                                    <h3 className='text-white'>1. Sign In with youtube channel</h3>
                                                    <button style={{ backgroundColor: "white", color: "red" }} className='yt-signin-button' onClick={handleYoutubeSignIn}>Sign In</button>
                                                </div>
                                            }
                                            {
                                                loading && <Audio
                                                    height="80"
                                                    width="80"
                                                    radius="9"
                                                    color="blue"
                                                    ariaLabel="loading"
                                                    wrapperStyle
                                                    wrapperClass
                                                />
                                            }
                                            {
                                                !loading && isYoutubeSignIn && influencer_details &&
                                                <div className='flex items-center flex-col'>
                                                    <div className="user-info-container">
                                                        <div className="label"><span >Email:  </span>{influencer_details?.email}</div>
                                                        <div className="label"><span >Channel ID:  </span>{selectedChannelInfo ? selectedChannelInfo.channelId : ''}</div>
                                                        <div className="label"><span >Channel Title:  </span>{selectedChannelInfo ? selectedChannelInfo.channelTitle : ''}</div>
                                                    </div>
                                                    <Dropdown setSelectedChannelInfo={setSelectedChannelInfo} />
                                                    <button style={{ backgroundColor: "white" }} className='yt-signin-button' onClick={handleYoutubeSignIn}>Sign In With Onther Channel</button>
                                                </div>
                                            }
                                        </>
                                        : <h3 className='text-black' style={{ marginBottom: "40px", fontSize: "30px" }}>
                                            <Typed
                                                strings={['Hello,Sign in now to access our services.']}
                                                typeSpeed={40}
                                                backSpeed={50}
                                                loop
                                            /></h3>
                                }

                            </div>
                            {/* <div className="col-lg-6 align-self-center">
                            <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h4 style={{ color: "white" }}>Sign in with Youtube channel </h4>
                                       
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="white-button first-button scroll-to-section" >
                                            <button >Sign In</button>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div> */}
                            {/* <div className="col-lg-6">
                            <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img src="/assets/images/slider-dec.png" alt="" />
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home
