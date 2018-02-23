import React from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { StyledLink, InfoWrapper, Img, H3} from './PrefetchStyles';

const PrefetchPost = (props) => {
  
  const prefetch = (postSlug) => () => {
    props.client.query({
      query: gql`
      query singlePost($slug: String!) {
        post: Post(slug: $slug) { id slug title content dateAndTime bottomimg { handle height width} } } `,
        variables: {slug: postSlug }
    })
  }
  return (
    <StyledLink to={`/blog/${props.slug}`} key={props.id} onMouseEnter={prefetch(props.slug)}>
      <InfoWrapper>
        <Img src={`https://media.graphcms.com/resize=w:150,h:150,fit:clip/${props.img}`} alt="this"/>
        
      </InfoWrapper>
      <H3>{props.title}</H3>
    </StyledLink>
  )
}

export default withApollo(PrefetchPost)