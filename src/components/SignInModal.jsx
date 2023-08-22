import React, { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode'
import { googleLogin } from '../redux/actions/AuthAction';
import { useDispatch } from 'react-redux'
import { GLOBALTYPES } from '../redux/actions/GlobalTypes';



function SignInModal({ display, onClose }) {
  console.log(' :>> ', 'object');
  const dispatch = useDispatch()

  const handleDisplayChange = () => {
    onClose();
  };



  useEffect(() => {
    const handleClickOutside = (event) => {
      const modalContainer = document.getElementById('modal');

      if (modalContainer && !modalContainer.contains(event.target)) {
        onClose();
      }
    };

    if (display) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [display, onClose]);

  const handleGoogleUserData = (response) => {
    let userData = jwt_decode(response.credential)
    dispatch(googleLogin(userData))
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
      }
    })
  }

  const handleError = (response) => {
    console.log('error');
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        error: 'google login failed'
      }
    })
  }


  return (
    <>
      {display && <div className="modal-backdrop"></div>}
      <div id="modal" className="popupContainer" style={{ display: display ? 'block' : 'none' }}>
        <div className="popupHeader">
          <span className="header_title">Login</span>
          <div onClick={handleDisplayChange} className="modal_close"><i className="fa fa-times"></i></div>
        </div>

        <section className="popupBody">
          <div className="social_login">
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
              <GoogleLogin
                onSuccess={handleGoogleUserData}
                onError={handleError}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              />
            </GoogleOAuthProvider>
          </div>


        </section>
      </div>
    </>

  );
}

export default SignInModal;
