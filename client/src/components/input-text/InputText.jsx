import { StyledInput, StyledDiv } from './styles';

const InputText = ({ handleChange }) => {
	return (
		<StyledDiv>
			<StyledInput onChange={handleChange} type='text' />
		</StyledDiv>
	);
};

export default InputText;
