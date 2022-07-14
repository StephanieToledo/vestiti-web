import { 
  Container,
  ContainerImage,
  ContainerText
} from './style';
import imgBack from '../../assets/images/back.jpg';
import { Button } from 'antd';

function Header() {
  return (
    <Container>
      <ContainerText>
          <h2>Fashion as You Want</h2>
          <Button className='button-busy'>COMPRE AGORA</Button>
      </ContainerText>
      <ContainerImage>
        <img src={imgBack} alt=""/>
      </ContainerImage>
    </Container>
  )
}

export default Header;