import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {  MainWrapper,
          Wrapper,
          LinkWrapper,
          StyledLink,
          MattImg,
          Img, MainTitle } from './MattListStyles';
import styled from 'styled-components';
import StearnsImg from '../../images/StearnsLogo.png'
import '../../app.css';

const Name = styled.p`
  font-size: .9rem;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  @media(min-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.2rem;
  }
`;

const Sealy = ({ data: { loading, error, Brands} }) => {
  if (error) return <h6>panda's having trouble getting mattresses {console.log(error)}</h6>
  if(!loading) {
    return (
      <MainWrapper>
        <MainTitle>
          <Img src={StearnsImg} alt="Logo"/>
        </MainTitle>
        <Wrapper>
          {Brands.mattresses.map((mattress) => {
            return (
              <LinkWrapper  key={mattress.id} className="animated fadeIn">
                <StyledLink to={`/brands/stearns/${mattress.uri}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <Name>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</Name>
                </StyledLink>
              </LinkWrapper>)
          })}
          </Wrapper>
      </MainWrapper>
    )
  }
  return null
}


export const stearnsMattresses = gql`
  query stearnsMattresses {
    Brands(brand:"Stearns&Foster") {
      mattresses {
        brandName
        uri
        id
        subName
        subBrand
        coverImg {
          handle
        }
      }
    }
  }
` 


export default graphql(stearnsMattresses)(Sealy);