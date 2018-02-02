import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {  MainWrapper, Wrapper, LinkWrapper, StyledLink,
  MattImg, MainTitle, SealyImgPlace, SealyName } from './MattListStyles';
import SealyImg from '../../images/SealyLogo.png';

const Sealy = ({ data: { loading, error, essentials, performance, premium} }) => {
  if (error) return <h6>panda's having trouble getting mattresses {console.log(error)}</h6>
  if(!loading) {
    return (
      <MainWrapper>
        <MainTitle>
          <SealyImgPlace src={SealyImg} alt="Logo"/>
        </MainTitle>
        <Wrapper>
          {essentials.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <StyledLink to={`/brands/sealy/${mattress.uri}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:290,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <SealyName>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</SealyName>
                </StyledLink>
              </LinkWrapper>
          ))}
            {performance.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <StyledLink to={`/brands/sealy/${mattress.uri}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:290,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <SealyName>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</SealyName>
                </StyledLink>
              </LinkWrapper>
          ))}
            {premium.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <StyledLink to={`/brands/sealy/${mattress.uri}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:290,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <SealyName>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</SealyName>
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

