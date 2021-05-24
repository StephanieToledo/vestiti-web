import { Link } from 'react-router-dom';
import { imageRegister } from '../../utils/icons';
import {
  Container,
  Register,
  ContentRegister,
  ContentImage
} from './style';
 
function RegisterForm() {
  return(
    <Container>
      <Register>
        <ContentRegister>
          <h2>Criar Conta</h2>
          <div className="form">
            <form className="container-inputs">
              <label>Nome:</label>
              <input type="text"></input>
              <label>E-mail:</label>
              <input type="email"></input>
              <label>CPF:</label>
              <input type="email"></input>
              <Link to="/continue">
                <button><b>CONTINUAR</b></button>
              </Link>
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