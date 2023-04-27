import { StyledButton } from './styles';

const ButtonUser = ({ text, variant, handleClick }) => {
	return (
		<StyledButton onClick={handleClick} variant={variant}>
			{text}
		</StyledButton>
	);
};

export default ButtonUser;
