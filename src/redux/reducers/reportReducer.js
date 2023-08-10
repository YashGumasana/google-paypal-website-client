import { REPORT_TYPES } from "../actions/user/ReportAction"

const initialState = {
    loading: false,
    view: '',
    // past_bid: [],
}

const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case REPORT_TYPES.LOADING:
            return {
                ...state,
                loading: action.payload.loading
            }
        case REPORT_TYPES.GET_VIEW:
            return {
                ...state,
                view: action.payload.view
            }
        // case REPORT_TYPES.GET_PAST_BIDS_DETAIL:
        //     return {
        //         ...state,
        //         past_bid: action.payload.past_bid_data
        //     }

        default:
            return state;
    }
}


export default reportReducer;
