import ButtonUser from '../button-user/ButtonUser';
import { StyledHeader } from './styles';

const Header = ({ setMode }) => {
	return (
		<StyledHeader>
			<h1>Users crud react</h1>
			<ButtonUser
				text='AÑADIR USUARIO'
				variant='header'
				handleClick={() => setMode('create')}
			/>
		</StyledHeader>
	);
};

export default Header;
