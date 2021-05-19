import { Container, ContainerHome, ContainerImage } from './style';
import ImageHome from '../../assets/images/home-2.jpg';

function Feed() {
  return (
    <Container>
      <ContainerHome>
        <h1>The Best Online Store for your Shopping</h1>
      </ContainerHome>
      <ContainerImage>
        <img src={ImageHome} alt="Moda"/>
      </ContainerImage>
    </Container>
  )
}

export default Feed;