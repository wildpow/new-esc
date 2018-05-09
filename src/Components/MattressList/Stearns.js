import React from 'react';
import gql from 'graphql-tag';
import Helmet from 'react-helmet';
import { graphql } from 'react-apollo';
import {  MainWrapper, Wrapper, LinkWrapper,
          MainTitle, StearnsImgPlaceHolder
        } from './MattListStyles';
import MattListHoC from './MattListHOC';
import StearnsImg from '../../images/StearnsLogo.png';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import BreadCrumbs, { BreadWrapper } from '../BreadCrumbs/BreadCrumbs';

const Stearns = ({ data: { loading, error, Brands} }) => {
  const title = 'stearns';
  if (error) return <Error next="brands" next2="stearns" only3Links={true}/>
  if(!loading) {
    return (
      <MainWrapper>
        <Helmet>
          <title>ESC: Stearns & Foster Mattresses</title>
          <meta name="description" content="One of the oldest mattress manufactures in in the US, Stearns and Foster offers traditional luxury that you deserve. Come feel the luxury your body deserves on the new Stearns and Foster lines.  Raise your expectations with an adjustable base for the ultimate in comfort."/>
          <meta property="og:type"   content="website" />
          <meta property="og:site_name" content="E.S.C. Mattress Center"/>
          <meta property="og:url" content="https://www.escmattresscenter.com/"/>
          <meta property="og:image" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="627"/>
          <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
          <meta property="og:title" content="E.S.C. Mattress Center | Stearns and Foster"/>
          <meta property="og:description" content="One of the oldest mattress manufactures in in the US, Stearns and Foster offers traditional luxury that you deserve. Come feel the luxury your body deserves on the new Stearns and Foster lines.  Raise your expectations with an adjustable base for the ultimate in comfort."/>
        </Helmet>
        <BreadWrapper Brands>
          <BreadCrumbs next="Brands" here="Stearns"/>
        </BreadWrapper>
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
                              title={title} 
                              priceRange={mattress.priceRange} 
                />
              </LinkWrapper>)
          })}
          </Wrapper>
          <BreadWrapper Brands Bottom>
          <BreadCrumbs next="Brands" here="stearns"/>
        </BreadWrapper>
      </MainWrapper>
    )
  }
  return <Loading/>
};

export const stearnsMattresses = gql`
  query stearnsMattresses {
    Brands(brand:"Stearns&Foster") {
      mattresses(filter: {isPublished: true}  ) {
        brandName
        uri
        id
        subName
        subBrand
        priceRange
        coverImg {
          handle
        }
      }
    }
  }
`; 
export default graphql(stearnsMattresses)(Stearns);