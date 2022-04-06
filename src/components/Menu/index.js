import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
	cart,
	icon, 
	iconFavoriteNone, 
	search 
} from '../../utils/icons';
import { 
	ContainerHeader, 
	ContentLogo, 
	ContainerMenu 
} from './style';

function Menu() {

	const products = useSelector(state => state.products.data);
	const favorites = useSelector(state => state.favorites.data);

	return(
		<ContainerHeader>
			<ContentLogo>
				<img src={icon} alt="Ícone"/>
			</ContentLogo>

			<ContainerMenu>
				<Link to="/" style={{ textDecoration: 'none' }}>
					<h4>INICIO</h4>
				</Link>
				<Link to="/" style={{ textDecoration: 'none' }}>
					<h4>CONTATO</h4>
				</Link>
				<Link to="/login" style={{ textDecoration: 'none' }}>
					<h4>LOGIN</h4>
				</Link>
				<Link to="/register-step-one" style={{ textDecoration: 'none' }}>
					<h4>CADASTRO</h4>
				</Link>
				<img src={search} alt="Pesquisa"/>
				<img src={iconFavoriteNone} alt="Favoritos"/>
				<div className="favorites">
					<p>{favorites.length}</p>
				</div>
				<div className="container-carr">
        	<img src={cart} alt="Carrinho"/>
					<div className="quantity">
						<p>{products.length}</p>
					</div>
				</div>
			</ContainerMenu>
		</ContainerHeader>
	)
}

export default Menu;