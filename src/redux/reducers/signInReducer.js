import { GLOBALTYPES } from "../actions/GlobalTypes";

const initialState = {
    signin: false,
}

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.SIGNIN:
            return {
                ...state,
                signin: action.payload.signin
            }
        default:
            return state;
    }
}

export default signInReducer