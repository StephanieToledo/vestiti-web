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
				<div>INICIO</div>
				<div>COMPRAR</div>
				<div>CONTATO</div>
				<button className="login">LOGIN</button>
				<button className="register">CADASTRO</button>
        <img src={search} alt="Pesquisa"/>
        <img src={favorite} alt="Favoritos"/>
        <img src={cart} alt="Carrinho"/>
			</Menu>
		</ContainerHeader>
	)
}

export default HeaderMenu;