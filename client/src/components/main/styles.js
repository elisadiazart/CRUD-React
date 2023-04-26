import styled from 'styled-components';

const StyledMain = styled.main`
	width: 920px;
	margin: auto;
`;

const StyledDiv = styled.div`
	display: flex;
	margin: auto;
	justify-content: space-between;
`;

const StyledContainer = styled.div`
	position: relative;
`;

const StyledImage = styled.img`
	position: absolute;
	width: 150px;
	bottom: 0;
	right: 0;
`;

export { StyledMain, StyledDiv, StyledContainer, StyledImage };
