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
        localStorage.setItem("eonToken", JSON.stringify(res.data.data.token))
        if (res.data.data.response.isYoutubeSignIn) {
            localStorage.setItem("isYoutubeSignIn", true)
        }
        // if (res.data.data.response.userYoutubeAccessToken) {
        //     localStorage.setItem("userYoutubeAccessToken", true)
        // }


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
        localStorage.removeItem('eonToken')
        // localStorage.removeItem('userYoutubeAccessToken')
        localStorage.removeItem('isYoutubeSignIn')

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