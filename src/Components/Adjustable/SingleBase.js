import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import { Helmet } from "react-helmet";
import BreadCrumbs, { BreadWrapper } from '../BreadCrumbs/BreadCrumbs';
import { Wrapper, Main, MainInfo, PriceWrapper,
  Price, PriceTitle, Warranty, Description, Overview,
        Article, StyledMarkDown, Profile, MainTitle, InfoAnchor, Stuff }
        from '../SingleMattress/SingleMattStyles';
import DropDown from '../DropDrown/index';
import ImageViewer from '../ImageViewer/ImageViewer';
import Loading from '../Loading/Loading';
import { Redirect } from 'react-router-dom';
import Error from '../Error/Error';


const SingleBase = ({data: { loading, error, base}, match}) => {
  if (error) return <Error next="adjustable" next2={match.params.uri} error={true} only3Links={true}/>
  if (!loading) {
    if(!base) return <Redirect to='/404'/>
    return(
      <Fragment>
        <BreadWrapper>
          <BreadCrumbs next="Adjustable" here={base.fullName}/>
        </BreadWrapper>
        <Wrapper>
          <Helmet>
            <title>ESC: {base.fullName}</title>
            <meta name="description" content={base.baseDescription}/>
            <meta property="og:type"   content="website" />
            <meta property="og:site_name" content="E.S.C. Mattress Center"/>
            <meta property="og:url" content={`https://www.escmattresscenter.com/adjustable/${base.uri}`}/>
            <meta property="og:image" content={`https://media.graphcms.com/resize=w:1200,h:627,fit:clip/${base.coverImg.handle}`}/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="627"/>
            <meta property="og:image:alt" content={`E.S.C Mattress Center | ${base.fullName}`}/>
            <meta property="og:title" content="E.S.C Mattress Center"/>
            <meta property="og:description" content={`${base.fullName} Adjustable Base`}/>
          </Helmet>
        <header>
          <MainTitle>{base.fullName}</MainTitle>
        </header>
        <Main>
          <ImageViewer cover={base.coverImg.handle} img1={base.detail1.handle} img2={base.detail2.handle} type={'adjustable base without mattress'} fullname={base.fullName}/>
          <MainInfo>
            <Stuff>
              <StyledMarkDown source={base.features} escapeHtml={false} />
              <InfoAnchor href="#moreInfo">See more details</InfoAnchor>
            </Stuff>
            <PriceWrapper>
              <Price>
                <PriceTitle>Base Price</PriceTitle>
                <DropDown data={base.price} data2={base.salePrice}/>
              </Price>
            </PriceWrapper>
          </MainInfo>
        </Main>
        <Overview id="moreInfo">
          <h2>OVERVIEW & SPECS</h2>
        </Overview>
        <Article>
          <Description>
            {base.baseDescription}
          </Description>
          <Profile>Profile: {base.height}</Profile>
          <StyledMarkDown source={base.keyfeatures} escapeHtml={false} />
          <Warranty>{base.warranty}</Warranty>
        </Article>
      </Wrapper>
      <BreadWrapper>
          <BreadCrumbs next="adjustable" here={base.fullName}/>
        </BreadWrapper>
      </Fragment>
    )
  }
  return <Loading/>
}

export const singleBase = gql`
query singleBase($uri: String) {
  base: AdjBases(uri: $uri) {
    id
    uri
    fullName
    keyfeatures
    features
    price
    salePrice
    brandLine
    brandName
    baseDescription
    height
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
export default graphql(singleBase, {
  options: ({ match }) => ({
    variables: {
      uri: match.params.uri
    }
  })
})(SingleBase)