import UserDetails from '../user-details/UserDetails';
import UsersList from '../users-list/UsersList';
import { StyledMain, StyledDiv, StyledContainer, StyledImage } from './styles';

const Main = () => {
	return (
		<StyledMain>
			<StyledDiv>
				<UsersList />
				<StyledContainer>
				<UserDetails />
				<StyledImage src="../../../public/Recurso 1.svg" alt="" />
				</StyledContainer>
			</StyledDiv>
		</StyledMain>
	);
};

export default Main;
