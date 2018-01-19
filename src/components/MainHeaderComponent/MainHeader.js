import Logo from '../LogoComponent/Logo';
import styled from 'styled-components';
import Navigation from '../NavComponent/Navigation';
import React from 'react';

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const MainHeader = () => {
  return (
    <Header>
      <Navigation/>
      <Logo/>
    </Header>
  )
}

export default MainHeader;

