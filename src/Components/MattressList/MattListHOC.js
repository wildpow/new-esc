import React from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import { StyledLink, MattImg, Name } from './MattListStyles';

const MattListHoC = (props) => {
  const prefetch = (mattUrl) => () =>{
    props.client.query({
      query: gql`
      query singleMatt($uri: String) {
        mattress: Mattress(uri: $uri) {
          id subName subBrand name discription features profile
          contruction mattOnly mattOnlySale setPrice setPriceSale warranty
          coverImg { handle }
          detail1 { handle }
          detail2 { handle } } }`,
          variables: { uri: mattUrl}
    })}
    return (
      <StyledLink to={`/brands/${props.title}/${props.uri}`} onMouseEnter={prefetch(props.uri)} onTouchStart={prefetch(props.uri)}>
          <MattImg src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${props.img}`} alt={`Image of a ${props.brandName} ${props.subBrand} ${props.subName} mattress`}/>
          <Name>{props.brandName}<br/>{props.subBrand}<br/>{props.subName}</Name>
      </StyledLink>
    )
}

export default withApollo(MattListHoC);