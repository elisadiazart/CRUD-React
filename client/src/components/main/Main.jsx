import UsersList from '../users-list/UsersList';
import { StyledMain, StyledDiv } from './styles';

const Main = () => {
	return (
		<StyledMain>
			<StyledDiv>
				<UsersList />
			</StyledDiv>
		</StyledMain>
	);
};

export default Main;
