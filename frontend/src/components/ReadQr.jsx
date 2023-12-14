import { useState, useCallback } from 'react';
import QrScanner from 'react-qr-scanner';
import AmountModal from './AmountModal';
import { useDispatch } from 'react-redux';
import { updateCoinThunk } from '../store/slices/user.slice';

const ReadQr = () => {
  const [qrCode, setQrCode] = useState('');
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  // Función para manejar la detección de QR
  const handleScan = useCallback(result => {
    if (result) {
      setQrCode(result.text);
      setShow(true);
    }
  }, []);

  const saveValue = v => {
    const userReaded = JSON.parse(qrCode);
    dispatch(updateCoinThunk(userReaded, { coin: v }));
  };

  // Función para manejar errores durante la detección
  const handleError = useCallback(error => {
    console.error(error);
  }, []);

  return (
    <main className='qr-scan'>
      <AmountModal show={show} onHide={() => setShow(false)} save={value => saveValue(value)} />
      <div></div>
      <QrScanner onScan={handleScan} onError={handleError} />
    </main>
  );
};

export default ReadQr;
