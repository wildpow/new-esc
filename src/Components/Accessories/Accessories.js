import React from 'react';
import styled from 'styled-components';
import '../../app.css'
import logo from '../../images/logo.png'
import {Image} from '../Logo/LogoStyles'
import {MainTitle } from '../Brands/SingleMattStyles'
const Main = styled.div`
font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  border-top-left-radius: .11rem;
  border-top-right-radius: .11rem;
  border: 2px solid black;
  transition: all .2s ease-in;
  text-align: center;
  margin-left: 9px;
    margin-right: 9px;
    @media(min-width: 412px) {
    margin-left: 30px;
    margin-right: 30px;
  }
  @media(min-width: 600px) {
    margin-left: 70px;
    margin-right: 70px;
  }
  @media(min-width: 900px) {
    margin-left: 90px;
    margin-right: 90px;
  }
  @media(min-width: 1100px) {
    margin-left: 150px;
    margin-right: 150px;
  }
  @media(min-width: 1200px) {
    margin-left: 220px;
    margin-right: 220px;
  }
  @media(min-width: 1350px) {
    margin-left: 250px;
    margin-right: 250px;
  }
`
const AccWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
`;
const Soon = styled.p`
padding: 0;
padding: 0;
font-size: 1.4rem;
`
const AccessoriesComponent = () => {
  return (
    <Main className="animated fadeIn">
      <AccWrapper>
        <MainTitle>
          <h2>Accessories Section</h2>
        </MainTitle>
      <Soon>Coming soon...</Soon>
      <Image src={logo} alt="PANDA"/>
      </AccWrapper>
      
    </Main>
  )
}

export default AccessoriesComponent;