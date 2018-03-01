import React from 'react';
import gql from 'graphql-tag';
import Helmet from 'react-helmet';
import { graphql } from 'react-apollo';
import {  MainWrapper, Wrapper, LinkWrapper,
          MainTitle, StearnsImgPlaceHolder
        } from './MattListStyles';
import MattListHoC from './MattListHOC';
import StearnsImg from '../../images/StearnsLogo.png';

const Stearns = ({ data: { loading, error, Brands} }) => {
  const title = 'stearns';
  if (error) return <h6>panda's having trouble getting mattresses {console.log(error)}</h6>
  if(!loading) {
    return (
      <MainWrapper>
        <Helmet>
          <title>ESC: Stearns & Foster</title>
          <meta name="description" content="One of the oldest mattress manufactures in in the US, Stearns and Foster offers traditional luxury that you deserve. Come feel the luxury your body deserves on the new Stearns and Foster lines.  Raise your expectations with an adjustable base for the ultimate in comfort."/>
        </Helmet>
        <MainTitle>
          <StearnsImgPlaceHolder src={StearnsImg} alt="Logo of the Stearns and Foster mattress company"/>
        </MainTitle>
        <Wrapper>
          {Brands.mattresses.map((mattress) => {
            return (
              <LinkWrapper  key={mattress.id}>
                <MattListHoC uri={mattress.uri}
                              brandName={mattress.brandName}
                              subBrand={mattress.subBrand}
                              subName={mattress.subName}
                              img={mattress.coverImg.handle}
                              title={title} />
                {/* <StyledLink to={`/brands/stearns/${mattress.uri}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:290,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <StearnName>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</StearnName>
                </StyledLink> */}
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