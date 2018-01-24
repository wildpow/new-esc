import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import SealyImg from '../../images/SealyLogo.png';
import {  MainWrapper,
  WrapperRight,
  Img,Wrapper,
  LinkWrapper,
  StyledLink,
  MattImg,
  Name  } from './MattListStyles';
  import '../../app.css';

const Sealy = ({ data: { loading, error, essentials, performance, premium} }) => {
  if (error) return <h1>Sorry try again</h1>
  if(!loading) {
    return (
      <MainWrapper className="animated fadeIn">
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

