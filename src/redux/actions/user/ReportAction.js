import { getDataAPI } from "../../../utils/FetchData"
import { GLOBALTYPES } from "../GlobalTypes"

export const REPORT_TYPES = {
    LOADING: "LOADING",
    GET_VIEW: "GET_VIEW",
    GET_STATISTICS: "GET_STATISTICS"
}

export const getReportsByPython = (token) => async (dispatch) => {
    try {
        dispatch({ type: REPORT_TYPES.LOADING, payload: { loading: true } })
        const res = await getDataAPI(`user/getReportsByPython`, token)


        console.log('res.data.status :>> ', res.data.status);
        console.log('type res.data.status :>> ', typeof res.data.status);
        if (res.data.status === 200) {
            localStorage.setItem("userYoutubeAccessToken", true)
        }
        // dispatch({
        //     type: REPORT_TYPES.GET_VIEW,
        //     payload: {
        //         view: res.data.message
        //     }
        // })
        dispatch({ type: REPORT_TYPES.LOADING, payload: { loading: false } })
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



export const get_all_report_of_user = (token) => async (dispatch) => {
    try {
        dispatch({ type: REPORT_TYPES.LOADING, payload: { loading: true } })
        const res = await getDataAPI(`user/get_all_report_of_user`, token)

        dispatch({
            type: REPORT_TYPES.GET_STATISTICS,
            payload: {
                statistics: res?.data?.data?.report
            }
        })
        dispatch({ type: REPORT_TYPES.LOADING, payload: { loading: false } })

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