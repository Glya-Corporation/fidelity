import { HashRouter, Routes, Route } from 'react-router-dom';

import ProtectedRoutes from './components/ProtectedRoutes.jsx';

import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';

import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
