import React from 'react'
import {withApollo} from 'react-apollo'
import gql from 'graphql-tag';
import { AdjustableComponent, BrandsComponent, BlogComponent, OnSaleMatts } from '../../Routes'
import { StyledLink, BottomLinks, Nav,
        Wrapper, Image, Footer, BGcolorWrapper,
        NoLinkOnSM, LinkWrapper, LastLinkWrapper }  from './MenuStyles';
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
    className={visibility}
  >
  <Topper/>
  <Nav>
    <LinkWrapper>
      <StyledLink to="/" exact >Home</StyledLink>
      <StyledLink to="/current-sale">Sale</StyledLink>
      <StyledLink to="/brands">Brands</StyledLink>
    </LinkWrapper>
    <LinkWrapper>
      <StyledLink to="/adjustable" >Adjustable</StyledLink>
      <StyledLink to="/accessories">Accessories</StyledLink>
      <StyledLink to="/financing">Financing</StyledLink>
    </LinkWrapper>
    <LinkWrapper>
      <StyledLink to="/blog" >Our Blog</StyledLink>
      <StyledLink to="/about">About Us</StyledLink>
      <NoLinkOnSM> 
        <StyledLink to="/warranty">Warranty</StyledLink>
      </NoLinkOnSM>
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