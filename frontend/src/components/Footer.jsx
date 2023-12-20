import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer className='footer'>
      <div>
        <p onClick={() => navigate('/privacyAndTerms')}>
          <span>Política de Privacidad </span>
          <span> Términos y Condiciones</span>
        </p>
      </div>

      <div>
        <p>Cuenca, EC</p>
        <b>Fidelity || </b>
        <b>¡Descarga la App!</b>
      </div>
    </footer>
  );
};

export default Footer;