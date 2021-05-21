import { 
	Container, 
	Card,
	Image } 
from './style';
import Jeans from '../../assets/images/home-6.png';
import IconFavoriteNove from '../../assets/images/favorite-none.png';
import Cart from '../../assets/images/cart-card.png';
import Dress from '../../assets/images/home-3.jpg';
import Clote from '../../assets/images/home-7.jpg';
import Shirt from '../../assets/images/home-8.jpg';
import Overalls from '../../assets/images/home-9.jpg';
import Skirt from '../../assets/images/home-10.jpg';

function HomeCard() {
	return (
		<Container>
			<Card>
				<Image>
					<img className="favorite" src={IconFavoriteNove} alt="Favoritar" />
					<img className="image" src={Jeans} alt="Calça Jeans" />
					<div className="container-price-cart">
						<h3>R$ 200,00</h3>
						<img className="cart" src={Cart} alt="Carrinho" />
					</div>
				</Image>
			</Card>
			<Card>
				<Image>
					<img className="favorite" src={IconFavoriteNove} alt="Favoritar" />
					<img className="image" src={Dress} alt="Vestido" />
					<div className="container-price-cart">
						<h3>R$ 100,00</h3>
						<img className="cart" src={Cart} alt="Carrinho" />
					</div>
				</Image>
			</Card>
			<Card>
				<Image>
					<img className="favorite" src={IconFavoriteNove} alt="Favoritar" />
					<img className="image" src={Clote} alt="Blusa" />
					<div className="container-price-cart">
						<h3>R$ 270,00</h3>
						<img className="cart" src={Cart} alt="Carrinho" />
					</div>
				</Image>
			</Card>
			<Card>
				<Image>
					<img className="favorite" src={IconFavoriteNove} alt="Favoritar" />
					<img className="image" src={Overalls} alt="Macacão" />
					<div className="container-price-cart">
						<h3>R$ 270,00</h3>
						<img className="cart" src={Cart} alt="Carrinho" />
					</div>
				</Image>
			</Card>
			<Card>
				<Image>
					<img className="favorite" src={IconFavoriteNove} alt="Favoritar" />
					<img className="image" src={Shirt} alt="Camisa" />
					<div className="container-price-cart">
						<h3>R$ 70,00</h3>
						<img className="cart" src={Cart} alt="Carrinho" />
					</div>
				</Image>
			</Card>
			<Card>
				<Image>
					<img className="favorite" src={IconFavoriteNove} alt="Favoritar" />
					<img className="image" src={Skirt} alt="Saia" />
					<div className="container-price-cart">
						<h3>R$ 65,00</h3>
						<img className="cart" src={Cart} alt="Carrinho" />
					</div>
				</Image>
			</Card>
		</Container>
	)
}

export default HomeCard;