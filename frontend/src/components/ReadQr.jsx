import { useState } from 'react';
import AmountModal from './AmountModal';
import { useDispatch } from 'react-redux';
import { updateCoinThunk } from '../store/slices/user.slice';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Html5QrcodePlugin from './Html5QrcodePlugin';

const ReadQr = () => {
  const [qrCode, setQrCode] = useState({});
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Función para manejar la detección de QR
  const onNewScanResult = (decodedText, decodedResult) => {
    // handle decoded results here
    if (decodedText) {
      const scaned = JSON.parse(decodedText);
      if (scaned.hasOwnProperty('coinValue')) {
        saveValue(scaned.coinValue, scaned.coinUser, scaned);
      } else {
        setQrCode(scaned);
        setShow(true);
      }
    }
  };

  const saveValue = (v, op, scaned) => {
    let coinSum = {};
    if (op > 0) {
      coinSum = { coin: Number(op) - Number(v) };
      dispatch(updateCoinThunk(scaned.userId, coinSum));
      
    } else {
      coinSum = { coin: Number(qrCode.coin) + Number(v) };
      dispatch(updateCoinThunk(qrCode.id, coinSum));
    }

    navigate('/');
  };

  return (
    <main className=''>
      <Button variant='danger' className='btn-back' onClick={() => navigate(-1)}>
        Back
      </Button>
      <AmountModal show={show} onHide={() => setShow(false)} save={value => saveValue(value)} />
      <Html5QrcodePlugin fps={20} qrbox={300} disableFlip={false} qrCodeSuccessCallback={onNewScanResult} />
    </main>
  );
};

export default ReadQr;
