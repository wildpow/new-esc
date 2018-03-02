import React from 'react'
import gql from 'graphql-tag';
import Helmet from 'react-helmet';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`
display: flex;
 ul {
   list-style: none;
   line-height: 1.8rem;
 }
 li {
  font-family: 'Open Sans', sans-serif;
 }
 h3 {
  font-family: 'Roboto', sans-serif;
 }
`
const SiteMap = ({ data: { loading, error, Sealy, Stearns, Tempur, Ajustable, Blog} }) => {
  if (error) return <h1>Couldn't find sitemap {console.log(error)}</h1>
  if(!loading) {
    return (
      <div>
        <Helmet>
          <title>ESC: Site Map</title>
          <meta name="description" content="Sitemap for E.S.C Mattress Center website"/>
        </Helmet>
        <h2> Site Map </h2>
      <Main>
        <ul><h3>Main Site Links</h3>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/accessories">Accessories</Link></li>
          <li><Link to="/financing">Financing</Link></li>
          <li><Link to="/adjustable">Adjustable</Link></li>
          <li><Link to="/brands">Brands</Link></li>
        </ul>
      </Main>
      <Main>
        <ul><h3>Sealy Mattresses</h3>
          {Sealy.mattresses.map((mattress) => {
            return (
              <li key={mattress.id}>
                <Link to={`/brands/sealy/${mattress.uri}`}>{mattress.name}</Link>
              </li>
            )
          })}
        </ul>
        <ul><h3>Stearns & Foster Mattresses</h3>
          {Stearns.mattresses.map((mattress) => {
            return (
              <li key={mattress.id}>
                <Link to={`/brands/stearns/${mattress.uri}`}>{mattress.name}</Link>
              </li>
            )
          })}
        </ul>
        <ul><h3>Tempurpedic Mattresses</h3>
          {Tempur.mattresses.map((mattress) => {
            return (
              <li key={mattress.id}>
                <Link to={`/brands/tempurpedic/${mattress.uri}`}>{mattress.name}</Link>
              </li>
            )
          })}
        </ul>
      </Main>
      <Main>
        <ul><h3>adjustable Bases</h3>
          {Ajustable.map((adj) => {
            return (
              <li key={adj.id}>
                <Link to={`/adjustable/${adj.uri}`}>{adj.fullName}</Link>
              </li>
            )
          })}
        </ul>
        
        <ul><h3>Blog</h3>
          {Blog.map((post) => {
            return (
              <li key={post.id}>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </li>
            )
          })}
        </ul>
      </Main>
    </div>
    )
  }
  return null;
}


export const Uri = gql`
  query Uri {
    Sealy: Brands(brand: "Sealy") {
      mattresses { id name uri }
    },
    Stearns: Brands(brand:"Stearns&Foster") {
      mattresses { id name uri }
    },
    Tempur: Brands(brand:"Tempur-Pedic") {
      mattresses { id name uri }
    },
    Ajustable: allAdjBaseses {
      uri fullName id
    },
    Blog: allPosts {
      id slug title
    }
  }
`;

export default graphql(Uri)(SiteMap);