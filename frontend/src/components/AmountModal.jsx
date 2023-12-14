import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
const AmountModal = props => {
  const [amount, setAmount] = useState(0);

  const setValue = () => {
    props.save(amount);
  };

  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>Ingrese monto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Control type='number' placeholder='Solo ingresar numeros' onChange={e => setAmount(e.target.value)} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='success' onClick={() => setValue()}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AmountModal;
