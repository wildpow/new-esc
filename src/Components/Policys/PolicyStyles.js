import styled, { keyframes } from 'styled-components';

const PolicyFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const MainArticle = styled.article`
  border: 1px solid #eee;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .6);
  animation-duration: .5s;
  animation-name: ${PolicyFadeIn};
  animation-fill-mode: both;
`;


export const WarranyName = styled.h4`
  text-align: center;
  border-bottom: 4px solid #eb1c24;
  margin: 0 auto;
  font-size: 1rem;
  letter-spacing: .09rem;
  /* line-height: 1rem; */
  font-family: 'Roboto', sans-serif;
  @media(min-width: 768px) { font-size: 1.5rem; letter-spacing: .12rem;}
  @media(min-width: 1022px) { font-size: 1.7rem; letter-spacing: .20rem; }
`;

export const WarranyNumber = styled.a`
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: center;
  color: #1565c0;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  letter-spacing: .12rem;

  &:hover {
    color: #eb1c24;
  }
  @media(min-width: 768px) { 
    font-size: 1.8rem;
    letter-spacing: .15rem;
    }
`;

export const WarrantyTopper = styled.h3`
  font-family: 'Roboto', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  
  padding-left: 20px;
  padding-right: 20px;
  line-height: 1.2rem;
  letter-spacing: .1rem;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  color: white; 
  background-color: #1565c0;
  @media(min-width:768px) {
    line-height: 1.8rem;
    letter-spacing: .18rem;
    font-size: 1.4rem;
    padding-left: 100px;
    padding-right: 100px;
  }
  @media(min-width: 1024px) { 
    padding-left: 140px;
    padding-right: 140px;
    font-size: 1.6rem; 
    line-height: 2.4rem;
    letter-spacing: .22rem;}
`

export const WarrantyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const P = styled.p`
  text-indent: 25px;
  line-height: 1.35rem;
  padding-right: 8px;
  padding-left: 8px;
  font-family: 'Open Sans', sans-serif;
  margin-top: 10px;
  @media(min-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.8rem;
    padding-right: 17px;
    padding-left: 17px;
  }
  @media(min-width: 1024px) { 
    font-size: 1.6rem;
    line-height: 2.1rem;
    margin-bottom: 10px;
    padding-right: 25px;
    padding-left: 25px;
    padding-bottom: 15px;
    padding-top: 15px;
    }
`;

export const Heading = styled.h3`
  border-bottom: 4px solid #eb1c24;
  padding-bottom: 5px;
  font-family: 'Open Sans', sans-serif;
  padding-left: 10px;
  margin-bottom: 8px;
  @media(min-width: 768px) {
    font-size: 1.7rem;
    padding-bottom: 8px;
  }
  @media(min-width: 1024px) {
    padding-top: 10px;
    margin-bottom: 20px;
    font-size: 1.8rem;
  }
`; 

export const Headline = styled.h2`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  
  background-color: #1565c0;
  color: white;
  margin: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  letter-spacing: .25rem;
  font-size: 1.2rem;
  @media(min-width: 768px) {
    font-size: 2rem;
  }
  @media(min-width: 1024px) {
    font-size: 2.2rem;
  }
`;

export const WarrantyHeadline = Headline.extend`
  margin-bottom: 20px
`;