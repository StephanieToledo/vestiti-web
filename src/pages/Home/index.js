import { Container } from './style';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import CardInitial from '../../components/CardInitial';
import HomeCard from '../../components/HomeCard';
import Footer from '../../components/Footer';

function HomePage() {
  return (
    <Container>
      <Menu />
      <Header />
      <CardInitial />
      <HomeCard />
      <Footer />
    </Container>
  )
}

export default HomePage;