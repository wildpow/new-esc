import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import Helmet from 'react-helmet';
import { Wrapper, MainTitle, Main,
        MainInfo, PriceWrapper, MattOnly,
        MattSet, PriceTitle, Article,
        Overview, Warranty, Description,
        StyledMarkDown, Profile } from './SingleMattStyles';
import Loading from '../Loading/Loading';
import { Redirect } from 'react-router-dom';
import DropDown from '../DropDrown/index';
import ImageViewer from '../ImageViewer/ImageViewer';

const SingleMattress = ({ data: { loading, error, mattress } }) => {
  
  if (error) return <h1>Error fetching the Mattress!</h1>
  if (!loading) {
  if(!mattress) return <Redirect to='/404'/>
  return (
    <Wrapper>
      <Helmet>
        <title>ESC: {mattress.subBrand} {mattress.subName} Mattress</title>
        <meta name="description" content={mattress.discription}/>
        <meta property="og:type"   content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center"/>
        <meta property="og:url" content="https://www.escmattresscenter.com/"/>
        <meta property="og:image:secure_url" content={`https://media.graphcms.com/resize=w:1200,h:627,fit:clip/${mattress.coverImg.handle}`}/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="627"/>
        <meta property="og:image:alt" content={`E.S.C Mattress Center | ${mattress.name}`}/>
        <meta property="og:title" content="E.S.C. Mattress Center"/>
        <meta property="og:description" content={`E.S.C Mattress Center | ${mattress.name}`}/>
      </Helmet>
      <MainTitle>
        <h2>{mattress.name}</h2>
      </MainTitle>
      <Main>
        <ImageViewer cover={mattress.coverImg.handle} img1={mattress.detail1.handle} img2={mattress.detail2.handle} fullname={mattress.name} type={'mattress'}/>
        <MainInfo>
          <StyledMarkDown source={mattress.features} escapeHtml={false} />
          <PriceWrapper>
            <MattOnly>
              <PriceTitle>Mattress Only Price</PriceTitle>
              <DropDown data={mattress.mattOnly} data2={mattress.mattOnlySale}/>
            </MattOnly>
            <MattSet>
              <PriceTitle>Mattress Set Price</PriceTitle>
              <DropDown data={mattress.setPrice} data2={mattress.setPriceSale}/>
            </MattSet>
          </PriceWrapper>
        </MainInfo>
      </Main>
      <Overview>
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
