import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import PrivateRoutes from './routing/PrivateRoutes';
import AuthRoutes from './routing/AuthRoutes';
import Alert from './components/alert/alert.jsx';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const auth = useSelector((state) => state.auth);


  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin');
    const token = localStorage.getItem('eonToken');
    const isLoggedIn = firstLogin && token;
    setCurrentUser(isLoggedIn);
  }, [auth]);
  return (
    <>
      <BrowserRouter >
        <Alert />
        <Routes>
          {/* <Route element={<App />}> */}
          {/* <Route path='error/*' element={<ErrorsPage />} /> */}
          {/* <Route path='logout' element={<Logout />} /> */}
          {currentUser ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              {/* <Route index element={<Navigate to='/dashboard' />} /> */}
            </>)
            : (
              <>
                <Route path='/*' element={<AuthRoutes />} />
                <Route path='*' element={<Navigate to='/' />} />
              </>
            )}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
