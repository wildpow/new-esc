import React from 'react'
import {withApollo} from 'react-apollo'
import gql from 'graphql-tag';

import { StyledLink, Nav, Wrapper, Image }  from './MenuStyles';
import Topper from '../Topper/Topper';
import image from '../../images/logo.png';

class Menu extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      visibility: 'hide'
    }
  }
  adjPreFetch(){
    this.props.client.query({
      query: gql`
      query allAdjustables {
        Bases: allAdjBaseses { id uri fullName keyfeatures features price salePrice brandLine brandName baseDescription height warranty coverImg { handle } detail1 { handle} detail2 { handle } } } `
    })
  };
  allThePreFetch(){
    this.props.client.query({
      query: gql`
      query AllMattresses {
        allMattresses { id setPriceSale brandName discription name profile 
                        subName mattOnlySale contruction warranty
                        subBrand mattOnly uri features
                          setPrice coverImg { handle }
                        detail1 { handle } detail2 { handle } } }`
  })

};
  
  // blogPreFetch(){
  //   this.props.client.query({
  //     query: gql`
  //     query allPosts { 
  //       allPosts { id slug title dateAndTime coverImage { handle } } }`  
  //   }) 
  // };
  componentWillUpdate() {
    this.adjPreFetch();
    this.allThePreFetch();
    // this.blogPreFetch();
  }

render() {
  var visibility = "hide";
    if (this.props.menuVisibility) {
      visibility = "show";
    }
  return (
    <Wrapper
    onMouseUp={this.props.handleMouseDown} 
    className={visibility}>
    
    <Topper/>
  <Nav>
    
    <StyledLink to="/" exact>Home</StyledLink>
    <StyledLink to="/brands">Brands</StyledLink>
    <StyledLink to="/adjustable" >Adjustable</StyledLink>
    <StyledLink to="/accessories">Accessories</StyledLink>
    <StyledLink to="/financing">Financing</StyledLink>
    <StyledLink to="/blog" >Our Blog</StyledLink>
    <StyledLink to="/about">About Us</StyledLink>
    <Image src={image} alt="panda"/>
  </Nav>
  
  </Wrapper>
    
  )
}}

export default withApollo(Menu)