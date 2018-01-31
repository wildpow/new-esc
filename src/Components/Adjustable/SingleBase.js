import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import '../../app.css';
import { Wrapper, MainTitle, Main, MainInfo, PriceWrapper,
        MattOnly, PriceTitle, Warranty, Description, Overview, Article }
        from '../Brands/SingleMattStyles';
import { SingleBaseMD } from './AdjustableStyles';
import DropDown from '../DropDrown/index';
import ImageViewer from '../ImageViewer/ImageViewer';
import styled from 'styled-components';




const Profile = styled.p`
margin-top: 0;
@media(min-width: 768px) {
  font-size: 1.3rem;
}
@media(min-width: 1024px) { font-size: 2rem; }
`;

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
      <Overview>
        <h2>OVERVIEW & SPECS</h2>
      </Overview>
      <Article>
        <Description>
          {base.baseDescription}
        </Description>
          <Profile>Profile: {base.height}"</Profile>
          <SingleBaseMD source={base.keyfeatures} escapeHtml={false} />
          <Warranty>{base.warranty}</Warranty>
      </Article>

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