import { useState, useCallback } from 'react';
import QrScanner from 'react-qr-scanner';
import AmountModal from './AmountModal';
import { useDispatch, useSelector } from 'react-redux';
import { updateCoinThunk } from '../store/slices/user.slice';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Html5QrcodePlugin from './Html5QrcodePlugin';

const ReadQr = () => {
  const [qrCode, setQrCode] = useState({});
  const [show, setShow] = useState(false);

  const user = useSelector(state => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Función para manejar la detección de QR

  const onNewScanResult = (result, decodedResult) => {
    // handle decoded results here
    if (result) {
      const scaned = JSON.parse(result.text);
      if (scaned.hasOwnProperty('coinValue')) {
        saveValue(scaned.coinValue, scaned.userId, scaned);
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
    <main className='qr-scan'>
      <Button variant='danger' className='btn-back' onClick={() => navigate(-1)}>
        Back
      </Button>
      <AmountModal show={show} onHide={() => setShow(false)} save={value => saveValue(value)} />
      {/* <div></div>
      <QrScanner onScan={handleScan} onError={handleError}/> */}
      <Html5QrcodePlugin fps={10} qrbox={250} disableFlip={false} qrCodeSuccessCallback={onNewScanResult} />
    </main>
  );
};

export default ReadQr;
