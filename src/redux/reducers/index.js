import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
// import payment from './paymentReducer'


export default combineReducers({
    auth,
    alert,
    // payment
})