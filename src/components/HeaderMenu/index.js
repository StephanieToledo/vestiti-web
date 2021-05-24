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
	Menu 
} from './style';

function HeaderMenu() {
	return(
		<ContainerHeader>
			<ContentLogo>
				<img src={icon} alt="Ícone"/>
			</ContentLogo>

			<Menu>
				<Link to="/" style={{ textDecoration: 'none' }}>
					<div>INICIO</div>
				</Link>
				<div>CONTATO</div>
				<Link to="/" style={{ textDecoration: 'none' }}>
					<div className="login">LOGIN</div>
				</Link>
				<Link to="/register" style={{ textDecoration: 'none' }}>
					<div className="login">CADASTRO</div>
				</Link>
        <img src={search} alt="Pesquisa"/>
        <img src={favorite} alt="Favoritos"/>
        <img src={cart} alt="Carrinho"/>
			</Menu>
		</ContainerHeader>
	)
}

export default HeaderMenu;