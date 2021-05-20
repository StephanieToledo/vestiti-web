import { 
	Container, 
	Card,
	Image } 
from './style';
import Jeans from '../../assets/images/home-6.png';
import IconFavoriteNove from '../../assets/images/favorite-none.png';

function HomeCard() {
	return (
		<Container>
			<Card>
				<Image>
					<img className="favorite" src={IconFavoriteNove} alt="Favoritar" />
					<img className="image" src={Jeans} alt="Calça Jeans" />
				</Image>
			</Card>
		</Container>
	)
}

export default HomeCard;