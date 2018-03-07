import React from 'react';
import gql from 'graphql-tag';
import Helmet from 'react-helmet';
import { graphql } from 'react-apollo';
import {  MainWrapper,
          Wrapper,
          LinkWrapper,
          MainTitle, TempurPImg  } from './MattListStyles';
import TempurImg from '../../images/TempurLogo2.png';
import MattListHoC from './MattListHOC';
import Loading from '../Loading/Loading';

const Tempur = ({ data: { loading, error, Brands} }) => {
  const title = 'tempurpedic';

  if (error) return <h6>panda's having trouble getting mattresses {console.log(error)}</h6>
  if(!loading) {
    return (
      <MainWrapper>
        <Helmet>
          <title>ESC: Tempur-Pedic Mattresses</title>
          <meta name="description" content="Tempurpedic is the most recommended brand in the US. They offer a memory foam mattress as well as their flex line, and innovative hybrid from the brand you know and love. Come see JD Power’s Consumers choice award winner for 2017."/>
          <meta property="og:type"   content="website" />
          <meta property="og:site_name" content="E.S.C. Mattress Center"/>
          <meta property="og:url" content="https://www.escmattresscenter.com/"/>
          <meta property="og:image:secure_url" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="627"/>
          <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
          <meta property="og:title" content="E.S.C. Mattress Center | Tempurpedic"/>
          <meta property="og:description" content="Tempurpedic is the most recommended brand in the US. They offer a memory foam mattress as well as their flex line, and innovative hybrid from the brand you know and love. Come see JD Power’s Consumers choice award winner for 2017."/>          
        </Helmet>
        <MainTitle>
          <TempurPImg src={TempurImg} alt="Logo of the Tempurpedic mattress company"/>
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
                  {/* <StyledLink to={`/brands/tempurpedic/${mattress.uri}`}>
                  <MattImg src={`https://media.graphcms.com/resize=w:290,h:250,fit:clip/${mattress.coverImg.handle}`} alt="this"/>
                  <Name>{mattress.brandName}<br/>{mattress.subBrand}<br/>{mattress.subName}</Name>
                </StyledLink> */}
              </LinkWrapper>)
          })}
          </Wrapper>
      </MainWrapper>
    )
  }
  return <Loading/>
}

export const tempurMattresses = gql`
  query tempurMattresses {
    Brands(brand:"Tempur-Pedic") {
      mattresses {
        uri
        brandName
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


export default graphql(tempurMattresses)(Tempur);