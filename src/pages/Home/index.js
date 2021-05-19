import { Container } from './style';
import Feed from '../../components/Feed';
import Header from '../../components/Header';

function HomePage() {
  return (
    <Container>
      <Header />
     <Feed />
    </Container>
  )
}

export default HomePage;