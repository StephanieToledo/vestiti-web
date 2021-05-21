import { 
	ContainerHeader, 
	ContentLogo, 
	Menu 
} from './style';
import Icon from '../../assets/images/icon.png';
import Search from '../../assets/images/search.png';
import Cart from '../../assets/images/cart.png';
import Favorite from '../../assets/images/favorite-none.png';

function HeaderMenu() {
	return(
		<ContainerHeader>
			<ContentLogo>
				<img src={Icon} alt="Ícone"/>
			</ContentLogo>

			<Menu>
				<div>INICIO</div>
				<div>COMPRAR</div>
				<div>CONTATO</div>
				<button className="login">LOGIN</button>
				<button className="register">CADASTRO</button>
        <img src={Search} alt="Pesquisa"/>
        <img src={Favorite} alt="Favoritos"/>
        <img src={Cart} alt="Carrinho"/>
			</Menu>
		</ContainerHeader>
	)
}

export default HeaderMenu;