import React from 'react';
import { withApollo } from 'react-apollo';
import { StyledLink, H3, InfoWrapper, Img, AdjMarkdown } from './AdjustableStyles' 
import gql from 'graphql-tag';
const AdjHoc = (props) => {
  const prefetch = (baseUrl) => () => {
    props.client.query({
      query: gql`
    query singleBase($uri: String) {
      base: AdjBases(uri: $uri) {
        id uri fullName keyfeatures features price salePrice brandLine brandName baseDescription
        height warranty
        coverImg { handle }
        detail1 { handle }
        detail2 { handle } } } `,
        variables: {uri: baseUrl}
    })
  }
  return (
    <StyledLink to={`/adjustable/${props.uri}`} key={props.id} onMouseEnter={prefetch(props.uri)}>
          <H3>{props.fullName}</H3>
          <InfoWrapper>
            <Img 
              src={`https://media.graphcms.com/resize=w:400,h:400,fit:clip/${props.img}`} 
              alt={`${props.fullName} Ajustable base`}
            />
            <AdjMarkdown source={props.markdown} escapeHtml={false} />
          </InfoWrapper>
        </StyledLink>
  )
}

export default withApollo(AdjHoc)