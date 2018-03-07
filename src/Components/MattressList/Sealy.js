import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import MattListHoC from './MattListHOC'; 
import {  MainWrapper, Wrapper, LinkWrapper,
  MainTitle, SealyImgPlace } from './MattListStyles';
import SealyImg from '../../images/SealyLogo.png';
import Loading from '../Loading/Loading';

const Sealy = ({ data: { loading, error, essentials, performance, premium} }) => {
  const title = 'sealy';
  if (error) return <h6>panda's having trouble getting mattresses {console.log(error)}</h6>
  if(!loading) {
    return (
      <MainWrapper>
        <Helmet>
          <title>ESC: Sealy Mattresses</title>
          <meta name="description" content="One of the worlds most recognized brands, Sealy offers all three styles of mattresses: Traditional innerspring, Hybrid, a mix of traditional and all foam, and all foam option. The Sealy line up offers a little something for everyone."/>
          <meta property="og:type"   content="website" />
          <meta property="og:site_name" content="E.S.C. Mattress Center"/>
          <meta property="og:url" content="https://www.escmattresscenter.com/"/>
          <meta property="og:image:secure_url" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="627"/>
          <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
          <meta property="og:title" content="E.S.C. Mattress Center | Sealy"/>
          <meta property="og:description" content="One of the worlds most recognized brands, Sealy offers all three styles of mattresses: Traditional innerspring, Hybrid, a mix of traditional and all foam, and all foam option. The Sealy line up offers a little something for everyone."/>
        </Helmet>
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
                              title={title} />
                {/* <StyledLink to={`/brands/sealy/${mattress.uri}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:290,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <SealyName>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</SealyName>
                </StyledLink> */}
              </LinkWrapper>
          ))}
            {performance.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <MattListHoC uri={mattress.uri}
                              brandName={mattress.brandName}
                              subBrand={mattress.subBrand}
                              subName={mattress.subName}
                              img={mattress.coverImg.handle}
                              title={title} />
                {/* <StyledLink to={`/brands/sealy/${mattress.uri}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:290,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <SealyName>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</SealyName>
                </StyledLink> */}
              </LinkWrapper>
          ))}
            {premium.mattresses.map((mattress) => (
              <LinkWrapper key={mattress.id}>
                <MattListHoC uri={mattress.uri}
                              brandName={mattress.brandName}
                              subBrand={mattress.subBrand}
                              subName={mattress.subName}
                              img={mattress.coverImg.handle}
                              title={title} />
                {/* <StyledLink to={`/brands/sealy/${mattress.uri}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:290,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <SealyName>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</SealyName>
                </StyledLink> */}
              </LinkWrapper>
          ))}
        </Wrapper>
      </MainWrapper>
      )
    }
  return <Loading/>
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

