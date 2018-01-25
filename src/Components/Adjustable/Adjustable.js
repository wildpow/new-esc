import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Markdown from 'react-markdown';
import './adj.css';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  /* justify-content: center;
  justify-self: center; */
  border: 2px solid black;
  /* width: 100vw;
  height: 100vh; */
  /* text-align: center; */
  padding-top: 20px;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  @media(min-width:1200px) {
    margin-left: 120px;
    margin-right: 120px;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 20px;
  margin-right: 20px;
  color: black;
  border: 2px solid black;
  margin-bottom: 20px;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  border-top-left-radius: .2rem;
  border-top-right-radius: .2rem;
  border-bottom-right-radius: .2rem;
  border-bottom-left-radius: .2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

`
export const H3 = styled.h3`
font-family: 'Roboto', sans-serif;
font-size: 1.2rem;
padding: 10px 30px 10px 30px;
background-color: #1565c0;
color: white;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
margin-top: 0;
margin-bottom: 0;

`;

const InfoWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
@media(min-width: 1200px) {
    justify-content: space-around;
  }
`;
const Img = styled.img`
  @media(max-width: 991px) {
    max-width: 250px;
    max-height: 250px;
    /* align-self: center; */
    margin-left: 20px; 
  }
`;
const AdjustableComponent = ({ data: {error, loading, Bases} }) => {
  if (error) return <h3>error {console.log(error)}</h3>
  if (!loading) {
    return (
    <Main className="animated fadeIn">
      {Bases.map((base) => (
        <StyledLink to="/eewffewf/wefwefwef/wefwef">
      <H3>{base.fullName}</H3>
      <InfoWrapper>
      <Img src={`https://media.graphcms.com/resize=w:350,h:350,fit:clip/${base.coverImg.handle}`} alt="this"/>
      <Markdown className="adj" source={base.features} escapeHtml={false} />
      </InfoWrapper>
      </StyledLink>
      ))}
      </Main>
    )
  }
  return <h3>loading</h3>
}


export const allAdjustables = gql`
  query allAdjustables {
    Bases: allAdjBaseses {
      fullName
      features
      coverImg {
        handle
    }
  }
}
`;


export default graphql(allAdjustables)(AdjustableComponent);