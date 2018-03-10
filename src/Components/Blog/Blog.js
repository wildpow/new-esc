import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Helmet from 'react-helmet';
import { Section, Homebutton, ShowMoreWrapper, Main} from './BlogListStyles';
import { H2 } from '../../Styles';
import Loading from '../Loading/Loading';
import PrefetchPost from './Prefetch/PrefetchPosts';
import Error from '../Error/Error';

const POSTS_PER_PAGE = 4

const BlogComponent = ({ data: { loading, error, allPosts, _allPostsMeta}, loadMorePosts}) => {
  if (error) return <Error/>
  if (allPosts && _allPostsMeta) {
    const areMorePosts = allPosts.length < _allPostsMeta.count

    return (
      <Main>
        <Helmet>
          <title>ESC: Blog</title>
          <meta name="description" content="Come read about ways to achieve better sleep, and live healthier from people who have been helping people sleep better for 20+ years. Check here to see our schedule of professional speakers speaking on sleep topics."/>
          <meta property="og:type"   content="website" />
          <meta property="og:site_name" content="E.S.C. Mattress Center"/>
          <meta property="og:url" content="https://www.escmattresscenter.com/"/>
          <meta property="og:image" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="627"/>
          <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
          <meta property="og:title" content="E.S.C. Mattress Center | Blog"/>
          <meta property="og:description" content="Come read about ways to achieve better sleep, and live healthier from people who have been helping people sleep better for 20+ years. Check here to see our schedule of professional speakers speaking on sleep topics."/>
        </Helmet>
        <header>
          <H2>Our Blog</H2>
        </header>
      <Section>
          {allPosts.map(post => (
              <PrefetchPost key={post.id} title={post.title} slug={post.slug} img={post.coverImage.handle}/>
        ))}
        <ShowMoreWrapper>
          {areMorePosts
            ? <Homebutton className='Home-button' disabled={loading} onClick={() => loadMorePosts()}>
              {loading ? 'Loading...' : 'Show More Posts'}
            </Homebutton>
            : ''}
          </ShowMoreWrapper>
      </Section>
      </Main>
    )
  }
  return <Loading/>;
}

export const allPosts = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: dateAndTime_DESC, first: $first, skip: $skip) {
      id slug title dateAndTime
      coverImage { handle }
    },
    _allPostsMeta { count}
  }
`
export const allPostsQueryVars = {
  skip: 0,
  first: POSTS_PER_PAGE
}

export default graphql(allPosts, {
  options: {
    variables: allPostsQueryVars,
    notifyOnNetworkStatusChange: true
    
    
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allPosts.length,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
          })
        }
      })
    }
  })
})(BlogComponent)

