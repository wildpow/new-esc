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

          <meta property="og:image" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/>
          <meta name="twitter:image:alt" content={`ESC: ${post.title}`}/>
          <meta property="og:url" content={`https://www.escmattresscenter.com/blog/${post.slug}`}/>
          <meta property="og:description" content={post.title}/>
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="1200"/>
          <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
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