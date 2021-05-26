import { React } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { newCpf, newEmail, newName, newPhone } from '../../stores/state';
import { imageRegister } from '../../utils/icons';
import {
  Container,
  Register,
  ContentRegister,
  ContentImage
} from './style';

function RegisterForm() {

  const dispatch = useDispatch()
  const history = useHistory()
  const name = useSelector(state => state.name)
  const email = useSelector(state => state.email)
  const cpf = useSelector(state => state.cpf)
  const phone = useSelector(state => state.phone)
  const { register, handleSubmit } = useForm({ defaultValues: { name, email, cpf, phone } })

  const onSubmit = (data) => {
    dispatch(newName(data.name))
    dispatch(newEmail(data.email))
    dispatch(newCpf(data.cpf))
    dispatch(newPhone(data.phone))
    history.push("./register-step-two")
  }

  return(
    <Container>
      <Register>
        <ContentRegister>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Nome:</label>
            <input 
              id="name" 
              className="name" 
              {...register('name', { required: true })}>
            </input>

            <label htmlFor="email">Email:</label>
            <input 
              id="email" 
              className="email" 
              {...register('email', { required: true })}>
            </input>

            <label htmlFor="cpf">CPF:</label>
            <input 
              id="cpf" 
              className="cpf" 
              {...register('cpf', { required: true })}>
            </input>

            <label htmlFor="phone">Celular:</label>
            <input 
              id="phone" 
              className="phone" 
              {...register('phone', { required: true })}>
            </input>

            <button>CONTINUAR</button>
          </form>
        </ContentRegister>
      </Register>
      <ContentImage>
        <img src={imageRegister} alt="Cadastro"/>
      </ContentImage>
    </Container>
  )
}

export default RegisterForm;