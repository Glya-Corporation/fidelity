import { useState, useCallback, useEffect } from 'react';
import QrScanner from 'react-qr-scanner';
import AmountModal from './AmountModal';
import { useDispatch, useSelector } from 'react-redux';
import { updateCoinThunk } from '../store/slices/user.slice';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ReadQr = () => {
  const [qrCode, setQrCode] = useState({});
  const [show, setShow] = useState(false);
  const [facingMode, setFacingMode] = useState('environment'); // Use 'user' for front camera


  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleUserMedia = stream => {
      const track = stream.getVideoTracks()[0];
      const facingMode = track.getSettings().facingMode;
      setFacingMode(facingMode);
    };

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment' } })
      .then(handleUserMedia)
      .catch(error => console.error('Error accessing user media:', error));

    return () => {
      // Cleanup code if needed
    };
  }, []);

  const handleScan = useCallback(result => {
    if (result) {
      const scaned = JSON.parse(result.text);
      if (scaned.hasOwnProperty('coinValue')) {
        saveValue(scaned.coinValue, scaned.coinUser, scaned);
      } else {
        setQrCode(scaned);
        setShow(true);
      }
    }
  }, []);

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

  const handleError = useCallback(error => {
    console.error(error);
  }, []);

  return (
    <main className='qr-scan'>
      <Button variant='danger' className='btn-back' onClick={() => navigate(-1)}>
        Back
      </Button>
      <AmountModal show={show} onHide={() => setShow(false)} save={value => saveValue(value)} />
      <div></div>
      <QrScanner onScan={handleScan} onError={handleError} facingMode={facingMode} />
    </main>
  );
};

export default ReadQr;
