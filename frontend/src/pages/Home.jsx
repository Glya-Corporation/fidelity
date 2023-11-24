import React from 'react';
import {useSelector} from 'react-redux'

import QRCode from 'qrcode.react';

const Home = () => {
  const user = useSelector(state => state.user)
  return (
    <div>
    <img src={''} alt='Logo'/>
      <div>
        <h3>{user.name} {user.surname}</h3>
        <QRCode value='https://reactjs.org/' renderAs='svg' fgColor='#040' />
        <img src={''} alt='Icono Coin'/>
        <p>{user.coin}</p>
      </div>
      <button className='btn-canje'>Canjear</button>
    </div>
  );
};

export default Home;
