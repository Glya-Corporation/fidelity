import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import ProtectedRoutes from './components/ProtectedRoutes.jsx';

import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import PrivacyAndTermsPage from './pages/PrivacyAndTermsPage.jsx';
import './App.css';
import ListProsucts from './pages/ListProducts.jsx';
import ReadQr from './components/ReadQr.jsx';
import exitIcon from './assets/logout.svg';
import Loader from './components/Loader.jsx';
import axios from 'axios';
import apiUrl from './utils/apiUrl.js';
import Inventary from './pages/Inventary.jsx';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const logout = () => {
    localStorage.clear();
    location.reload();
  };


  const hiddeLoader = () => {
    axios
      .get(apiUrl.slice(0, apiUrl.length - 7))
      .then(() => {
        setTimeout(() => {
          setShowLoader(false);
        }, 2000);
      })
      .catch(err => {
        console.log(err, 'reload');
        setShowLoader(true);
        hiddeLoader();
      });
  };

  useEffect(() => {
    hiddeLoader();
  }, []);

  return (
    <HashRouter>
      {showLoader && <Loader />}
      <img src={exitIcon} alt='boton' className='btn-exit' onClick={() => logout()} />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register/:id' element={<Register />} />
        <Route path='/PrivacyAndTerms' element={<PrivacyAndTermsPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<ListProsucts />} />
          <Route path='/qr' element={<ReadQr />} />
          <Route path='/inventary' element={<Inventary />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
