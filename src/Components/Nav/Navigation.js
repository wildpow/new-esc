import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media(min-width: 1300px) {
    justify-content: space-around;
  }
`;

const Nav = styled.nav`
  display: none;
  @media(min-width: 1022px) {
    display: block;
    padding-top: 40px;
  }
`;

const StyledLinkLeft = styled(NavLink)`
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.3rem;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    margin-left: 20px;
    color: #1565c0;
    transition: all .20s ease-in;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    &:hover {
      border-top: 8px solid #eb1c24;
    }
    &.active {
      border-bottom: 8px solid #eb1c24;
      border-top: 0px solid #eb1c24;
    }  
  @media(min-width: 1300px) {
    margin-left:0;
    font-size: 1.6rem;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const StyledLinkRight = styled(NavLink)`
  transition: all .20s ease-in;
  margin-right: 20px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.3rem;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  color: #1565c0;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  &:hover {
      border-top: 8px solid #eb1c24;
    }
    &.active {
      border-bottom: 8px solid #eb1c24;
      border-top: 0px solid #eb1c24;
    }  

@media(min-width: 1300px) {
  margin-right: 0;
  font-size: 1.6rem;
  padding-left: 20px;
  padding-right: 20px;
}
`;
const Navigation = () => {
  return (
    <Header>
      <Nav>
        <StyledLinkLeft to="/brands">Brands</StyledLinkLeft>
        <StyledLinkLeft to="/ajustable">Ajustable</StyledLinkLeft>
        <StyledLinkLeft to="/accessories">Accessories</StyledLinkLeft>
      </Nav>
      <Nav>
        <StyledLinkRight to="/financing">Financing</StyledLinkRight>
        <StyledLinkRight to="/blog">Our Blog</StyledLinkRight>
        <StyledLinkRight to="/about">About Us</StyledLinkRight>
      </Nav>
    </Header>
  )
}

export default Navigation;