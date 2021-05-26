import { React } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { newConfirmPassword, newPassword } from '../../stores/state';
import { imageRegister } from '../../utils/icons';
import {
  Container,
  Register,
  ContentRegister,
  ContentImage
} from '../Register/style';

function RegisterForm() {

  const dispatch = useDispatch()
  const history = useHistory()
  const password = useSelector(state => state.password)
  const confirmPassword = useSelector(state => state.confirmPassword)
  const { register, handleSubmit } = useForm({ defaultValues: { password, confirmPassword } })

  const onSubmit = (data) => {
    dispatch(newPassword(data.password))
    dispatch(newConfirmPassword(data.confirmPassword))
    history.push("./finish-register")
  }

  return(
    <Container>
      <Register>
        <ContentRegister>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="password">Crie uma Senha:</label>
            <input 
              id="password" 
              type="password"
              className="password" 
              {...register('password', 
              { required: true })}>
            </input>

            <label htmlFor="confirmPassword">Confirme a Senha:</label>
            <input 
              id="confirmPassword" 
              type="password"
              className="confirmPassword" 
              {...register('confirmPassword', 
              { required: true })}>
            </input>

            <button>CRIAR</button>
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