import { HashRouter, Routes, Route } from 'react-router-dom';

import ProtectedRoutes from './components/ProtectedRoutes.jsx';

import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';

import './App.css';
import ListProsucts from './pages/ListProducts.jsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register/:id' element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<ListProsucts />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
