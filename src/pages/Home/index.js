import { Container } from './style';
import Header from '../../components/Header';
import HeaderMenu from '../../components/HeaderMenu';
import CardInitial from '../../components/CardInitial';
import HomeCard from '../../components/HomeCard';
import Footer from '../../components/Footer';

function HomePage() {
  return (
    <Container>
      <HeaderMenu />
      <Header />
      <CardInitial />
      <HomeCard />
      <Footer />
    </Container>
  )
}

export default HomePage;