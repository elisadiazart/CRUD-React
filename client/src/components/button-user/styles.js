import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledButton = styled.button`
	border: 1.5px solid ${COLORS.textColor};
	background-color: transparent;
	padding: 0.5rem 1.5rem;
	text-transform: uppercase;
	font-weight: 900;
	font-size: 0.7rem;
	font-family: 'Manrope', sans-serif;
	border-radius: 50px;
	background-color: ${COLORS.bgColor};
	cursor: pointer;
	&:hover {
		background-color: black;
		color: white;
	}

	&::after {
		content: none;
	}

	${props => {
		switch (props.variant) {
			case 'header':
				return css`
					padding-left: 2.5rem;
					position: relative;

					&::after {
						content: '';
                        background-image: url('../../../public/user-add.svg');
                        background-size: 100%;
						background-repeat: no-repeat;
						height: 20px;
                        width: 20px;
                        object-fit: contain: ;
						position: absolute;
                        transform: translate(0, -50%);
						top: 50%;
                        left: .8rem;
					}

                    &:hover{
                        &::after{
                            filter: invert(1)
                        }
                    }
				`;
		}
	}}
`;

export { StyledButton };
