import UsersList from './components/users-list/UsersList';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<h1>Users crud react</h1>
			<UsersList />
		</>
	);
};

export default App;
