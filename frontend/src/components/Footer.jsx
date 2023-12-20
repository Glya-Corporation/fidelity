import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer className='footer'>
    <div>
        <p>Cuenca, EC</p>
        <b>Fidelity || ¡Descarga la App!</b>
      </div>
      <div>
        <p onClick={() => navigate('/privacyAndTerms')}>
          <b>Política de Privacidad </b>
          <b> Términos y Condiciones</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;