import React, { Fragment } from 'react'
import gql from 'graphql-tag';
import Helmet from 'react-helmet';
import { graphql } from 'react-apollo';
import { Main, SiteLinks, MainLinks, MattLinksWrapper, BrandLinks } from './SiteMapStyles';

const SiteMap = ({ data: { loading, error, Sealy, Stearns, Tempur, Ajustable, Blog} }) => {
  if (error) return <h1>Couldn't find sitemap {console.log(error)}</h1>
  if(!loading) {
    return (
      <Fragment>
        <Helmet>
          <title>ESC: Site Map</title>
          <meta name="description" content="Sitemap for E.S.C Mattress Center website"/>
        </Helmet>
      <MainLinks>
        <h2>Main Site Links</h2>
        <ul>
          <li><SiteLinks to="/">Home</SiteLinks></li>
          <li><SiteLinks to="/about">About</SiteLinks></li>
          <li><SiteLinks to="/accessories">Accessories</SiteLinks></li>
          <li><SiteLinks to="/financing">Financing</SiteLinks></li>
          <li><SiteLinks to="/adjustable">Adjustable</SiteLinks></li>
          <li><SiteLinks to="/brands">Brands</SiteLinks></li>
        </ul>
      </MainLinks>
      <MattLinksWrapper>
        <Main>
        <h3><BrandLinks to="/brands/sealy">Sealy Mattresses</BrandLinks></h3>
          <ul>
            {Sealy.mattresses.map((mattress) => {
              return (
                <li key={mattress.id}>
                  <SiteLinks to={`/brands/sealy/${mattress.uri}`}>{mattress.subBrand} {mattress.subName}</SiteLinks>
                </li>
              )
            })}
          </ul>
          </Main>
          <Main>
          <h3><BrandLinks to="/brands/tempurpedic">Tempurpedic Mattresses</BrandLinks></h3>
          <ul>
            {Tempur.mattresses.map((mattress) => {
              return (
                <li key={mattress.id}>
                  <SiteLinks to={`/brands/tempurpedic/${mattress.uri}`}>{mattress.subBrand} {mattress.subName}</SiteLinks>
                </li>
              )
            })}
          </ul>
        </Main>
        <Main>
        <h3><BrandLinks to="brands/stearns">Stearns & Foster Mattresses</BrandLinks></h3>
        <ul>
            {Stearns.mattresses.map((mattress) => {
              return (
                <li key={mattress.id}>
                  <SiteLinks to={`/brands/stearns/${mattress.uri}`}>{mattress.subBrand} {mattress.subName}</SiteLinks>
                </li>
              )
            })}
          </ul>
        </Main>
      </MattLinksWrapper>
      <Main>
      <h3><BrandLinks to="/adjustable">Adjustable Bases</BrandLinks></h3>
        <ul>
          {Ajustable.map((adj) => {
            return (
              <li key={adj.id}>
                <SiteLinks to={`/adjustable/${adj.uri}`}>{adj.fullName}</SiteLinks>
              </li>
            )
          })}
        </ul>
        </Main>
        <Main>
        <h3><BrandLinks to="/blog">Blog</BrandLinks></h3>
        <ul>
          {Blog.map((post) => {
            return (
              <li key={post.id}>
                <SiteLinks to={`/blog/${post.slug}`}>{post.title}</SiteLinks>
              </li>
            )
          })}
        </ul>
      </Main>
    </Fragment>
    )
  }
  return null;
}


export const Uri = gql`
  query Uri {
    Sealy: Brands(brand: "Sealy") {
      mattresses { id subBrand subName uri }
    },
    Stearns: Brands(brand:"Stearns&Foster") {
      mattresses { id subBrand subName uri }
    },
    Tempur: Brands(brand:"Tempur-Pedic") {
      mattresses { id subBrand subName uri }
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