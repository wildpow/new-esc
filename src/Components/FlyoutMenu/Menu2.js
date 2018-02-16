import React from 'react'
import {withApollo} from 'react-apollo'
import gql from 'graphql-tag';

import { StyledLink, Nav, Wrapper, Image }  from './MenuStyles';
import Topper from '../Topper/Topper';
import image from '../../images/logo.png';

const Menu2 = (props) => {
  const adjPreFetch = () => {
    props.client.query({
      query: gql`
      query allAdjustables {
        Bases: allAdjBaseses { id uri fullName keyfeatures features price salePrice brandLine brandName baseDescription height warranty coverImg { handle } detail1 { handle} detail2 { handle } } } `
    })
  };
  const allThePreFetch = () => {
    props.client.query({
      query: gql`
      query AllMattresses {
        allMattresses { id subName subBrand name discription uri features brandName
                        contruction profile setPrice warranty
                        setPriceSale mattOnly mattOnlySale coverImg { handle }
                        detail1 { handle } detail2 { handle } } }`
  })};

  var visibility = "hide";
    if (props.menuVisibility) {
      visibility = "show";
    }




  return (
    <Wrapper
    onMouseUp={props.handleMouseDown} 
    className={visibility}
    >
    <Topper/>
  <Nav onTouchStart={allThePreFetch}>
    {/* {console.log(props.client.cache.data)} */}
    <StyledLink to="/" exact>Home</StyledLink>
    <StyledLink to="/brands">Brands</StyledLink>
    <StyledLink to="/adjustable" onTouchStart={adjPreFetch}>Adjustable</StyledLink>
    <StyledLink to="/accessories">Accessories</StyledLink>
    <StyledLink to="/financing">Financing</StyledLink>
    <StyledLink to="/blog">Our Blog</StyledLink>
    <StyledLink to="/about">About Us</StyledLink>
    <Image src={image} alt="panda"/>
  </Nav>
  
  </Wrapper>
    
  )
}

export default withApollo(Menu2)