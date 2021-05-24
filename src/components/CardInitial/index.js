import { promotionCollectionWinter, promotionJeans } from '../../utils/icons';
import { 
	Container, 
	ContainerCard 
} from './style';

function CardInitial() {
	return (
		<Container>
			<ContainerCard>
				<div className="card-right">
					<img src={promotionJeans} alt="Promoções" />
					<h2>Jeans</h2>
				</div>
				<div className="card-left">
					<img src={promotionCollectionWinter} alt="Promoções" />
					<h2>Collection of Winter</h2>
				</div>
			</ContainerCard>
		</Container>
	)
}

export default CardInitial;