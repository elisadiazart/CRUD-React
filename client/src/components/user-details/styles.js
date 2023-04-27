import styled from 'styled-components';
const StyledUser = styled.div`
	border: 1.5px solid black;
	border-radius: 14px;
	padding: 1rem 1rem;
	position: relative;
	width: 100%;

	&::after {
		content: '';
		width: 100%;
		height: 6rem;
		background-color: black;
		position: absolute;
		top: 0;
		right: 0;
		border-radius: 13px 13px 0 0px;
		z-index: -1;
	}
`;

const StyledImage = styled.img`
	width: 100px;
	height: 100px;
	border: 1px solid black;
	border-radius: 13px;
	margin-bottom: 1rem;
	background-color: lavenderblush;
	z-index: 1;
`;

const StyledUserData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	margin-top: 0.5rem;
	gap: 0.5rem;
`;

const StyledOnline = styled.p`
	text-transform: uppercase;
	font-size: 0.8rem;
	font-weight: 800;
	color: white;
	padding-left: 2rem;
	position: relative;
	margin: 0;

	&::after {
		content: '';
		width: 8px;
		height: 8px;
		background-color: ${({ online }) => online};
		border-radius: 50%;
		position: absolute;
		transform: translate(0%, -50%);
		left: 1rem;
		top: 50%;
	}
`;

const StyledUserName = styled.p`
	font-size: 0.8rem;
	padding: 0.4rem 0.8rem;
	margin: 0;
	position: relative;
	color: black;
	z-index: 1;
	font-weight: 500;

	&::after {
		content: '';
		width: 100%;
		height: 100%;
		background-color: white;
		position: absolute;
		top: 0;
		right: 0;
		border-radius: 100px;
		z-index: -1;
	}
`;

const StyledDiv = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 1rem;
`;

const StyledName = styled.h2`
	font-weight: 900;
	padding: 0 1rem;
	margin: 0;
`;

const StyledText = styled.p`
	font-size: 0.9rem;
	padding: 0 1rem;
`;

export {
	StyledUser,
	StyledImage,
	StyledUserData,
	StyledOnline,
	StyledUserName,
	StyledDiv,
	StyledName,
	StyledText
};
