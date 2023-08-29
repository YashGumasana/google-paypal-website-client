import React, { useEffect, useState } from 'react'
import { GLOBALTYPES } from '../redux/actions/GlobalTypes';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDataAPI } from '../utils/FetchData';
import { save_analyze_data } from '../redux/actions/user/FeaturesAction';
import { plansDefault } from '../common/plan';
import Price from './Price';


function Features({ header }) {

    const token = localStorage.getItem('eonToken')
    const isYoutubeSignIn = localStorage.getItem('isYoutubeSignIn')

    const dispatch = useDispatch()

    const buttonsText = [
        'Analyze Demographics',
        'Analyze View Counts',
        'Analyze My Videos',
        'Analyze Ad Revenue',
        'Analyze Trends'
    ];
    const buttons = [
        'demographics',
        'viewCounts',
        'myVideos',
        'adRevenue',
        'trends'
    ];

    const [selectedButtons, setSelectedButtons] = useState({});
    const [selectedStates, setSelectedStates] = useState({});

    const toggleButton = (button) => {
        setSelectedButtons(prevState => ({
            ...prevState,
            [button]: !prevState[button]
        }));
    };

    const saveSelectedButtons = () => {
        // const selectedStates = {};
        buttons.forEach(button => {
            selectedStates[button] = !!selectedButtons[button];
        });

        const allButtonsUnselected = Object.values(selectedStates).every(value => value === false);

        if (allButtonsUnselected) {
            dispatch({
                type: GLOBALTYPES.ALERT,
                payload: {
                    error: 'Please Select The Option'
                }
            })
            setSelectedStates({})

        }
        else {

            if (isYoutubeSignIn) {

                setSelectedStates(selectedStates)
                dispatch(save_analyze_data({ selectedStates, token }))
                // setSelectedStates({})
                setSelectedButtons({});
                console.log('selectedStates :>> ', selectedStates);
            }
            else {
                dispatch({
                    type: GLOBALTYPES.ALERT,
                    payload: {
                        error: 'Please Sign In with your youtube channel'
                    }
                })
            }
        }

    };





    return (
        <>
            <div className="container max-w-[1400px] mt-[50px]" >
                <div className="row bg-gray-900 py-[50px] px-[20px] flex items-center justify-center flex-col">
                    {header ? (
                        <div className="col-lg-8  ">
                            <div className="section-heading flex items-center justify-center" >
                                <h4>Your Current Plan : <em> None</em></h4>
                                {/* <img src="assets/images/heading-line-dec.png" alt="" /> */}
                                {/* <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna.
                                </p> */}
                            </div>
                        </div>
                    ) : null}
                    <div className="max-w-[350px] mx-auto my-[20px]">
                        <div className="flex flex-col space-y-4">
                            {buttons.map((button, index) => (
                                <Button
                                    key={index}
                                    text={buttonsText[index]}
                                    isSelected={selectedButtons[button]}
                                    onClick={() => toggleButton(button)}
                                />
                            ))}
                            <button
                                className="mt-3 px-4 py-[12px] border-2 bg-gray-900 text-white rounded-[6px] "
                                onClick={saveSelectedButtons}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div></div>

        </>
    )
}

export default Features


const Button = ({ text, onClick, isSelected }) => {
    return (
        <button
            className={`px-4 py-[12px]  font-bold ${isSelected ? 'bg-[red] text-white' : 'bg-gray-100 text-gray-700'} rounded-[6px] focus:outline-none`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

