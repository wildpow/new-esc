import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import {  MainWrapper, Wrapper, LinkWrapper, StyledLink,
          MattImg, MainTitle, StearnsImgPlaceHolder, StearnName
        } from './MattListStyles';

import StearnsImg from '../../images/StearnsLogo.png';

const Stearns = ({ data: { loading, error, Brands} }) => {
  if (error) return <h6>panda's having trouble getting mattresses {console.log(error)}</h6>
  if(!loading) {
    return (
      <MainWrapper>
        <MainTitle>
          <StearnsImgPlaceHolder src={StearnsImg} alt="Logo"/>
        </MainTitle>
        <Wrapper>
          {Brands.mattresses.map((mattress) => {
            return (
              <LinkWrapper  key={mattress.id} className="animated fadeIn">
                <StyledLink to={`/brands/stearns/${mattress.uri}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:290,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <StearnName>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</StearnName>
                </StyledLink>
              </LinkWrapper>)
          })}
          </Wrapper>
      </MainWrapper>
    )
  }
  return null
};

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
`; 
export default graphql(stearnsMattresses)(Stearns);