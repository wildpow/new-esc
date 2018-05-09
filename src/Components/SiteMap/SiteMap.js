import React, { Fragment } from 'react'
import gql from 'graphql-tag';
import Helmet from 'react-helmet';
import { graphql } from 'react-apollo';
import { Main, SiteLinks, MainLinks, MattLinksWrapper, BrandLinks,
          UnList, Lilist, BottomLinks } from './SiteMapStyles';
import { H2 } from '../../Styles';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';


const SiteMap = ({ data: { loading, error, Sealy, Stearns, Tempur, Ajustable, Blog} }) => {
  if (error) return <Error next={'sitemap'} only2Links={true}/>
  if(!loading) {
    return (
      <Fragment>
        <Helmet>
          <title>ESC: Site Map</title>
          <meta name="description" content="Sitemap for E.S.C Mattress Center website"/>        
          <meta property="og:type"   content="website" />
          <meta property="og:site_name" content="E.S.C. Mattress Center"/>
          <meta property="og:url" content="https://www.escmattresscenter.com/"/>
          <meta property="og:image" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
          <meta property="og:image:width" content="1200"/>
          <meta property="og:image:height" content="627"/>
          <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
          <meta property="og:title" content="E.S.C. Mattress Center"/>
          <meta property="og:description" content="Sleep like the experts do."/>
        </Helmet>
      <MainLinks>
        <H2>Main Site Links</H2>
        <UnList>
          <Lilist><SiteLinks to="/">Home</SiteLinks></Lilist>
          <Lilist><SiteLinks to="/current-sale">Sale</SiteLinks></Lilist>
          <Lilist><SiteLinks to="/about">About</SiteLinks></Lilist>
          <Lilist><SiteLinks to="/accessories">Accessories</SiteLinks></Lilist>
          <Lilist><SiteLinks to="/financing">Financing</SiteLinks></Lilist>
          <Lilist><SiteLinks to="/adjustable">Adjustable</SiteLinks></Lilist>
          <Lilist><SiteLinks to="/brands">Brands</SiteLinks></Lilist>
        </UnList>
      </MainLinks>
      <MattLinksWrapper>
        <Main>
        <h3><BrandLinks to="/brands/sealy">Sealy Mattresses</BrandLinks></h3>
          <ul>
            {Sealy.mattresses.map((mattress) => {
              return (
                <li key={mattress.id}>
                  <SiteLinks to={`/brands/sealy/${mattress.uri}`}>
                    {mattress.subBrand} {mattress.subName}
                  </SiteLinks>
                </li>
              )
            })}
          </ul>
          </Main>
          <Main>
          <h3>
            <BrandLinks to="/brands/tempurpedic">
              Tempurpedic Mattresses
            </BrandLinks>
          </h3>
          <ul>
            {Tempur.mattresses.map((mattress) => {
              return (
                <li key={mattress.id}>
                  <SiteLinks to={`/brands/tempurpedic/${mattress.uri}`}>
                    {mattress.subBrand} {mattress.subName}
                  </SiteLinks>
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
                  <SiteLinks to={`/brands/stearns/${mattress.uri}`}>
                    {mattress.subBrand} {mattress.subName}
                  </SiteLinks>
                </li>
              )
            })}
          </ul>
        </Main>
      </MattLinksWrapper>
      <BottomLinks>
      <Main>
      <h3><BrandLinks to="/adjustable">Adjustable Bases</BrandLinks></h3>
        <ul>
          {Ajustable.map((adj) => {
            return (
              <li key={adj.id}>
                <SiteLinks to={`/adjustable/${adj.uri}`}>
                  {adj.fullName}
                </SiteLinks>
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
                <SiteLinks to={`/blog/${post.slug}`}>
                  {post.title}
                </SiteLinks>
              </li>
            )
          })}
        </ul>
      </Main>
      </BottomLinks>
    </Fragment>
    )
  }
  return <Loading/>;
}


export const Uri = gql`
  query Uri {
    Sealy: Brands(brand: "Sealy") {
      mattresses(filter: {isPublished: true}  ) { id subBrand subName uri }
    },
    Stearns: Brands(brand:"Stearns&Foster") {
      mattresses(filter: {isPublished: true}  ) { id subBrand subName uri }
    },
    Tempur: Brands(brand:"Tempur-Pedic") {
      mattresses(filter: {isPublished: true}  ) { id subBrand subName uri }
    },
    Ajustable: allAdjBaseses(filter: {isPublished: true}  ) {
      uri fullName id
    },
    Blog: allPosts(filter: {isPublished: true}  ) {
      id slug title
    }
  }
`;

export default graphql(Uri)(SiteMap);