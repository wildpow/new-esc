import React from 'react';
import styled from 'styled-components';
import TopPromo from './TopPromo';

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffffff;
  background-color: ${props => props.theme.main};
  font-variant: small-caps;
  padding: 10px 6px 10px 6px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
  transition: all .25s ease-in;
  font-family: 'Roboto', sans-serif;
  font-size: .8rem;
  
  @media (min-width: 1024px) { font-size: 1.8rem;}
  @media (min-width: 768px) { 
    font-size: 1.3rem;
    padding: 10px 12px 12px 12px;
    letter-spacing: .1rem; }
  
`;

Top.defaultProps = {
  theme: {
    main: '#1565c0'
  }
}

const Wrapper = styled.div`
  margin:0;
  padding:0;
  text-align: cetner;
`;
const Phone = styled.a`
  text-decoration: none;
  color: #ffffff;
  transition: all .25s ease-in;
  &:hover {
    color: #eb1c24;
    text-shadow: 0px 0px 0px rgba(0, 0, 0, .1);
  }
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