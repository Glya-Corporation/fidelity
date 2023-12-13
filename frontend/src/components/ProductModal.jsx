import { Modal } from 'react-bootstrap'
import QRCode from 'qrcode.react'

const ProductModal = ({...props}, data) => {
console.log(props)
const product = {
  id: props.data.id,
  name: props.data.name,
  coinValue: props.data.coinValue
}
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>
        {props.data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <QRCode value={JSON.stringify(product)} renderAs='svg' fgColor='#000000' />
      </Modal.Body>
    </Modal>
  )
}

export default ProductModal;