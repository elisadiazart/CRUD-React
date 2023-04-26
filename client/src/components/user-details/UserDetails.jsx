// import { useApi } from '../../hooks/useApi';
import {
	StyledUser,
	StyledImage,
	StyledUserData,
	StyledOnline,
	StyledUserName
} from './styles';

const UserDetails = () => {
	// const { data } = useApi();
	return (
		<StyledUser>
			<StyledImage src='../../../public/logo.svg' alt='' />
			<StyledUserData>
				<StyledOnline>online</StyledOnline>
				<StyledUserName>@carles_fay22</StyledUserName>
			</StyledUserData>
			<h2>Carles Méndez</h2>
			<p>Carles.King30@yahoo.com</p>
			<p>25 años</p>
		</StyledUser>
	);
};

export default UserDetails;
