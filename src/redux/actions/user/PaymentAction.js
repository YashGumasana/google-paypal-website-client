import { postDataAPI } from "../../../utils/FetchData";
import { GLOBALTYPES } from "../GlobalTypes";


export const getOrderPaypalDetails = ({ data, token }) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await postDataAPI(`user/getPaypalOrderDetails`, data, token)


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

