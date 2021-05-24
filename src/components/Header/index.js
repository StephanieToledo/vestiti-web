import { imageHome } from '../../utils/icons';
import { 
  Container, 
  ContainerHome, 
  ContainerImage, 
  ContainerFeed 
} from './style';

function Header() {
  return (
    <Container>
      <ContainerFeed>
        <ContainerHome>
          <h1>The Best Online Store for your Shopping</h1>
          <span><i>Check out our news!</i></span>
        </ContainerHome>
        <ContainerImage>
          <img src={imageHome} alt="Moda"/>
        </ContainerImage>
      </ContainerFeed>
    </Container>
  )
}

export default Header;