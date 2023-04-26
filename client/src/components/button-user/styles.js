import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const StyledButton = styled.button`
    border: 1.5px solid ${COLORS.textColor};
    background-color: transparent;
    padding: .5rem 1.5rem;
    text-transform: uppercase;
    font-weight: 900;
    font-size: .7rem;
    font-family: 'Manrope', sans-serif;
    border-radius: 50px;
    background-color: ${COLORS.bgColor};
    cursor: pointer;
    &:hover{
        background-color: black;
        color: white;
    }
    
`

export{StyledButton}