import { useForm } from 'react-hook-form';

import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { handleSubmit, register, reset } = useForm();

  const navigate = useNavigate();

  const login = data => {
    localStorage.setItem('token', JSON.stringify(data));
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit(login)}>
      <Form.Group className='mb-3'>
        <Form.Control className='input' {...register('email')} type='email' placeholder='Correo' />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control className='input' {...register('password')} type='password' placeholder='Contraseña' />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Check type='checkbox' label='Recuerdame' />
      </Form.Group>
      <Button variant='success' type='submit'>
        Login
      </Button>
    </Form>
  );
};

export default Login;
