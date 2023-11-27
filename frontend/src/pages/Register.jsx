import { useForm } from 'react-hook-form'

const Register = () => {
  const { handlSubmit, register, reset } = useForm();
  
  return (
    <form onSubmit={handlSubmit(submit)}>
      <input type='text' placeholder='Nombres' {...register('name')}/>
      <input {...register('surname')} type='text' placeholder='Apellidos'/>
      <input {...register('email')} type='email' placeholder='Correo'/>
      <input {...register('password')} type='password' placeholder='Contraseña'/>
      <input {...register('verifyPassword')} type='password' placeholder='Repetir contraseña'/>
    </form>  
  )
}

export default Register;