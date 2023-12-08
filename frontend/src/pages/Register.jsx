import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';
import apiUrl from '../utils/apiUrl.js';

const Register = () => {
  const { handleSubmit, register, reset } = useForm();

  const { id } = useParams();

  const navigate = useNavigate();

  const submit = data => {
    if (data.password === data.verifyPassword) {
      delete data.verifyPassword;
      axios
        .post(`${apiUrl}/register/${id}`, data)
        .then(res => {
          console.log(res.data);
          navigate('/');
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <main className='background'>
      <Form onSubmit={handleSubmit(submit)}>
        <h3 className='mb-5'>Registrate</h3>
        <Form.Group className='mb-2'>
          <Form.Control type='text' placeholder='Nombres' {...register('name')} />
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Control {...register('surname')} type='text' placeholder='Apellidos' />
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Control {...register('email')} type='email' placeholder='Correo' />
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Control className='mb-1' {...register('password')} type='password' placeholder='Contraseña' />
          <Form.Control className='mb-1' {...register('verifyPassword')} type='password' placeholder='Repetir contraseña' />
        </Form.Group>
        <Button type='submit' variant='success'>
          Registrar
        </Button>
      </Form>
    </main>
  );
};

export default Register;
