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
  border: 2px solid black;
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
  border-top-left-radius: .14rem;
  border-top-right-radius: .14rem;
  border-bottom-right-radius: .14rem;
  border-bottom-left-radius: .14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all .15s ease-in-out;
  background-color: white;
  &:hover {
    z-index: 999;
    transform: scale3d(1.02,1.02,1);
  }

`
export const H3 = styled.h3`
font-family: 'Roboto', sans-serif;
font-size: 1rem;
padding: 10px 5px 10px 5px;
background-color: #1565c0;
color: white;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
margin-top: 0;
text-align: center;
margin-bottom: 0;
  @media(min-width: 581px) {
    font-size: 1.2rem;
    padding: 10px 30px 10px 30px;
}
  @media(min-width: 692px) {
    text-align: left;
    word-spacing: .18rem;
    letter-spacing: .17rem;
  }
`;

const InfoWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
@media(min-width: 1024px) {
    justify-content: space-evenly;
    /* margin-top:20px; */
  }
`;
const Img = styled.img`
  width: 200px;
  height: 150px;
  align-self: center;
  @media(min-width: 991px) {
    width: 400px;
    height: 300px;
    align-self: center;
    margin-left: 20px; 
  }
 
`;
const AdjustableComponent = ({ data: {error, loading, Bases} }) => {
  if (error) return <h3>error {console.log(error)}</h3>
  if (!loading) {
    return (
    <Main className="animated fadeIn">
      {Bases.map((base) => (
        <StyledLink to={`/adjustable/${base.id}`} key={base.id}>
          <H3>{base.fullName}</H3>
          <InfoWrapper>
            <Img src={`https://media.graphcms.com/resize=w:400,h:350,fit:clip/${base.coverImg.handle}`} alt="this"/>
            <Markdown className="adj" source={base.features} escapeHtml={false} />
          </InfoWrapper>
        </StyledLink>
      ))}
      </Main>
    )
  }
  return <h4>this</h4>
}

export const allAdjustables = gql`
  query allAdjustables {
    Bases: allAdjBaseses {
      id
      fullName
      features
      coverImg {
        handle
    }
  }
}
`;


export default graphql(allAdjustables)(AdjustableComponent);