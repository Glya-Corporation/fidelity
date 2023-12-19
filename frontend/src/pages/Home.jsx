import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import coinPng from '../assets/PULPO_COIN.png';
import logo from '../assets/../assets/logopulpoSF.png';

import QRCode from 'qrcode.react';
import { Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import { getUserThunk } from '../store/slices/user.slice';
import { getProductsThunk } from '../store/slices/product.slice';

import Footer from '../components/Footer.jsx'

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const { id } = JSON.parse(localStorage.getItem('user'));
  const user = useSelector(state => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(getUserThunk(id));
  }, [id]);

  useEffect(() => {
    if (user.id) dispatch(getProductsThunk(user.business[0].id));
  }, [user]);

  return (
    <main className='home background'>
      <img src={logo} alt='Logo' className='logo' />
      <div className='cart'>
        <h3>
          {user.name} {user.surname}
        </h3>
        <QRCode value={JSON.stringify({ id: user.id, name: user.name, surname: user.surname, coin: user.business?.[0].users_business.coin })} renderAs='svg' fgColor='#000000' />
        <div className='coin'>
          <img src={coinPng} alt='Icono Coin' />
          <p>{user.business?.[0].users_business?.coin}</p>
        </div>
      </div>
      {user?.roleId !== 1 && (
        <div className='more-options'>
          <Button variant='success' className='btn-more' onClick={() => setShowMore(!showMore)}>
            +
          </Button>
          <ul className={showMore ? 'show' : ''}>
            <li onClick={() => navigate('/qr')}>Escanear QR</li>
          </ul>
        </div>
      )}
      <Button variant='success' className='btn-canje' onClick={() => navigate('/list')}>
        Canjear
      </Button>
      <Footer />
    </main>
  );
};

export default Home;
