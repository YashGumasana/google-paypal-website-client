import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateYoutubeChannelStatus } from '../../redux/actions/user/YoutubeAction';

function Dropdown({ setSelectedChannelInfo }) {
    const token = localStorage.getItem('eonToken')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const dispatch = useDispatch()

    const youtubeDetails = useSelector(state => state.youtube.influencer_details).youtubeChannels;

    useEffect(() => {
        if (youtubeDetails && youtubeDetails.length > 0) {
            setSelectedCategory(youtubeDetails[0].channelTitle);
            const selectedChannel = youtubeDetails.find((detail) => detail.channelTitle === youtubeDetails[0].channelTitle);
            if (selectedChannel) {
                dispatch(updateYoutubeChannelStatus(selectedChannel.channelId, token))
                setSelectedChannelInfo(selectedChannel);
            }
        }
    }, [dispatch, setSelectedChannelInfo, youtubeDetails]);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setIsDropdownOpen(false);
        const selectedChannel = youtubeDetails.find((detail) => detail.channelTitle === category);
        if (selectedChannel) {
            dispatch(updateYoutubeChannelStatus(selectedChannel.channelId, token))
            setSelectedChannelInfo(selectedChannel);
        }
    };

    return (
        <div className="relative inline-block text-left mt-[20px]">
            <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleToggleDropdown}
                aria-expanded={isDropdownOpen}
            >
                {selectedCategory || 'Select Category'}
                <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        {youtubeDetails.map((detail) => (
                            <button
                                key={detail._id}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                onClick={() => handleCategoryChange(detail.channelTitle)}
                                role="menuitem"
                            >
                                {detail.channelTitle}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
