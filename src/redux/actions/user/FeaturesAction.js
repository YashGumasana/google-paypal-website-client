import { postDataAPI } from "../../../utils/FetchData";
import { GLOBALTYPES } from "../GlobalTypes";


export const save_analyze_data = ({ selectedStates, token }) => async (dispatch) => {
    try {
        console.log('selectedStates', selectedStates)
        console.log('token ==', token)
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await postDataAPI(`user/save_analyze_data`, { analyze: selectedStates }, token)


        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.message
            }
        })
        // dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } })


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