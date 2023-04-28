import { useState } from 'react';
import InputText from '../input-text/InputText';
import { StyledForm, StyledTitle, StyledSubmit } from './styles';

const UserEdit = ({ id, setUsers }) => {
	const [userNewData, setUserNewData] = useState({
		name: '',
		email: '',
		age: ''
	});

	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledTitle>Editar</StyledTitle>
			<InputText
				handleChange={e =>
					changeValuesState(userNewData, setUserNewData, 'name', e.target.value)
				}
			/>
			<InputText
				handleChange={e =>
					changeValuesState(
						userNewData,
						setUserNewData,
						'email',
						e.target.value
					)
				}
			/>
			<InputText
				handleChange={e =>
					changeValuesState(userNewData, setUserNewData, 'age', e.target.value)
				}
			/>
			<StyledSubmit
				type='submit'
				onClick={() => patchUser(id, userNewData, setUsers)}
			/>
		</StyledForm>
	);
};

const handleSubmit = e => {
	e.preventDefault();
};

const changeValuesState = (userNewData, setUserNewData, key, value) => {
	setUserNewData({
		...userNewData,
		[key]: value
	});
};

const fetchData = async (url, ...options) => {
	const response = await fetch(url, ...options);
	const data = await response.json();
	return data;
};

const patchUser = async (id, newData, setUsers) => {
	const data = await fetchData(`http://localhost:3000/api/users/${id}`, {
		method: 'PATCH',
		body: JSON.stringify({ ...newData }),
		headers: {
			Accept: 'application/json',

			'Content-Type': 'application/json'
		}
	});

	setUsers(data);
};

export default UserEdit;
