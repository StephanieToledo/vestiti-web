import { React } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { newAddress, newCep, newCity, newNeighborhood } from '../../stores/state';
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
  const cep = useSelector(state => state.cep)
  const address = useSelector(state => state.address)
  const neighborhood = useSelector(state => state.neighborhood)
  const city = useSelector(state => state.city)
  const { register, handleSubmit } = useForm({ defaultValues: { cep, address, neighborhood, city } })

  const onSubmit = (data) => {
    dispatch(newCep(data.cep))
    dispatch(newAddress(data.address))
    dispatch(newNeighborhood(data.neighborhood))
    dispatch(newCity(data.city))
    history.push("./register-step-tree")
  }

  return(
    <Container>
      <Register>
        <ContentRegister>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="cep">Cep:</label>
            <input 
              id="cep" 
              className="cep" 
              {...register('cep', { required: true })}>
            </input>

            <label htmlFor="address">Rua:</label>
            <input 
              id="address" 
              className="address" 
              {...register('address', { required: true })}>
            </input>

            <label htmlFor="neighborhood">Bairro:</label>
            <input 
              id="neighborhood" 
              className="neighborhood" 
              {...register('neighborhood', 
              { required: true })}>
            </input>

            <label htmlFor="city">Cidade:</label>
            <input 
              id="city" 
              className="city" 
              {...register('city', { required: true })}>
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