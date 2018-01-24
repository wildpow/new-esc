import styled from 'styled-components';
import Markdown from 'react-markdown'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
border: 2px solid black;
justify-content: center;
`;

export const MainTitle = styled.header`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  padding: 0px 30px 0px 30px;
  background-color: #1565c0;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

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
  font-size: 1.4rem;
  font-family: 'Open Sans', sans-serif;
`