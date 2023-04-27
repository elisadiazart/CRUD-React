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

const UserDetails = ({ user }) => {
	return (
		<StyledUser>
			<StyledDiv>
				<StyledImage src={user.profileImage} alt='' />
				<StyledUserData>
					<StyledUserName>@{user.username}</StyledUserName>
					<StyledOnline online={user.active ? 'lime' : 'red'}>
						{user.active ? 'Online' : 'Offline'}
					</StyledOnline>
				</StyledUserData>
			</StyledDiv>
			<StyledName>{user.name}</StyledName>
			<StyledText>{user.email}</StyledText>
			<StyledText>{user.age} años</StyledText>
		</StyledUser>
	);
};

export default UserDetails;
