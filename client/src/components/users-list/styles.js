import styled from 'styled-components';
import { COLORS, COLORS_USER_CARD } from '../../constants/colors';

const StyledUser = styled.div`
	display: flex;
	align-items: center;
	padding: 0.7rem 1rem;
	background-color: ${COLORS_USER_CARD.pastelPurple};
	border-radius: 13px;
	justify-content: space-between;
	position: relative;
	cursor: pointer;
	&:nth-child(4n + 2) {
		background-color: ${COLORS_USER_CARD.pastelYellow};
	}
	&:nth-child(4n + 3) {
		background-color: ${COLORS_USER_CARD.pastelGreen};
	}
	&:nth-child(4n) {
		background-color: ${COLORS_USER_CARD.pastelBlue};
	}
	&:hover {
		top: -0.4rem;
		border: 1px inset black;
		&::before {
			content: '';
			width: 100%;
			height: 100%;
			background-color: ${COLORS.textColor};
			position: absolute;
			top: 0.4rem;
			right: 0;
			border-radius: 13px;
			z-index: -1;
		}
	}
`;

const StyledUsers = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const StyledIcon = styled.img`
	width: 54px;
	border-radius: 50%;
`;

const StyledName = styled.h2`
	font-size: 0.8rem;
	text-transform: uppercase;
	font-weight: 800;
	margin: 0;
`;

const StyledUserName = styled.p`
	font-size: 0.8rem;
	text-transform: lowercase;
	margin: 0;
`;

const StyledUserText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0;
`;

const StyledUserContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const StyledButtons = styled.div`
	display: flex;
	gap: 1rem;
`;

const StyledOnline = styled.p`
	padding: 0 1rem;
	text-transform: uppercase;
	font-size: 0.8rem;
	font-weight: 600;
`;

const StyledTrash = styled.img`
	width: 25px;
	cursor: pointer;
`;

export {
	StyledUser,
	StyledUsers,
	StyledIcon,
	StyledName,
	StyledUserName,
	StyledUserText,
	StyledUserContainer,
	StyledButtons,
	StyledOnline,
	StyledTrash
};
