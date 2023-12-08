import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const Register = () => {
  const { handleSubmit, register, reset } = useForm();

  const { id } = useParams();

  const navigate = useNavigate();

  const submit = data => {
    console.log(data);
    localStorage.setItem('user', JSON.stringify({ ...data, businessId: id }));
    navigate('/');
  };

  return (
  <main className='background'>
    <Form onSubmit={handleSubmit(submit)} className='form'>
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
