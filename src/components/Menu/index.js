import { Link } from 'react-router-dom';
import { 
	cart, 
	favorite, 
	icon, 
	search 
} from '../../utils/icons';
import { 
	ContainerHeader, 
	ContentLogo, 
	ContainerMenu 
} from './style';

function Menu() {
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
				<Link to="/" style={{ textDecoration: 'none' }}>
					<h4>LOGIN</h4>
				</Link>
				<Link to="/register-step-one" style={{ textDecoration: 'none' }}>
					<h4>CADASTRO</h4>
				</Link>
        <img src={search} alt="Pesquisa"/>
        <img src={favorite} alt="Favoritos"/>
        <img src={cart} alt="Carrinho"/>
			</ContainerMenu>
		</ContainerHeader>
	)
}

export default Menu;