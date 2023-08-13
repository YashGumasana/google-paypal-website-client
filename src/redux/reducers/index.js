import { combineReducers } from 'redux'
import auth from './authReducer'
import alert from './alertReducer'
import report from './reportReducer'
import youtube from './youtubeReducer'


export default combineReducers({
    auth,
    alert,
    report,
    youtube
})