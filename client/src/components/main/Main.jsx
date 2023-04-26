import UserDetails from '../user-details/UserDetails';
import UsersList from '../users-list/UsersList';
import { StyledMain, StyledDiv } from './styles';

const Main = () => {
	return (
		<StyledMain>
			<StyledDiv>
				<UsersList />
				<UserDetails />
			</StyledDiv>
		</StyledMain>
	);
};

export default Main;
