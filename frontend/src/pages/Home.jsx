import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import coinPng from '../assets/PULPO_COIN.png';
import logo from '../assets/../assets/logopulpoSF.png'

import QRCode from 'qrcode.react';
import { Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';
import { getUserThunk } from '../store/slices/user.slice';

const Home = () => {
  const { id } = JSON.parse(localStorage.getItem('user'));
  const user = useSelector(state => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(getUserThunk(id));
  }, [id]);

console.log(user)

  return (
    <main className='home background'>
      <img src={logo} alt='Logo' className='logo' />
      <div className='cart'>
        <h3>
          {user.name} {user.surname}
        </h3>
        <QRCode value={JSON.stringify(user)} renderAs='svg' fgColor='#000000' />
        <div className='coin'>
          <img src={coinPng} alt='Icono Coin' />
          <p>{user.business.coin}</p>
        </div>
      </div>
      {
        user?.email === 'alfonsouzcategui2@gmail.com' && <Button variant='success' className='btn-more' onClick={() => setMore()}>
        more
      </Button>
      }
      <Button variant='success' className='btn-canje' onClick={() => navigate('/list')}>
        Canjear
      </Button>
    </main>
  );
};

export default Home;
