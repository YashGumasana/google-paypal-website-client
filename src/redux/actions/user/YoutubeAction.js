import { getDataAPI, postDataAPI } from "../../../utils/FetchData"
import { GLOBALTYPES } from "../GlobalTypes"

export const YOUTUBE_TYPES = {
    LOADING: "LOADING",
    INFLUENCER_DETAILS: "INFLUENCER_DETAILS"
    // GET_VIEW: "GET_VIEW",
}

export const youtubSignIn = (token) => async (dispatch) => {
    try {
        dispatch({ type: YOUTUBE_TYPES.LOADING, payload: { loading: true } })

        const res = await getDataAPI(`user/youtubeSignIn`, token)


        console.log('youtubSignIn status :>> ', res.data.status);
        console.log('type res.data.status :>> ', typeof res.data.status);
        if (res.data.status === 200) {
            localStorage.setItem("isYoutubeSignIn", true)
        }
        dispatch({ type: YOUTUBE_TYPES.LOADING, payload: { loading: false } })
        window.location.reload();

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


export const getUserYoutubeDetails = (token) => async (dispatch) => {
    try {
        dispatch({ type: YOUTUBE_TYPES.LOADING, payload: { loading: true } })

        const res = await getDataAPI(`user/getUserYoutubeDetails`, token)


        console.log('getUserYoutubeDetails :>> ', res?.data?.data?.response);

        dispatch({
            type: YOUTUBE_TYPES.INFLUENCER_DETAILS,
            payload: {
                influencer_details: res?.data?.data?.response
            }
        })
        dispatch({ type: YOUTUBE_TYPES.LOADING, payload: { loading: false } })
    } catch (err) {
        console.log("err", err);
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err?.response?.data?.message
            }
        })
    }
}


export const updateYoutubeChannelStatus = (channelId, token) => async (dispatch) => {
    console.log('updateYoutubeChannelStatus')
    try {
        console.log('updateYoutubeChannelStatus :>> ', channelId);


        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })

        console.log('updateYoutubeChannelStatus :>> 2', channelId);
        const res = await postDataAPI(`user/updateYoutubeChannelStatus`, { channelId }, token)


        console.log('getUserYoutubeDetails :>> ', res.data);


        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } })
    } catch (err) {
        console.log("err", err);
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.message
            }
        })
    }
}