import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SealyImg from '../../images/SealyLogo.png';

const Name = styled.p`
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  text-decoration: none;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  
`;
const MainWrapper = styled.div`
display: flex;
flex-direction: row;
`

const Wrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
flex-basis: 100%;
`
const WrapperRight = styled.div`
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  
  align-self: flex-start;
  flex-basis: 20%;
`
const Img = styled.img`
  max-width: 15rem;
  align-self: center;
`
const StyledLink = styled(Link)`
text-decoration: none;
`

const LinkWrapper = styled.div`
  border: 2px solid black;
  margin-right: 10px;
  margin-bottom: 10px;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9);
  border-top-left-radius: .14rem;
  border-top-right-radius: .14rem;
  border-bottom-right-radius: .14rem;
  border-bottom-left-radius: .14rem;
`;

const MattImg = styled.img`
  margin: auto;
`

const Sealy = ({ data: { loading, error, essentials, performance, premium} }) => {
  if (error) return <h1>Sorry try again</h1>
  if(!loading) {
    return (
      <MainWrapper>
        <WrapperRight>
         <Img src={SealyImg} alt="Logo"/>
         <Img src={SealyImg} alt="Logo"/>
         <Img src={SealyImg} alt="Logo"/>
        </WrapperRight>
        <Wrapper>
          {essentials.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <StyledLink to={`/brands/sealy/${mattress.id}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <Name>{mattress.subBrand}<br/>{mattress.subName}</Name>
                </StyledLink>
              </LinkWrapper>
          ))}
            {performance.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <StyledLink to={`/brands/sealy/${mattress.id}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <Name>{mattress.subBrand}<br/>{mattress.subName}</Name>
                </StyledLink>
              </LinkWrapper>
          ))}
            {premium.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <StyledLink to={`/brands/sealy/${mattress.id}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <Name>{mattress.subBrand}<br/>{mattress.subName}</Name>
                </StyledLink>
              </LinkWrapper>
          ))}
        </Wrapper>
      </MainWrapper>
      )
    }
  return <h1>Loading</h1>
}


export const sealyMattresses = gql`
  query subBrands {
    essentials: SubLine(subLineName: "essentials") {
    mattresses {
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
      id
      subBrand
      subName
      coverImg {
        handle
      }
    }
  },
  premium: SubLine(subLineName: "premium") {
    mattresses {
      id
      subBrand
      subName
      coverImg {
        handle
      }
    }
  }
}`
export default graphql(sealyMattresses)(Sealy);

