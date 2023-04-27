import { useEffect, useState } from 'react';
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
	StyledTrash,
	StyledContainer,
	StyledImage
} from './styles';
import UserDetails from '../user-details/UserDetails';
import UserEdit from '../user-edit/UserEdit';

const UsersList = () => {
	const [users, setUsers] = useState([]);
	const [showDetails, setShowDetails] = useState(false);
	const [showEdit, setShowEdit] = useState(false);
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);

	console.log(users);

	if (users.length === 0) return <h1>No results found</h1>;

	return (
		<>
			<StyledUsers>
				{users.map(user => (
					<StyledUser key={user.userId}>
						<StyledUserContainer>
							<StyledIcon src={user.profileImage} alt='' />
							<StyledUserText>
								<StyledName>{user.name}</StyledName>
								<StyledUserName>@{user.username}</StyledUserName>
							</StyledUserText>
						</StyledUserContainer>
						<StyledButtons>
							<StyledOnline>{user.active ? 'Online' : 'Offline'}</StyledOnline>
							<ButtonUser
								handleClick={() => {
									setShowDetails(true);
									setShowEdit(false);
									setCurrentUser(user);
								}}
								text='Details'
							/>
							<ButtonUser
								handleClick={() => {
									setShowEdit(true);
									setShowDetails(false);
									setCurrentUser(user);
								}}
								text='Edit'
							/>
							<StyledTrash src='../../../public/trash-duotone.svg' alt='' />
						</StyledButtons>
					</StyledUser>
				))}
			</StyledUsers>
			<StyledContainer>
				{showDetails && <UserDetails user={currentUser} />}
				{showEdit && <UserEdit id={currentUser.userId} setUsers={setUsers} />}
				<StyledImage src='../../../public/Recurso 1.svg' alt='' />
			</StyledContainer>
		</>
	);
};

const getAllUsers = async setUsers => {
	const response = await fetch('http://localhost:3000/api/users/');
	const data = await response.json();
	console.log(data);
	setUsers(data);
};

export default UsersList;
