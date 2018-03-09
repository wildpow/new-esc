import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { Marker, Header, HeaderText, BottomImg, Main } from './PostStyles';
import Loading from '../../Loading/Loading';

const Post = ({ data: { loading, error, post } }) => {
  if (error) return console.log(error)
  if (!loading) {
    if(!post) return <Redirect to='/404'/>
    return (
      <Main>
        <Helmet>
          <title>{post.title}</title>
          <meta name="description" content={post.content}/>
          <meta property="og:type"   content="website" />
          <meta property="og:site_name" content="E.S.C. Mattress Center"/>
          <meta property="og:image" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="627"/>
          <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
          <meta property="og:title" content={`E.S.C. Mattress Center | ${post.title}`}/>
          <meta property="og:description" content={post.title}/>
        </Helmet>
        <Header>
          <HeaderText>{post.title}</HeaderText>
        </Header>
        <article>
          <Marker
            source={post.content}
            escapeHtml={false}
          />
        </article>
      
        {post.bottomimg ?
          <BottomImg src={`https://media.graphcms.com/resize=w:${post.bottomimg.width},h:${post.bottomimg.height},fit:clip/${post.bottomimg.handle}`} alt={`Image related to ${post.title}`}/>
                        : null}
      </Main>
    )
  }
  return <Loading/>
}

export const singlePost = gql`
  query singlePost($slug: String!) {
    post: Post(slug: $slug) {
      id
      slug
      title
      content
      dateAndTime
      bottomimg {
        handle
        height
        width
      }
    }
  }
`

export default graphql(singlePost, {
  options: ({ match }) => ({
    variables: {
      slug: match.params.slug
    }
  })
})(Post)