import React from 'react';
import styled from 'styled-components';


const Headline = styled.h2`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.red ? '#eb1c24' : '#1565c0'};
  color: white;
  margin: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  letter-spacing: .20rem;
  font-size: 1.2rem;
  @media(min-width: 412px) { letter-spacing: .25rem; font-size: 1.3rem; }
  @media(min-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: .23rem;
  }
  @media(min-width: 1024px) {
    font-size: 2.5rem;
  }
`;





const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #eee;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .6);
  margin-top: 10px;
  margin-right: 0px;
  margin-left: 0px;
  @media(min-width: 768px) {
    margin-top: 15px;
  }
  /* @media(min-width: 1024px) {
    margin-top: 30px;
    margin-right: 5px;
    margin-left: 5px;
  } */
  @media(min-width: 1300px) {
    margin-top: 15px;
    margin-right: 72px;
    margin-left: 72px;
  }
`;

const P = styled.p`
  text-align: center;
  margin-bottom: 0;
  margin-top: 0;
  
  font-family: 'Open Sans', sans-serif;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 1rem;
  line-height: 1.55rem;
  @media(min-width: 640px) {
    padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
    padding-bottom: 20px;
    line-height: 1.8rem;
    font-size: 1.2rem;
  }
  @media(min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
  @media(min-width: 1024px) {
    padding-left: 65px;
    padding-right: 65px;
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 1.8rem;
    line-height: 2.9rem;
  }
`


const Front = () => {
  return (
    <Main>
      <Headline>Floor Model Closeout Event</Headline>
      <P>
        Come in for huge savings on Floor Model mattresses now through March 25th!  Tempur-Pedic is changing out their 
        line-up and even though we just opened two months ago we’re selling off like-new Floor Models at savings up to 
        50% off.  The savings are while supplies last, so come in soon to make sure you get a great deal on the bed 
        of your dreams.
      </P>
      <Headline red>“Sleep Like the Experts Do!”</Headline>
    </Main>
  )
}

export default Front;