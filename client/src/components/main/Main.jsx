import UsersList from '../users-list/UsersList';
import { StyledMain, StyledDiv } from './styles';

const Main = ({ setMode, mode }) => {
	return (
		<StyledMain>
			<StyledDiv>
				<UsersList setMode={setMode} mode={mode} />
			</StyledDiv>
		</StyledMain>
	);
};

export default Main;
