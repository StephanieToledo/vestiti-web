import { Container } from './style';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import CardInitial from '../../components/CardInitial';
import HomeCard from '../../components/HomeCard';
import Footer from '../../components/Footer';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function HomePage() {

  const [products, setProducts] = useState([]);
	const dispatch = useDispatch();

  async function getProducts() {
    const response = await api.get("/products");
    setProducts(response.data);
  }

  useEffect(() => {
    async function loadProducts() {
      await getProducts();
    }
    dispatch({ type: 'ADD_PRODUCT', product: JSON.parse(localStorage.getItem('products')) || []});
    dispatch({ type: 'ADD_FAVORITE', favorite: JSON.parse(localStorage.getItem('favorites')) || []});
    loadProducts();
  },[]);

  return (
    <Container>
      <Menu />
      <Header />
      <CardInitial />
        <HomeCard
          products={products}
        />
      <Footer />
    </Container>
  )
}

export default HomePage;