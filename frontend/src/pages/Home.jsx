import React from 'react';
import { useSelector } from 'react-redux';
import coinPng from '../assets/PULPO_COIN.png';

import QRCode from 'qrcode.react';
import { Button } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const user = { id: 1, name: 'Luis', surname: 'Uzcategui', coin: 25 }; //useSelector(state => state.user);

  const navigate = useNavigate();

  return (
    <main className='home background'>
      <img src={''} alt='Logo' className='logo' />
      <div className='cart'>
        <h3>
          {user.name} {user.surname}
        </h3>
        <QRCode value={JSON.stringify(user)} renderAs='svg' fgColor='#000000' />
        <div className='coin'>
          <img src={coinPng} alt='Icono Coin' />
          <p>{user.coin}</p>
        </div>
      </div>
      <Button variant='success' className='btn-canje' onClick={() => navigate('/list')}>
        Canjear
      </Button>
    </main>
  );
};

export default Home;
