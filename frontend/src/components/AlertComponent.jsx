import { motion, transform } from 'framer-motion';

const AlertComponent = props => {
  setTimeout(() => {
    props.onHide();
  }, 3000);

  return (
    <motion.div className={`alert-modal ${props.class ? prop.class : ''}`} initial={{ scale: 0 }} animate={{ scale: props.show ? 1 : 0 }} transition={{ duration: 0.5 }}>
      <p>{props.message}</p>
    </motion.div>
  );
};

export default AlertComponent;
