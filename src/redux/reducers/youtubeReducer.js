import { YOUTUBE_TYPES } from "../actions/user/YoutubeAction";

const initialState = {
    loading: false,
    // view: '',
    influencer_details: {}
    // past_bid: [],
}

const youtubeReducer = (state = initialState, action) => {
    switch (action.type) {
        case YOUTUBE_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload.loading
            }

        case YOUTUBE_TYPES.INFLUENCER_DETAILS:
            return {
                ...state,
                influencer_details: action.payload.influencer_details
            }

        default:
            return state;
    }
}


export default youtubeReducer;
