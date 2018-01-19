import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import { Header, Image, H1, Span } from './LogoStyles.js';

const PandaLink = styled.a`
  text-decoration: none;

`;
const Wrapper = styled.div`

`
const Logo = () => {
  return (
    <Wrapper>
      <PandaLink href="#">
        <Header>
          <Image src={logo}/>
          <H1><Span>E.S.C.</Span> Mattress Center </H1>
        </Header>
      </PandaLink>
    </Wrapper>
  )
}


export default Logo;