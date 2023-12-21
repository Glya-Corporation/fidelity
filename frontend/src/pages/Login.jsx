import { useForm } from 'react-hook-form';

import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import apiUrl from '../utils/apiUrl.js';
import AlertComponent from '../components/AlertComponent.jsx';
import { useState } from 'react';

const Login = () => {
  const { handleSubmit, register, reset } = useForm();
  const [message, setMessage] = useState('hola luis');
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const login = data => {
    axios
      .post(`${apiUrl}/login`, data)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('token', JSON.stringify(res.data.token));
        setTimeout(() => {
          navigate('/');
        }, 500);
      })
      .catch(err => {
        console.error(err);
        setMessage(err.response.data.message);
        setShow(true);
      });
  };

  return (
    <main className='background'>
      <AlertComponent message={message} show={show} onHide={() => setShow(false)} />
      <Form onSubmit={handleSubmit(login)} className='form'>
        <h3 className='mb-4'>Iniciar sesión</h3>
        <Form.Group className='mb-3'>
          <Form.Control className='input' {...register('email')} type='email' placeholder='Correo' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control className='input' {...register('password')} type='password' placeholder='Contraseña' />
        </Form.Group>
        {/* <Form.Group className='mb-3'>
          <Form.Check {...register('check')} type='checkbox' label='Recuerdame' />
        </Form.Group> */}
        <Button variant='success' type='submit'>
          Login
        </Button>
      </Form>
    </main>
  );
};

export default Login;
