import { REPORT_TYPES } from "../actions/user/ReportAction"

const initialState = {
    loading: false,
    view: '',
    statistics: []
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
        case REPORT_TYPES.GET_STATISTICS:
            return {
                ...state,
                statistics: action.payload.statistics
            }

        default:
            return state;
    }
}


export default reportReducer;
