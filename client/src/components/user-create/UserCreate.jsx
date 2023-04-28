import { useState } from 'react';
import InputText from '../input-text/InputText';
import { StyledForm, StyledSubmit, StyledSelect } from './styles';

const UserCreate = ({ setUsers, setMode }) => {
	const [userNewData, setUserNewData] = useState({
		name: '',
		email: '',
		age: '',
		profileImage: ''
	});
	return (
		<StyledForm onSubmit={handleSubmit}>
			<h2>Crear usuario</h2>
			<InputText
				handleChange={e =>
					createValuesState(userNewData, setUserNewData, 'name', e.target.value)
				}
			/>
			<InputText
				handleChange={e =>
					createValuesState(
						userNewData,
						setUserNewData,
						'email',
						e.target.value
					)
				}
			/>
			<InputText
				handleChange={e =>
					createValuesState(userNewData, setUserNewData, 'age', e.target.value)
				}
			/>
			<InputText
				handleChange={e =>
					createValuesState(
						userNewData,
						setUserNewData,
						'username',
						e.target.value
					)
				}
			/>
			<StyledSelect
				name='gender'
				id='gender'
				onChange={e => selectGender(e, setUserNewData, userNewData)}
			>
				<option value='default'>Seleciona tu género</option>
				<option value='women'>Mujer</option>
				<option value='men'>Hombre</option>
			</StyledSelect>

			<StyledSubmit
				type='submit'
				onClick={() => {
					createUser(userNewData, setUsers, setUserNewData, setMode);
				}}
			/>
		</StyledForm>
	);
};

const handleSubmit = e => {
	e.preventDefault();
};

const createValuesState = (userNewData, setUserNewData, key, value) => {
	setUserNewData({
		...userNewData,
		[key]: value
	});
};

const getRandomInt = () => {
	return Math.floor(Math.random() * 5);
};

const selectGender = (e, setUserNewData, userNewData) => {
	if (e.target.value === 'default') return;
	setUserNewData({
		...userNewData,
		profileImage: `https://randomuser.me/api/portraits/${
			e.target.value
		}/${getRandomInt()}.jpg`
	});
};

const fetchData = async (url, ...options) => {
	const response = await fetch(url, ...options);
	const data = await response.json();
	return data;
};

const createUser = async (newData, setUsers, setUserNewData, setMode) => {
	const data = await fetchData(`http://localhost:3000/api/users/`, {
		method: 'POST',
		body: JSON.stringify({ ...newData }),
		headers: {
			Accept: 'application/json',

			'Content-Type': 'application/json'
		}
	});
	setUserNewData({
		name: '',
		email: '',
		age: '',
		profileImage: ''
	});
	setUsers(data);
	setMode('null');
};

export default UserCreate;
