
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
	const { dataUser} = useApi();
	
	if (dataUser.length === 0) return <h1>No data</h1>;
	

	
	return (
		<StyledUser >
			<StyledDiv>
			<StyledImage src={dataUser.profileImage} alt='' />
			<StyledUserData>
				<StyledUserName>@{dataUser.username
}</StyledUserName>
				<StyledOnline>{dataUser.active ? 'Online' : 'Offline'}</StyledOnline>
			</StyledUserData>
			</StyledDiv>
			<StyledName>{dataUser.name}</StyledName>
			<StyledText>{dataUser.email}</StyledText>
			<StyledText>{dataUser.age}años</StyledText>
		</StyledUser>
	);
};

export default UserDetails;
