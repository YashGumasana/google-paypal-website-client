import { postDataAPI } from "../../utils/FetchData";
import { GLOBALTYPES } from "./GlobalTypes";


export const googleLogin = (userData) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await postDataAPI(`auth/googleLogin`, userData)


        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: res.data.data.token,
                user: res.data.data.response,
            }
        })
        localStorage.setItem("firstLogin", true)
        localStorage.setItem("token", JSON.stringify(res.data.data.token))

        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.message
            }
        })
    }
    catch (err) {
        console.log("err", err);
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.message
            }
        })
    }
}


export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem('firstLogin')
        localStorage.removeItem('token')
        window.location.href = "/"
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
    }
}