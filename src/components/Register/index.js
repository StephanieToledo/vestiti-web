import { React } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { newCpf, newEmail, newName, newPhone } from '../../store/state';
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
          <div className="form">
            <h2>Criar Conta</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="container-step-zero">
              <label htmlFor="name">Nome:</label>
              <input 
                id="name" 
                type="text"
                className="name"
                maxLength="50"
                {...register('name', { required: true })}>
              </input>

              <label htmlFor="email">Email:</label>
              <input 
                id="email" 
                type="text"
                className="email"
                maxLength="100"
                {...register('email', { required: true })}>
              </input>

              <label htmlFor="cpf">CPF:</label>
              <input 
                id="cpf"
                type="number" 
                className="cpf"
                maxLength="15"
                {...register('cpf', { required: true })}>
              </input>

              <label htmlFor="phone">Celular:</label>
              <input 
                id="phone" 
                type="tel"
                className="phone"
                maxLength="11"
                {...register('phone', { required: true })}>
              </input>

              <button>CONTINUAR</button>
            </form>
          </div>
        </ContentRegister>
      </Register>
      <ContentImage>
        <img src={imageRegister} alt="Cadastro"/>
      </ContentImage>
    </Container>
  )
}

export default RegisterForm;