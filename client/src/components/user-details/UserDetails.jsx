import { useApi } from '../../hooks/useApi';
import {
	StyledUser,
	StyledImage,
	StyledUserData,
	StyledOnline,
	StyledUserName,
	StyledDiv,
	StyledName,
	StyledText
} from './styles';

const UserDetails = () => {
	const { dataUser } = useApi();
	if (dataUser.length === 0) return 
	console.log(dataUser);
	return (
		<StyledUser >
			<StyledDiv>
			<StyledImage src={dataUser.profileImage} alt='' />
			<StyledUserData>
				<StyledUserName>@carles_fay22</StyledUserName>
				<StyledOnline>online</StyledOnline>
			</StyledUserData>
			</StyledDiv>
			<StyledName>Carles Méndez</StyledName>
			<StyledText>Carles.King30@yahoo.com</StyledText>
			<StyledText>25 años</StyledText>
		</StyledUser>
	);
};

export default UserDetails;
