import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import { Helmet } from "react-helmet";
import { Wrapper, MainTitle, Main, MainInfo, PriceWrapper,
  Price, PriceTitle, Warranty, Description, Overview,
        Article, StyledMarkDown, Profile }
        from '../SingleMattress/SingleMattStyles';
import DropDown from '../DropDrown/index';
import ImageViewer from '../ImageViewer/ImageViewer';
import Loading from '../Loading/Loading';
import { Redirect } from 'react-router-dom';

const SingleBase = ({data: { loading, error, base}}) => {
  if (error) return <div>{console.log(error)}</div>
  if (!loading) {
    if(!base) return <Redirect to='/404'/>
    return(
      <Wrapper>
        <Helmet>
          <title>ESC: {base.fullName}</title>
          <meta name="description" content={base.baseDescription}/>
          <meta property="og:type"   content="website" />
          <meta property="og:site_name" content="E.S.C. Mattress Center"/>
          <meta property="og:url" content="https://www.escmattresscenter.com/"/>
          <meta property="og:image" content={`https://media.graphcms.com/resize=w:1200,h:627,fit:clip/${base.coverImg.handle}`}/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="627"/>
          <meta property="og:image:alt" content={`E.S.C Mattress Center | ${base.fullName}`}/>
          <meta property="og:title" content={`E.S.C Mattress Center | ${base.fullName}`}/>
          <meta property="og:description" content={base.fullName}/>
        </Helmet>
        <MainTitle>
          <h1>{base.fullName}</h1>
        </MainTitle>
        <Main>
          <ImageViewer cover={base.coverImg.handle} img1={base.detail1.handle} img2={base.detail2.handle} type={'adjustable base without mattress'} fullname={base.fullName}/>
          <MainInfo>
            <StyledMarkDown source={base.features} escapeHtml={false} />
            <PriceWrapper>
              <Price>
                <PriceTitle>Base Price</PriceTitle>
                <DropDown data={base.price} data2={base.salePrice}/>
              </Price>
            </PriceWrapper>
          </MainInfo>
        </Main>
        <Overview>
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