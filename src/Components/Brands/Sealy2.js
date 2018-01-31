import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import SealyImg from '../../images/SealyLogo.png';
import {  MainWrapper,
  Wrapper,
  LinkWrapper,
  StyledLink,
  MattImg,
  MainTitle,Img  } from './MattListStyles';
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

const Sealy = ({ data: { loading, error, essentials, performance, premium} }) => {
  if (error) return <h6>panda's having trouble getting mattresses {console.log(error)}</h6>
  if(!loading) {
    return (
      <MainWrapper className="animated fadeIn">
        <MainTitle>
         <Img src={SealyImg} alt="Logo"/>
        </MainTitle>
        <Wrapper>
          {essentials.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <StyledLink to={`/brands/sealy/${mattress.uri}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <Name>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</Name>
                </StyledLink>
              </LinkWrapper>
          ))}
            {performance.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <StyledLink to={`/brands/sealy/${mattress.uri}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <Name>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</Name>
                </StyledLink>
              </LinkWrapper>
          ))}
            {premium.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <StyledLink to={`/brands/sealy/${mattress.uri}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <Name>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</Name>
                </StyledLink>
              </LinkWrapper>
          ))}
        </Wrapper>
      </MainWrapper>
      )
    }
  return null
}


export const sealyMattresses = gql`
  query subBrands {
    essentials: SubLine(subLineName: "essentials") {
    mattresses {
      brandName
      uri
      id
      subBrand
      subName
      coverImg {
        handle
      }
    }
  },
  performance: SubLine(subLineName: "performance") {
    mattresses {
      brandName
      id
      uri
      subBrand
      subName
      coverImg {
        handle
      }
    }
  },
  premium: SubLine(subLineName: "premium") {
    mattresses {
      brandName
      id
      uri
      subBrand
      subName
      coverImg {
        handle
      }
    }
  }
}`
export default graphql(sealyMattresses)(Sealy);

