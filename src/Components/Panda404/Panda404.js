import React from 'react'
import image from '../../images/ezgif.com-optimize.gif';
import styled from 'styled-components';
import '../../app.css';

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
  justify-content: center;
`
const Img = styled.img`
  margin: auto;
  max-width: 20rem;
  transition: all .2s ease-in;
@media(min-width: 800px) {
  max-width: 40rem;
}

`
const Header = styled.header`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  padding: 0px 30px 0px 30px;
  background-color: #1565c0;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`

const Title = styled.h2`
 letter-spacing: .2rem;
`

const Panda404 = () => {
  return (
    <Main className="animated fadeIn">
      <Header>
        <Title>Our panda couldn't find the product your looking for...</Title>
      </Header>
      <Img src={image} alt="panda sleeping"/>
    </Main>
  )
};

export default Panda404;