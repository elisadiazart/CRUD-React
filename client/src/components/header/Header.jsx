import ButtonUser from '../button-user/ButtonUser';
import { StyledHeader } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<h1>Users crud react</h1>
			<ButtonUser text='AÑADIR USUARIO' />
		</StyledHeader>
	);
};

export default Header;
