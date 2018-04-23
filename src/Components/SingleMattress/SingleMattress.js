import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import { Wrapper, MainTitle, Main,
        MainInfo, PriceWrapper,
        Price, PriceTitle, Article,
        Overview, Warranty, Description,
        StyledMarkDown, Profile, InfoAnchor, Stuff } from './SingleMattStyles';
import PriceCalculator from '../Price/PriceCalculator.js';
import Loading from '../Loading/Loading';
import { Redirect } from 'react-router-dom';
import DropDown from '../DropDrown/index';
import ImageViewer from '../ImageViewer/ImageViewer';
import Error from '../Error/Error';
import BreadCrumbs, { BreadWrapper } from '../BreadCrumbs/BreadCrumbs';

const SingleMattress = ({ data: { loading, error, mattress } }) => {
  if (error) return <Error/>
  if (!loading) {
  if(!mattress) return <Redirect to='/404'/>
  const SealyBoxPrice = [100, 100, 100, 100, 200];
  const StearnsBoxPrice = [125, 125, 150, 150, 250];
  const TempurBoxPrice = [175, 175, 250, 250, 350]; 
  let BoxspringPrice;
  let name = '';
    if (mattress.brandName === 'Tempur-PEDIC') {
      BoxspringPrice = TempurBoxPrice;
      name = 'tempurpedic';
    } else if (mattress.brandName === 'Sealy'){
      BoxspringPrice = SealyBoxPrice;
      name = 'sealy'
    } else {
      BoxspringPrice = StearnsBoxPrice;
      name = 'stearns'
    }
  return (
    <div>
      <Helmet>
        <title>ESC: {mattress.subBrand} {mattress.subName} Mattress</title>
        <meta name="description" content={mattress.discription}/>
        <meta property="og:type"   content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center"/>
        <meta property="og:url" content={`https://www.escmattresscenter.com/brands/${name}/${mattress.uri}`}/>
        <meta property="og:image" content={`https://media.graphcms.com/resize=w:1200,h:627,fit:clip/${mattress.coverImg.handle}`}/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="627"/>
        <meta property="og:image:alt" content={`E.S.C Mattress Center | ${mattress.name}`}/>
        <meta property="og:title" content="E.S.C. Mattress Center"/>
        <meta property="og:description" content={`${mattress.name} Mattress`}/>
      </Helmet>
      <BreadWrapper>
        <BreadCrumbs next="Brands" next2={name.charAt(0).toUpperCase() + name.slice(1)} here={mattress.name}/>
      </BreadWrapper>
    <Wrapper>
      <header> 
        <MainTitle>{mattress.name}</MainTitle>
      </header>
      <Main>
        <ImageViewer cover={mattress.coverImg.handle} img1={mattress.detail1.handle} img2={mattress.detail2.handle} fullname={mattress.name} type={'mattress'}/>
        <MainInfo>
          <Stuff>
            <StyledMarkDown source={mattress.features} escapeHtml={false} />
            <InfoAnchor href="#moreInfo">See more details</InfoAnchor>
          </Stuff>
          {/* <PriceWrapper> */}
            <PriceCalculator data={mattress.mattOnly} boxPrice={BoxspringPrice}/>
            {/* <Price>
              <PriceTitle>Mattress Only Price</PriceTitle>
              <DropDown data={mattress.mattOnly} data2={mattress.mattOnlySale}/>
            </Price>
            <Price>
              <PriceTitle>Mattress Set Price</PriceTitle>
              <DropDown data={mattress.setPrice} data2={mattress.setPriceSale}/>
            </Price> */}
          {/* </PriceWrapper> */}
        </MainInfo>
      </Main>
      <Overview id="moreInfo">
        <h2>OVERVIEW & SPECS</h2>
      </Overview>
      <Article>
        <Description>
          {mattress.discription}
        </Description>
        <Profile>Profile: {mattress.profile}</Profile>
        <StyledMarkDown source={mattress.contruction} escapeHtml={false} />
        <Warranty>{mattress.warranty}</Warranty>
      </Article>
    </Wrapper>
    <BreadWrapper>
        <BreadCrumbs next="Brands" next2={name.charAt(0).toUpperCase() + name.slice(1)} here={mattress.name}/>
      </BreadWrapper>
    </div>
    )
  }
  return <Loading/>
}

export const singleMatt = gql`
  query singleMatt($uri: String) {
    mattress: Mattress(uri: $uri) {
      id
      uri
      brandName
      subName
      subBrand
      name
      discription
      features
      profile
      contruction
      mattOnly
      mattOnlySale
      setPrice
      setPriceSale
      warranty
      coverImg {
        handle
      }
      detail1 {
        handle
      }
      detail2 {
        handle
      }
    }
  }
`
export default graphql(singleMatt, {
  options: ({ match }) => ({
    variables: {
      uri: match.params.uri
    }
  })
})(SingleMattress)
