import React from 'react';
import {withApollo} from 'react-apollo'
import gql from 'graphql-tag';

import { Header, Nav, StyledLinkLeft, StyledLinkRight
        } from './NavStyles';

  const Navigation = ({client}) => {
    const allThePreFetch = () => () => {
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


  const adjPreFetch = () => () => {
    client.query({
      query: gql`
      query allAdjustables {
        Bases: allAdjBaseses { id uri fullName keyfeatures features price salePrice brandLine brandName baseDescription height warranty coverImg { handle } detail1 { handle} detail2 { handle } } } `
    })
  };
  
  return (
    <Header>
      <Nav>
        <StyledLinkLeft to="/brands" onMouseEnter={allThePreFetch()} onTouchStart={allThePreFetch()}>Brands</StyledLinkLeft>
        <StyledLinkLeft to="/adjustable" onMouseEnter={adjPreFetch()} onTouchStart={adjPreFetch()}>Adjustable</StyledLinkLeft>
        <StyledLinkLeft to="/accessories">Accessories</StyledLinkLeft>
      </Nav>
      <Nav>
        <StyledLinkRight to="/financing">Financing</StyledLinkRight>
        <StyledLinkRight to="/blog">Our Blog</StyledLinkRight>
        <StyledLinkRight to="/about">About Us</StyledLinkRight>
      </Nav>
    </Header>
  )
}

export default withApollo(Navigation);



