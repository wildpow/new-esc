import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainWrapper = styled.div`
display: flex;
flex-direction: row;
`
export const WrapperRight = styled.div`
margin-right: 15px;
display: flex;
flex-direction: column;
border: 2px solid black;

align-self: flex-start;
flex-basis: 20%;
`

export const Img = styled.img`
  max-width: 15rem;
  align-self: center;
`
export const Wrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
flex-basis: 100%;
`
export const LinkWrapper = styled.div`
border: 2px solid black;
margin-right: 10px;
margin-bottom: 10px;
box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9);
border-top-left-radius: .14rem;
border-top-right-radius: .14rem;
border-bottom-right-radius: .14rem;
border-bottom-left-radius: .14rem;
background-color: white;
transition: all .15s ease-in-out;
  &:hover {
    z-index: 999;
    transform: scale3d(1.05,1.05,1);
  }
`;
export const StyledLink = styled(Link)`
text-decoration: none;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;


`
export const MattImg = styled.img`
margin: auto;
`
export const Name = styled.p`
font-size: 1rem;
font-family: 'Open Sans', sans-serif;
text-decoration: none;
text-align: center;
padding-left: 10px;
padding-right: 10px;
align-self: center;
`;