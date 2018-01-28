import styled from 'styled-components';

export const PriceList = styled.ul`
font-size: .3rem;
`
export const Overview = styled.h2`
 font-family: 'Roboto', sans-serif;
  font-size: .3rem;
  padding: 2px 20px 2px 20px;
  /* background-color: #1565c0;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); */
  text-align: center;
  @media(min-width: 768px) {
    font-size: 1.3rem;
    padding: 10px 20px 10px 20px;
    
  }
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
border: 2px solid black;
justify-content: center;
`;

export const MainTitle = styled.header`
  font-family: 'Roboto', sans-serif;
  font-size: .3rem;
  padding: 0px 30px 0px 30px;
  background-color: #1565c0;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  @media(min-width: 768px) {
    font-size: .9rem;
    padding: 0px 5px 0px 10px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

`;
export const MainInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;


`;
export const PriceWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 margin-top: 20px;
`

export const MattSet = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;
`
export const MattOnly = styled.div`

display: flex;
flex-direction: column;

`

export const PriceTitle = styled.p`
  text-align: center;
  
  margin-top: 0;
  margin-bottom: 0;
  font-size: .8rem;
  font-family: 'Open Sans', sans-serif;
`

export const MainImg = styled.img`
  max-width: 7rem;
  @media(min-width: 768px) {
    max-width: 14rem;
  }
  @media(min-width: 1024px) {
    max-width: 17rem;
  }
`
export const Img1 = styled.img`
max-width: 2rem;
@media(min-width: 768px) {
    max-width: 5rem;
  }
  @media(min-width: 1024px) {
    max-width: 7rem;
  }
`
export const Img2 = styled.img`
max-width: 2rem;
@media(min-width: 768px) {
    max-width: 5rem;
  }
  @media(min-width: 1024px) {
    max-width: 7rem;
  }
`
export const Img3 = styled.img`
max-width: 2rem;
max-height: 2rem;
@media(min-width: 768px) {
    max-width: 5rem;
  }
  @media(min-width: 1024px) {
    max-width: 7rem;
  }
`