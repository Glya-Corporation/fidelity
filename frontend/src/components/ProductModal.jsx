import { Modal } from 'react-bootstrap';
import QRCode from 'qrcode.react';
import { useSelector } from 'react-redux';

const ProductModal = (props) => {
  const user = useSelector(state => state.user);
  
  const product = {
    id: props.data.id,
    name: props.data.name,
    coinValue: props.data.coinValue,
    userId: user.id 
  };
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>{props.data.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <QRCode value={JSON.stringify(product)} renderAs='svg' fgColor='#000000' />
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
