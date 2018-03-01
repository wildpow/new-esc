import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Markdown from 'react-markdown';
import { Article, Header, HeaderText, BottomImg, Main } from './PostStyles';


const Post = ({ data: { loading, error, post } }) => {
  if (error) return console.log(error)
  if (!loading) {
    if(!post) return <Redirect to='/404'/>
    return (
      <Main>
        <Helmet>
          <title>{post.title}</title>
          <meta name="description" content={post.content}/>
        </Helmet>
        <Header>
          <HeaderText>{post.title}</HeaderText>
        </Header>
        <Article>
          <Markdown
            source={post.content}
            escapeHtml={false}
          />
        </Article>
      
        {post.bottomimg ?
          <BottomImg src={`https://media.graphcms.com/resize=w:${post.bottomimg.width},h:${post.bottomimg.height},fit:clip/${post.bottomimg.handle}`} alt={`Image related to ${post.title}`}/>
                        : null}
      </Main>
    )
  }
  return null
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