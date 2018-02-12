import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const HomeFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Main = styled.div`
  background-color: white;
  margin-right: 0;
  margin-left: 0;
  animation-duration: .5s;
  animation-name: ${HomeFadeIn};
  animation-fill-mode: both;
  
  @media (min-width: 1300px) { margin-right: 105px; margin-left: 105px; }
`;

export const SaleWrapper = styled.div`
 
`;
export const Linky = styled(Link)`
margin: auto !important;
`
export const OneImg = styled.img`
  background-color: white;
  max-width: 600px;
  max-height: 1000px;
  @media(min-width: 768px) { max-width: 800px; max-height: 600px; }
  @media(min-width: 1024px) { max-width: 1000px; height: 600px; }
`
export const SaleImg = styled.img`
  background-color: white;
  max-width: 600px;
  max-height: 1000px;
  @media(min-width: 768px) { max-width: 800px; max-height: 600px; }
  @media(min-width: 1024px) { max-width: 1000px; height: 600px; }
`;

export const StearnsImg = styled.img`
  margin: auto;
  max-width: 600px;
  max-height: 1000px;
  @media(min-width: 768px) { max-width: 800px; max-height: 600px; }
  @media(min-width: 1024px) { max-width: 1000px; height: 600px; }
`;

export const TempurImg = styled.img`
  margin: auto;
  align-self: center;
  max-width: 600px;
  max-height: 1000px;
  @media(min-width: 768px) { max-width: 800px; max-height: 600px; }
  @media(min-width: 1024px) { max-width: 1000px; height: 600px; }
`;

export const SealyImg = styled.img`
  background-color: white;
  max-width: 600px;
  max-height: 1000px;
  @media(min-width: 768px) { max-width: 800px; max-height: 600px; }
  @media(min-width: 1024px) { max-width: 1000px; height: 600px; }
`;
