import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import MattListHoC from './MattListHOC'; 
import {  MainWrapper, Wrapper, LinkWrapper,
  MainTitle, SealyImgPlace } from './MattListStyles';
import SealyImg from '../../images/SealyLogo.png';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import BreadCrumbs, { BreadWrapper } from '../BreadCrumbs/BreadCrumbs';

const Sealy = ({ data: { loading, error, essentials, performance, premium} }) => {
  const title = 'sealy';
  if (error) return <Error next="brands" next2="sealy" only3Links={true}/>
  if(!loading) {
    return (
      <MainWrapper>
        <Helmet>
          <title>ESC: Sealy Mattresses</title>
          <meta name="description" content="One of the worlds most recognized brands, Sealy offers all three styles of mattresses: Traditional innerspring, Hybrid, a mix of traditional and all foam, and all foam option. The Sealy line up offers a little something for everyone."/>
          <meta property="og:type"   content="website" />
          <meta property="og:site_name" content="E.S.C. Mattress Center"/>
          <meta property="og:url" content="https://www.escmattresscenter.com/"/>
          <meta property="og:image" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="627"/>
          <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
          <meta property="og:title" content="E.S.C. Mattress Center | Sealy"/>
          <meta property="og:description" content="One of the worlds most recognized brands, Sealy offers all three styles of mattresses: Traditional innerspring, Hybrid, a mix of traditional and all foam, and all foam option. The Sealy line up offers a little something for everyone."/>
        </Helmet>
        <BreadWrapper Brands>
          <BreadCrumbs next="Brands" here="Sealy"/>
        </BreadWrapper>
        <MainTitle>
          <SealyImgPlace src={SealyImg} alt="A logo of the Sealy mattress company"/>
        </MainTitle>
        <Wrapper>
          {essentials.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <MattListHoC uri={mattress.uri}
                              brandName={mattress.brandName}
                              subBrand={mattress.subBrand}
                              subName={mattress.subName}
                              img={mattress.coverImg.handle}
                              title={title}
                              priceRange={mattress.priceRange} 
                />
              </LinkWrapper>
          ))}
            {performance.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <MattListHoC uri={mattress.uri}
                              brandName={mattress.brandName}
                              subBrand={mattress.subBrand}
                              subName={mattress.subName}
                              img={mattress.coverImg.handle}
                              title={title}
                              priceRange={mattress.priceRange} 
                />
              </LinkWrapper>
          ))}
            {premium.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <MattListHoC uri={mattress.uri}
                              brandName={mattress.brandName}
                              subBrand={mattress.subBrand}
                              subName={mattress.subName}
                              img={mattress.coverImg.handle}
                              title={title}
                              priceRange={mattress.priceRange} 
                />
              </LinkWrapper>
          ))}
        </Wrapper>
        <BreadWrapper Brands Bottom>
          <BreadCrumbs next="Brands" here="Sealy"/>
        </BreadWrapper>
      </MainWrapper>
      )
    }
  return <Loading/>
}


export const sealyMattresses = gql`
  query subBrands {
    essentials: SubLine(subLineName: "essentials") {
    mattresses(filter: {isPublished: true} orderBy: orderByPrice_ASC  ) {
      brandName
      uri
      id
      subBrand
      subName
      priceRange
      coverImg {
        handle
      }
    }
  },
  performance: SubLine(subLineName: "performance") {
    mattresses(filter: {isPublished: true} orderBy: orderByPrice_ASC  ) {
      brandName
      id
      uri
      subBrand
      subName
      priceRange
      coverImg {
        handle
      }
    }
  },
  premium: SubLine(subLineName: "premium") {
    mattresses(filter: {isPublished: true} orderBy: orderByPrice_ASC  ) {
      brandName
      id
      uri
      subBrand
      subName
      priceRange
      coverImg {
        handle
      }
    }
  }
}`
export default graphql(sealyMattresses)(Sealy);

