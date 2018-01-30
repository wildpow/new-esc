import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import '../../app.css';
import { Wrapper, MainTitle, Main, MainInfo, PriceWrapper,
        MattOnly, PriceTitle, Warranty, Description, Overview }
        from '../Brands/SingleMattStyles';
import { SingleBaseMD } from './AdjustableStyles';
import DropDown from '../DropDrown/index';
import ImageViewer from '../ImageViewer/ImageViewer';

const SingleBase = ({data: { loading, error, base}}) => {
  if (error) return <div>{console.log(error)}</div>
  if (!loading) {
    return(
      <Wrapper className="animated fadeIn">
        <MainTitle>
          <h1>{base.fullName}</h1>
        </MainTitle>
        <Main>
        <ImageViewer cover={base.coverImg.handle} img1={base.detail1.handle} img2={base.detail2.handle} />
        <MainInfo>
          <SingleBaseMD source={base.features} escapeHtml={false} />
          <PriceWrapper>
            <MattOnly>
              <PriceTitle>Base Price</PriceTitle>
                <DropDown data={base.price}/>
            </MattOnly>
          </PriceWrapper>
        </MainInfo>
      </Main>

      <div id='row'>
    <Overview>
      OVERVIEW & SPECS
    </Overview><Description>
      {base.baseDescription}</Description>
      <p>Profile: {base.height}"</p>
      <SingleBaseMD source={base.keyfeatures} escapeHtml={false} />
      <Warranty>{base.warranty}</Warranty>
  </div>

      </Wrapper>
    )
  }
  return null
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