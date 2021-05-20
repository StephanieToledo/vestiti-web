import { Container } from './style';
import Feed from '../../components/Feed';
import Header from '../../components/Header';
import CardInitial from '../../components/CardInitial';
import HomeCard from '../../components/HomeCard';

function HomePage() {
  return (
    <Container>
      <Header />
     <Feed />
     <CardInitial />
     <HomeCard />
    </Container>
  )
}

export default HomePage;