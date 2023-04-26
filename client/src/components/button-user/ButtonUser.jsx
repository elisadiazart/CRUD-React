import { StyledButton } from './styles';

const ButtonUser = ({ text, variant, HandleClick }) => {
	return <StyledButton onClick={HandleClick} variant={variant}>{text}</StyledButton >;
};

export default ButtonUser;
