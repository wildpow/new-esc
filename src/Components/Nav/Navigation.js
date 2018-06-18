import React from 'react';
import {withApollo} from 'react-apollo'
import gql from 'graphql-tag';
// import {BrandsComponent, AdjustableComponent, AccessoriesCompoent,
//   FinancingComponent, BlogComponent, AboutComponent} from '../../Routes'
import { Header, Nav, StyledLinkLeft, StyledLinkRight
        } from './NavStyles';

  const Navigation = ({client}) => {

    const blogPreFetch = () => {
      client.query({
        query: gql`
        query allPosts { 
          allPosts { id slug title dateAndTime coverImage { handle } bottomimg { handle height width} } }`  
      }) 
    };

    const allThePreFetch = () => {
      client.query({
        query: gql`
        query AllMattresses {
          allMattresses { id setPriceSale brandName discription name profile 
                        subName mattOnlySale contruction warranty
                        subBrand mattOnly uri features
                          setPrice coverImg { handle }
                        detail1 { handle } detail2 { handle } } }`
      })
    };


  const adjPreFetch = () => {
    client.query({
      query: gql`
      query allAdjustables {
        Bases: allAdjBaseses(orderBy: value_ASC) { 
          uri value id fullName keyfeatures
      features price salePrice brandLine
      brandName baseDescription height warranty
      coverImg { handle } detail1 { handle} detail2 { handle } } } `
    })
  };

  const adjAndPreLoad = () => () => {
    adjPreFetch()
    // AdjustableComponent.load()
  }
  const AllthePre = () => () => {
    allThePreFetch()
    // BrandsComponent.load()
  }
  const BlogPre = () => () => {
    blogPreFetch()
    // BlogComponent.load()
  }
  return (
    <Header>
      <Nav>
        <StyledLinkLeft 
            to="/brands" 
            onMouseEnter={AllthePre()} 
            onTouchStart={AllthePre()}
          >Brands
        </StyledLinkLeft>
        <StyledLinkLeft 
            to="/adjustable" 
            onMouseEnter={adjAndPreLoad()} 
            onTouchStart={adjAndPreLoad()}
          >Adjustable
        </StyledLinkLeft>
        <StyledLinkLeft 
            to="/accessories" 
            // onMouseEnter={() => AccessoriesCompoent.load()} 
            // onTouchStart={() =>AccessoriesCompoent.load()}
          >Accessories
        </StyledLinkLeft>
      </Nav>
      <Nav>
        <StyledLinkRight 
            to="/financing" 
            // onMouseEnter={() =>FinancingComponent.load()} 
            // onTouchStart={() =>FinancingComponent.load()}
              >Financing
        </StyledLinkRight>
        <StyledLinkRight 
            to="/blog" 
            onMouseEnter={BlogPre()} 
            onTouchStart={BlogPre()}
              >Our Blog
        </StyledLinkRight>
        <StyledLinkRight 
            to="/about" 
            // onMouseEnter={() =>AboutComponent.load()} 
            // onTouchStart={() =>AboutComponent.load()}
          >About Us
        </StyledLinkRight>
      </Nav>
    </Header>
  )
}

export default withApollo(Navigation);



