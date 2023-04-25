import { useApi } from '../../hooks/useApi';

const UsersList = () => {
	const { data } = useApi();

	if (data.length === 0) return <h1>No results found</h1>;

	return (
		<div>
			{data.map(user => (
				<div key={user.userId}>
					<img src={user.profileImage} alt='' />
					<h2>{user.name}</h2>
					<p>@{user.username}</p>
					<p>{user.active.toString()}</p>
					<button>Show details</button>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			))}
		</div>
	);
};

export default UsersList;
