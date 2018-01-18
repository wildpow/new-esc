import React from 'react';
import styled from 'styled-components';
import TopPromo from './TopPromo';

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffffff;
  background-color: #1565c0;
  font-variant: small-caps;
  padding: 5px 6px 10px 6px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
  font-family: 'Open Sans', sans-serif;
  font-size: .8rem;

  @media (min-width: 1024px) { font-size: 1.4rem; }
  @media (min-width: 768px) { font-size: 1.5rem; padding: 10px 12px 12px 12px; }
  
`;

const Wrapper = styled.div`
  margin:0;
  padding:0;
  text-align: cetner;
`;
const Phone = styled.a`
  text-decoration: none;
  color: #ffffff;
  
`;
const PhoneWrapper = styled.div`
  margin: 0;
  padding: 0;
  transition: all .25s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;

const Topper = () => {
  return (
    <Top>
      <Wrapper>
        <TopPromo/>
      </Wrapper>
      <Wrapper>
        <PhoneWrapper><Phone href="tel:1-425-512-0017">Call: (425)-512-0017</Phone></PhoneWrapper>
      </Wrapper>
    </Top>
  )
};

export default Topper