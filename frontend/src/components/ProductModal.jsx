import { Modal } from 'react-bootstrap'
import QRCode from 'qrcode.react'

const ProductModal = ({...props, data}) => {
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>
        {data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <QRCode value={JSON.stringify(data)} renderAs='svg' fgColor='#000000' />
      </Modal.Body>
    </Modal>
  )
}

export default ProductModal;