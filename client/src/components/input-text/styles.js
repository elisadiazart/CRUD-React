import styled from "styled-components";

const StyledInput = styled.input`
    border-radius: 50px;
    background-color: white;
    padding: .5rem 1rem;
    font-family: 'Manrope', sans-serif;
    font-size: .8rem;
    border: none;
    outline: 1px solid black;
    position: relative;
    width: 100%;

`

const StyledDiv = styled.div`
    position: relative;
    &::after{
        content: 'nOMBRE';
        position: absolute;
        text-transform: uppercase;
        font-weight: 600;
        font-size: .8rem;
        font-family: 'Manrope', sans-serif;
        color: black;
        top: -.6rem;
        left: 1.3rem;
        z-index: 1;
    }

    &:nth-child(3){
        &::after{
            content: 'Email';
        }
        &::before{
            width: 50px;
        }
    }

    &:nth-child(4){
        &::after{
            content: 'Edad';
        }
        &::before{
            width: 48px;
        }
    }

    &::before{
        content: '';
        position: absolute;
        width: 68px;
        height: 6px;
        background-color: white;
        left: .8rem;
        top: -.1rem;
        z-index: 1;
    }
`

export{StyledInput, StyledDiv}
