import { 
  Container, 
  ContainerHome, 
  ContainerImage, 
  ContainerFeed 
} from './style';
import ImageHome from '../../assets/images/home-2.jpg';

function Header() {
  return (
    <Container>
      <ContainerFeed>
        <ContainerHome>
          <h1>The Best Online Store for your Shopping</h1>
          <span><i>Check out our news!</i></span>
        </ContainerHome>
        <ContainerImage>
          <img src={ImageHome} alt="Moda"/>
        </ContainerImage>
      </ContainerFeed>
    </Container>
  )
}

export default Header;