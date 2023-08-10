import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import report from './reportReducer'


export default combineReducers({
    auth,
    alert,
    report
})