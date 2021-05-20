import { 
	Container, 
	ContainerCard 
} from './style';
import PromotionJeans from '../../assets/images/jeans.jpeg';
import PromotionCollectionWinter from '../../assets/images/winter.jpeg';

function CardInitial() {
	return (
		<Container>
			<ContainerCard>
				<div className="card-right">
					<img src={PromotionJeans} alt="Promoções" />
					<h2>Jeans</h2>
				</div>
				<div className="card-left">
					<img src={PromotionCollectionWinter} alt="Promoções" />
					<h2>Collection of Winter</h2>
				</div>
			</ContainerCard>
		</Container>
	)
}

export default CardInitial;