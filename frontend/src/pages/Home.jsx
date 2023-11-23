import React from 'react';

import QRCode from 'qrcode.react';

const Home = () => {
  return (
    <div>
      <div>
        <QRCode value='https://reactjs.org/' renderAs='svg' fgColor='#040' />
      </div>
    </div>
  );
};

export default Home;
