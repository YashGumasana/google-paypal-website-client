import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import PrivateRoutes from './routing/PrivateRoutes';
import AuthRoutes from './routing/AuthRoutes';
import Alert from './components/alert/alert.jsx';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SignInModal from './components/SignInModal';
import SignIn from './components/modal/SignIn';


function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const auth = useSelector((state) => state.auth);
  const signin = useSelector((state) => state.signin).signin;
  const token = localStorage.getItem('eonToken')


  console.log('signin :>> ', signin);
  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    const token = localStorage.getItem('eonToken');
    const isLoggedIn = firstLogin && token;
    setCurrentUser(isLoggedIn);
  }, [auth]);
  return (
    <>
      <BrowserRouter >
        {signin && !token && <SignIn />}
        <Alert />
        <Routes>
          {/* <Route element={<App />}> */}
          {/* <Route path='error/*' element={<ErrorsPage />} /> */}
          {/* <Route path='logout' element={<Logout />} /> */}
          {/* {currentUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
            </>)
            : ( */}
          <>
            <Route path='/*' element={<AuthRoutes />} />
            <Route path='*' element={<Navigate to='/' />} />
          </>
          {/* )} */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
