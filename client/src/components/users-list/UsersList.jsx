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
import UserCreate from '../user-create/UserCreate';

const UsersList = ({ setMode, mode }) => {
	const [users, setUsers] = useState([]);
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		getAllUsers(setUsers);
	}, []);

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
									setMode('details');
									setCurrentUser(user);
								}}
								text='Details'
							/>
							<ButtonUser
								handleClick={() => {
									setMode('edit');
									setCurrentUser(user);
								}}
								text='Edit'
							/>
							<StyledTrash
								src='../../../public/trash-duotone.svg'
								alt=''
								onClick={() => deleteUser(user.userId, setUsers)}
							/>
						</StyledButtons>
					</StyledUser>
				))}
			</StyledUsers>
			<StyledContainer>
				{mode === 'details' && <UserDetails user={currentUser} />}
				{mode === 'edit' && (
					<UserEdit id={currentUser.userId} setUsers={setUsers} />
				)}
				{mode === 'create' && (
					<UserCreate setUsers={setUsers} setMode={setMode} />
				)}
				<StyledImage src='../../../public/Recurso 1.svg' alt='' />
			</StyledContainer>
		</>
	);
};

const getAllUsers = async setUsers => {
	const response = await fetch('http://localhost:3000/api/users/');
	const data = await response.json();
	setUsers(data);
};

const fetchData = async (url, ...options) => {
	const response = await fetch(url, ...options);
	const data = await response.json();
	return data;
};

const deleteUser = async (id, setUsers) => {
	const data = await fetchData(`http://localhost:3000/api/users/${id}`, {
		method: 'DELETE',
		headers: {
			Accept: 'application/json'
		}
	});

	setUsers(data);
};

export default UsersList;
