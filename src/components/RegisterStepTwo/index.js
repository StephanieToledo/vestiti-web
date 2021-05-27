import { React } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { newAddress, newCep, newCity, newNeighborhood } from '../../store/state';
import { imageRegister } from '../../utils/icons';
import {
  Register,
  ContentImage
} from '../Register/style';
import { 
  Container, 
  ContainerRegister, 
  ContentRegister 
} from './style';

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
      <ContainerRegister>
        <Register>
          <ContentRegister>
            <div className="form">
              <h2>Criar Conta</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="container-step-two">
                <label htmlFor="cep">Cep:</label>
                <input 
                  id="cep" 
                  className="cep"
                  type="number"
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
            </div>
          </ContentRegister>
        </Register>
        <ContentImage>
          <img src={imageRegister} alt="Cadastro"/>
        </ContentImage>
      </ContainerRegister>
    </Container>
  )
}

export default RegisterForm;