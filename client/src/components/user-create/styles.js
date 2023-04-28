import styled from "styled-components"

const StyledForm = styled.form`
    border: 1.5px solid black;
    border-radius: 13px;
    padding: 1rem 1.5rem 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 2rem;
    margin-bottom: 13rem;
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

const StyledSelect = styled.select`
    border-radius: 50px;
    background-color: white;
    padding: .5rem 1rem;
    font-family: 'Manrope', sans-serif;
    font-size: .8rem;
    border: none;
    outline: 1px solid black;
`

export {StyledForm, StyledSubmit, StyledSelect}