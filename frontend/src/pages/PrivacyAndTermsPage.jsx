import {useNavigate} from 'react-router-dom'

const PrivacyAndTermsPage = () => {
  
  const navigate = useNavigate();
  
  return (
    <div>
      <section>
        <h2>Política de Privacidad de Fidelity</h2>

    <p>
        <b>1. Recopilación de Información:</b>
        Fidelity recopila datos de los usuarios, incluyendo información de contacto y detalles de transacciones, con el único propósito de administrar el programa de fidelidad y mejorar la experiencia del usuario.
    </p>

    <p>
        <b>2. Uso de la Información:</b>
        La información recopilada se utilizará exclusivamente para administrar el programa de fidelidad, ofrecer recompensas y mejorar nuestros servicios. No compartiremos tus datos con terceros sin tu consentimiento.
    </p>

    <p>
        <b>3. Seguridad de la Información:</b>
        Implementamos medidas de seguridad para proteger la información de nuestros usuarios. Sin embargo, ten en cuenta que ninguna transmisión por internet es completamente segura.
    </p>

    <p>
        <b>4. Cookies y Tecnologías Similares:</b>
        Utilizamos cookies y tecnologías similares para mejorar la funcionalidad de la plataforma y personalizar la experiencia del usuario. Puedes gestionar las preferencias de cookies en la configuración de tu navegador.
    </p>
      </section>

      <section>
        <h2>Términos y Condiciones de Uso de la Aplicación</h2>

    <p>
        <b>1. Consumo Máximo Semanal:</b>
        Los usuarios aceptan que el consumo máximo permitido por semana es un (1) plato canjeable en Pulpo Coin. Esto garantiza una distribución equitativa de beneficios entre todos los participantes del programa.
    </p>

    <p>
        <b>2. Acreditación de Puntos:</b>
        Los puntos acumulados en el programa Fidelity son equivalentes a un punto por cada dólar de consumo. Sin embargo, para la acreditación de puntos, el usuario debe alcanzar o superar la cantidad de $1 adicional al valor redondeado de su consumo.
          Por ejemplo, si el usuario consume $20.75, se acreditarán 20 puntos, ya que no cumplió con los $21 necesarios para obtener 21 puntos.
    </p>

    <p>
        <b>3. Uso Responsable:</b>
        Los usuarios se comprometen a utilizar la aplicación y acumular puntos de manera responsable. El uso fraudulento o abusivo resultará en la suspensión o cancelación de la cuenta.
    </p>

    <p>
        <b>4. Modificaciones en los Términos:</b>
        Fidelity se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios se comunicarán a los usuarios a través de la plataforma, y el correo electrónico.
    </p>
    <p>
        <b>5. Terminación de Cuenta:</b>
        Fidelity se reserva el derecho de terminar cuentas que violen los términos y condiciones establecidos. Los usuarios serán notificados antes de tomar medidas drásticas.
    </p>
      </section>

      <p>
        Al utilizar la aplicación Fidelity, aceptas los términos y condiciones descritos anteriormente. Te recomendamos revisar regularmente estas políticas, ya que podrían estar sujetas a modificaciones.
      </p>

      <p>Fecha de entrada en vigencia: 18/12/2023</p>

      <p>Pulpo Marinero || <a href='https//wa.me/+593979010717?text=soporte%20fidelity' target='blank'>Glya Corporation</a></p>
    </div>
  );
};

export default PrivacyAndTermsPage;
