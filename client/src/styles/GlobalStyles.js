import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/colors';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  img{
    display: block;
    max-width: 100%;
  }
  body{
    margin: 0;
    font-family: 'Manrope', sans-serif;
    background-color: ${COLORS.bgColor}
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
  h1{
    font-family: 'Big Shoulders Display';
    font-weight: 900;
    font-size: 3rem;
  }
  p{
    font-size: 1rem;
    margin: .5rem 0;
  }
`;

export { GlobalStyles };
