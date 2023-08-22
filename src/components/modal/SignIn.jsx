import React, { useState } from 'react'
import SignInModal from '../SignInModal'
import { GLOBALTYPES } from '../../redux/actions/GlobalTypes';
import { useDispatch } from 'react-redux';

function SignIn() {
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch({
            type: GLOBALTYPES.SIGNIN,
            payload: {
                signin: false
            }
        })
    }

    return (
        <SignInModal display={true} onClose={handleCloseModal} />
    )
}

export default SignIn
