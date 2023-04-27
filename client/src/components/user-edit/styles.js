import styled from "styled-components";

const StyledForm = styled.form`
    border: 1.5px solid black;
    border-radius: 13px;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 2rem;
`

const StyledTitle = styled.h2`
    margin: 0;
    margin-bottom: 1rem;
`
const StyledSubmit = styled.input`
    width: 100px;
    background-color: white;
    border: 1.5px solid black;
    border-radius: 100px;
    padding: .5rem .5rem;
    text-transform: uppercase;
    font-weight: 900;
	font-size: 0.7rem;
	font-family: 'Manrope', sans-serif;
    margin-left: auto;
    margin-top: 1rem;
    cursor: pointer;
	&:hover {
		background-color: black;
		color: white;
	}
`

export{StyledForm, StyledTitle, StyledSubmit}