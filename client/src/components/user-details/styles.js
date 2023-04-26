import styled from "styled-components";

const StyledUser = styled.div`
    border: 1.5px solid black;
    border-radius: 13px;
    padding: 2rem;
`

const StyledImage = styled.img`
    width: 250px;
    box-shadow: 0px 4px 14px 5px rgba(0, 0, 0, 0.15);
    border-radius: 13px;
    margin-bottom: 1rem;
`

const StyledUserData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledOnline = styled.p`
    text-transform: uppercase;
    font-size: .8rem;
    font-weight: 800;
`

const StyledUserName = styled.p`
    font-size: .8rem;
    padding: 0.3rem .8rem;
    position: relative;
    color: white;

    &::after{
        content: '';
        width: 100%;
        height: 100%;
        background-color: black;
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 100px;
        z-index: -1;
    }
`


export{StyledUser, StyledImage, StyledUserData, StyledOnline, StyledUserName}