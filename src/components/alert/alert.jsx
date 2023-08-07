import React from 'react'
import { useSelector } from 'react-redux'
// import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import Loading from '../loading/loading'
import saberToast from './Toast'
import '../../styles/toaster.css'

const Alert = () => {
    const alert = useSelector(state => state.alert)
    // const dispatch = useDispatch()


    return (
        <div className='alert-container'>

            {alert?.loading && <Loading className='alert-container loading' />}

            {
                alert.error && (
                    saberToast.error({
                        title: 'Error',
                        text: alert.error,
                        delay: 200,
                        duration: 2000,
                        position: "top-right"
                    })
                )
            }
            {
                alert.success && (
                    saberToast.success({
                        title: 'success',
                        text: alert.success,
                        delay: 200,
                        duration: 2000,
                        position: "top-right"
                    })
                )
            }
        </div>
    )
}



export default Alert
