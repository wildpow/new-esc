import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import Markdown from 'react-markdown'
import '../../app.css';

import { Wrapper, MainTitle, Main,
  MainInfo, PriceWrapper, MattOnly,
  PriceTitle, Warranty, Description,
  Overview } from '../Brands/SingleMattStyles'
  import DropDown from '../DropDrown/index'
import ImageViewer from '../ImageViewer/ImageViewer'
import './adj.css'
const SingleBase = ({data: { loading, error, base}}) => {
  if (error) return <h1>Error fetching the base</h1>
  if (!loading) {
    return(
      <Wrapper className="animated fadeIn">
        <MainTitle>
          <h1>{base.fullName}</h1>
        </MainTitle>
        <Main>
        <ImageViewer cover={base.coverImg.handle} img1={base.detail1.handle} img2={base.detail2.handle} />
        <MainInfo>
          <Markdown className="adj" source={base.features} escapeHtml={false} />
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
      <Markdown className="adj" source={base.keyfeatures} escapeHtml={false} />
      <Warranty>{base.warranty}</Warranty>
  </div>

      </Wrapper>
    )
  }
  return <h3>loading base</h3>
}

export const singleBase = gql`
query singleBase($id: ID!) {
  base: AdjBases(id: $id) {
    id
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
      id: match.params.id
    }
  })
})(SingleBase)