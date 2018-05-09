import React from 'react'
import {withApollo} from 'react-apollo'
import gql from 'graphql-tag';
import { AdjustableComponent, BrandsComponent, BlogComponent, OnSaleMatts } from '../../Routes'
import { StyledLink2,BottomLinks, Nav, Wrapper, Image, Footer, BGcolorWrapper,PooP, LinkWrapper, LastLinkWrapper }  from './MenuStyles';
import Topper from '../Topper/Topper';
import image from '../../images/logo.png';
import SocialIcons from '../Footer/SocialIcons';

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
        Bases: allAdjBaseses(orderBy: value_ASC) {
          uri value id fullName keyfeatures
      features price salePrice brandLine
      brandName baseDescription height warranty
      coverImg { handle } detail1 { handle} detail2 { handle } } } `
    })
  };
  allThePreFetch(){
    this.props.client.query({
      query: gql`
      query AllMattresses {
        allMattresses { id setPriceSale brandName discription name profile 
                        subName mattOnlySale contruction warranty
                        subBrand mattOnly uri features priceRange
                          setPrice coverImg { handle }
                        detail1 { handle } detail2 { handle } } }`
  })

};
  
  blogPreFetch(){
    this.props.client.query({
      query: gql`
      query allPosts { 
        allPosts { id slug title dateAndTime coverImage { handle } } }`  
    }) 
  };
  componentWillUpdate() {
    this.adjPreFetch();
    this.allThePreFetch();
    this.blogPreFetch();
    AdjustableComponent.load();
    BrandsComponent.load();
    BlogComponent.load();
    OnSaleMatts.load();
    
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
    <LinkWrapper>
      <StyledLink2 to="/" exact >Home</StyledLink2>
      <StyledLink2 to="/current-sale">Sale</StyledLink2>
      <StyledLink2 to="/brands">Brands</StyledLink2>
    </LinkWrapper>
    <LinkWrapper>
      <StyledLink2 to="/adjustable" >Adjustable</StyledLink2>
      <StyledLink2 to="/accessories">Accessories</StyledLink2>
      <StyledLink2 to="/financing">Financing</StyledLink2>
    </LinkWrapper>
    <LinkWrapper>
      <StyledLink2 to="/blog" >Our Blog</StyledLink2>
      <StyledLink2 to="/about">About Us</StyledLink2>
     <PooP> <StyledLink2 to="/warranty">Warranty</StyledLink2></PooP>
    </LinkWrapper>
    <LastLinkWrapper>
      <BottomLinks to="/policies">Policies</BottomLinks>
      <BottomLinks to="/sitemap">Site Map</BottomLinks>
    </LastLinkWrapper>
  </Nav>
  <Footer>
  <Image src={image} alt="Image of E S C Mattress Center sleeping panda bear"/>
  <BGcolorWrapper>
    <SocialIcons/>
  </BGcolorWrapper>
  </Footer>
  </Wrapper>
    
  )
}}

export default withApollo(Menu)