
import { useApi } from '../../hooks/useApi';
import ButtonUser from '../button-user/ButtonUser';
import {
	StyledUser,
	StyledUsers,
	StyledIcon,
	StyledName,
	StyledUserName,
	StyledUserText,
	StyledUserContainer,
	StyledButtons,
	StyledOnline,
	StyledTrash
} from './styles';

const UsersList = () => {
	const { data, setUrlToFetchUser} = useApi();

	if (data.length === 0) return <h1>No results found</h1>;
	
	return (
		<StyledUsers>
			{data.map(user => (
				<StyledUser key={user.userId} >
					<StyledUserContainer>
						<StyledIcon src={user.profileImage} alt='' />
						<StyledUserText>
							<StyledName>{user.name}</StyledName>
							<StyledUserName>@{user.username}</StyledUserName>
						</StyledUserText>
					</StyledUserContainer>
					<StyledButtons>
						<StyledOnline>{user.active ? 'Online' : 'Offline'}</StyledOnline>
						<ButtonUser HandleClick={() => setUrlToFetchUser(`http://localhost:3000/api/users/${user.userId}`)} text='Details' />
						<ButtonUser text='Edit' />
						<StyledTrash src='../../../public/trash-duotone.svg' alt='' />
					</StyledButtons>
				</StyledUser>
			))}
		</StyledUsers>
	);
};

export default UsersList;
