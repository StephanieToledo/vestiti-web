import {
	cartHome, 
	clote, 
	dress, 
	iconFavoriteNove, 
	jeans, 
	overalls, 
	shirt, 
	skirt 
} from '../../utils/icons';
import { 
	Container, 
	Card,
	Image } 
from './style';

function HomeCard() {
	return (
		<Container>
			<Card>
				<Image>
					<img className="favorite" src={iconFavoriteNove} alt="Favoritar" />
					<img className="image" src={jeans} alt="Calça Jeans" />
					<div className="container-price-cart">
						<h3>R$ 200,00</h3>
						<img className="cart" src={cartHome} alt="Carrinho" />
					</div>
				</Image>
			</Card>
			<Card>
				<Image>
					<img className="favorite" src={iconFavoriteNove} alt="Favoritar" />
					<img className="image" src={dress} alt="Vestido" />
					<div className="container-price-cart">
						<h3>R$ 100,00</h3>
						<img className="cart" src={cartHome} alt="Carrinho" />
					</div>
				</Image>
			</Card>
			<Card>
				<Image>
					<img className="favorite" src={iconFavoriteNove} alt="Favoritar" />
					<img className="image" src={clote} alt="Blusa" />
					<div className="container-price-cart">
						<h3>R$ 270,00</h3>
						<img className="cart" src={cartHome} alt="Carrinho" />
					</div>
				</Image>
			</Card>
			<Card>
				<Image>
					<img className="favorite" src={iconFavoriteNove} alt="Favoritar" />
					<img className="image" src={overalls} alt="Macacão" />
					<div className="container-price-cart">
						<h3>R$ 270,00</h3>
						<img className="cart" src={cartHome} alt="Carrinho" />
					</div>
				</Image>
			</Card>
			<Card>
				<Image>
					<img className="favorite" src={iconFavoriteNove} alt="Favoritar" />
					<img className="image" src={shirt} alt="Camisa" />
					<div className="container-price-cart">
						<h3>R$ 70,00</h3>
						<img className="cart" src={cartHome} alt="Carrinho" />
					</div>
				</Image>
			</Card>
			<Card>
				<Image>
					<img className="favorite" src={iconFavoriteNove} alt="Favoritar" />
					<img className="image" src={skirt} alt="Saia" />
					<div className="container-price-cart">
						<h3>R$ 65,00</h3>
						<img className="cart" src={cartHome} alt="Carrinho" />
					</div>
				</Image>
			</Card>
		</Container>
	)
}

export default HomeCard;