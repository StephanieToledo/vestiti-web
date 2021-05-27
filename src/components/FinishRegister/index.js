import { useSelector } from "react-redux";
import { Container, ContainerFinishRegister } from "./style";
import { completedIcon } from '../../utils/icons';
import { useEffect } from "react";
import { useHistory } from "react-router";

function FinishRegister() {
  
  const state = useSelector(state => state)

  const history = useHistory();

  useEffect(() => {
   setTimeout(() => {
      history.push("/");
    }, 3000);
  });

  return (
    <Container>
      <ContainerFinishRegister>
        <img src={completedIcon} alt="Concluído"></img>
        <div className="content">
          <h2>Conta criada com sucesso!</h2>
          <span>Você será redirecionado para o Login...</span>
        </div>
      </ContainerFinishRegister>
    </Container>
  )
}

export default FinishRegister;