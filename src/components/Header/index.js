import { 
	ContainerHeader, 
	ContentLogo, 
	Menu 
} from './style';
import Icon from '../../assets/images/icon.png';

function Header() {
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
			</Menu>
		</ContainerHeader>
	)
}

export default Header;