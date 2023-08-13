import React from 'react'
import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { getReportsByPython } from '../redux/actions/user/ReportAction'

function Services() {
    // const token = localStorage.getItem('token')
    // const userYoutubeAccessToken = localStorage.getItem('userYoutubeAccessToken')
    // const loading = useSelector(state => state.report.loading)
    // const view = useSelector(state => state.report.view)

    // console.log('userYoutubeAccessToken :>> ', userYoutubeAccessToken);
    // const dispatch = useDispatch()

    // const handleService = (e) => {
    //     e.preventDefault();
    //     dispatch(getReportsByPython(token))
    // }

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
                            <h4>Get View</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium? Cupiditate, nostrum!</p>

                            {/* {loading && <Audio
                                height="80"
                                width="80"
                                radius="9"
                                color="blue"
                                ariaLabel="loading"
                                wrapperStyle
                                wrapperClass
                            />} */}
                            {/* {
                                !loading && view && <p>{view}</p>
                            } */}
                            {/* {!loading && token && !userYoutubeAccessToken && <div className="border-button" style={{ borderRadius: "5px" }} onClick={handleService} disabled={loading}>
                                Click me
                            </div>} */}
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="service-item second-service">
                            <div className="icon"></div>
                            <h4>Rocket Speed of App</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, praesentium? Cupiditate, nostrum!</p>
                            {/* <Audio
                                height="80"
                                width="80"
                                radius="9"
                                color="blue"
                                ariaLabel="loading"
                                wrapperStyle
                                wrapperClass
                            /> */}
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
