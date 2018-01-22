import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { Image, H1, Span } from './LogoStyles.js';


const Wrapper = styled.div`
display: flex;
flex-direction: column;
font-family: 'Roboto', sans-serif;
margin-top: -15px;
text-decoration: none;

  @media (min-width: 768px) {
    margin-top: -22px;
  }
  @media (min-width: 1022px) {
    margin-top: -85px;
  }
`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  margin-top: -15px;
  margin: auto;
  &:hover {
    transform: scale3d(1.05,1.05,1);
  }
`
const Logo = () => {
  return (
    <Wrapper>
   
        <StyledLink to="/" exact>
          <Image src={logo} />
          
        </StyledLink>
          <H1><Span>E.S.C.</Span> Mattress Center </H1>
    
    </Wrapper>
  )
}


export default Logo;