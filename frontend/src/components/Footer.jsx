import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer className='footer'>
    <div>
        <p>Cuenca, EC</p>
        <a href='http://www.appcreator24.com/app2949379-i3erdo' target='blank'>Fidelity || ¡Descarga la App!</a>
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