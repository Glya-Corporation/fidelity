import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const token = JSON.parse(localStorage.getItem('token')) || JSON.parse(sessionStorage.getItem('token')) || false;
  if (true) {
    return <Outlet />;
  } else {
    return <Navigate to='/login' />;
  } // Aquí le debemos decir la ruta a la que queremos llevar
}; // al usuario si no está autenticado
export default ProtectedRoutes;
