import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 0px;
  letter-spacing: .1rem;
  margin-bottom: -50px;
  @media(min-width: 768px) {
    margin-bottom: -50px;
  }
  
  @media(min-width: 1024px) {
    padding-top: 40px;
    margin-bottom: 0;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0;
`;

const RightListItem = styled.li`
  transition: all .25s ease-in;
  display: none;
  @media(min-width: 1024px) {
    display: block;
    list-style: none;
    padding: 10px 10px 135px 10px;
    font-size: 1.2rem;
    margin-right: 20px;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    margin-right: 0px;
  }
  @media(min-width: 1360px) {
    margin-right: 40px;
    font-size: 1.4rem;
  }
  @media(min-width: 1500px) {
    margin-right: 60px;
    font-size: 1.6rem;
  }
`;
const LeftListItem = styled.li`
  transition: all .25s ease-in;
  display: none;
  @media(min-width: 1024px) {
    display: block;
    list-style: none;
    margin-left: 0px;
    padding: 10px 10px 10px 10px;
    font-size: 1.2rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    margin-left: 5px;
  }
  @media(min-width: 1360px) {
    margin-left: 40px;
    font-size: 1.4rem;
  }
  @media(min-width: 1500px) {
    font-size: 1.6rem;
    margin-left: 60px;
  }
`

const Ham = styled.div`
  margin-right: 20px;
  margin-top: 20px;
  font-size: 2rem;
  @media(min-width: 1024px) {
    display: none;
  }
`
const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <LeftListItem>Brands</LeftListItem>
        <LeftListItem>Adjustable</LeftListItem>
        <LeftListItem>Accessories</LeftListItem>
      </NavList>
      <NavList>
        <RightListItem>Financing</RightListItem>
        <RightListItem>Our Blog</RightListItem>
        <RightListItem>About Us</RightListItem>
      </NavList>
      <Ham>H</Ham>
    </Nav>
  )
}

export default Navigation