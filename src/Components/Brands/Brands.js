import React from 'react';
import {withApollo} from 'react-apollo'
import gql from 'graphql-tag';
import {Main, TempurImg, StearnsImg, SealyImg,
        MainText, Footer, StyledLink, BrandWrapper,
        StearnsWrapper } from './BrandsStyles';
import { Helmet } from "react-helmet";
import SealyLogo from '../../images/SealyLogo.png';
import StearnsLogo from '../../images/StearnsLogo.png';
import TempurLogo from '../../images/TempurLogo2.png';


const BrandsComponent = ({client}) => {
  const stearnsQuery = () =>{
    client.query({
      query: gql`
        query stearnsMattresses {
    Brands(brand:"Stearns&Foster") {
      mattresses { brandName uri id subName name discription features profile contruction mattOnly mattOnlySale setPrice setPriceSale warranty subBrand coverImg { handle } detail1 { handle } detail2 { handle }} } } ` }) 
  }
  const temperQuery = () =>{
    client.query({
      query: gql`
      query tempurMattresses {
    Brands(brand:"Tempur-Pedic") {
      mattresses { uri brandName id subName name discription features profile contruction mattOnly mattOnlySale setPrice setPriceSale warranty subBrand coverImg { handle } detail1 { handle } detail2 { handle }} } }` })
  }
  const sealyQuery = () => {
    client.query({
      query: gql`
      query subBrands {
        essentials: SubLine(subLineName: "essentials") {
        mattresses { brandName uri id subBrand subName discription contruction profile features name mattOnly mattOnlySale setPrice setPriceSale coverImg { handle } detail1 { handle} detail2 { handle }} },
      performance: SubLine(subLineName: "performance") {
        mattresses { brandName id uri subBrand subName discription contruction profile features name mattOnly mattOnlySale setPrice setPriceSale coverImg { handle } detail1 { handle} detail2 { handle }} },
      premium: SubLine(subLineName: "premium") {
        mattresses { brandName id uri subBrand subName discription contruction profile features name mattOnly mattOnlySale setPrice setPriceSale coverImg { handle } detail1 { handle} detail2 { handle } } } }`
    })
  };
  return (
    <Main>
    <Helmet>
        <title>ESC: Brands</title>
        <meta name="description" content="Come visit your locally owned, Everett based Sealy, Stearns and Foster & Tempur-Pedic dealer.  We have over 20 years of experience helping people sleep better on the brands we carry.  We carry 3 of the top 5 mattress brands in the US, so come see us, so we can help you sleep like the experts do!"/>
        
        <meta name="twitter:image:alt" content="E.S.C Matress Center"/>
        <meta property="og:image" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
        {/* <meta property="og:url" content="https://www.escmattresscenter.com/brands"/> */}
        <meta name="twitter:image:alt" content="E.S.C Matress Center"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="1200"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
      </Helmet>
      <StyledLink to='/brands/tempurpedic' onMouseEnter={temperQuery()} onTouchStart={temperQuery()}>
      <BrandWrapper>
        <TempurImg src={TempurLogo} alt="Tempurpedic mattress company logo"/>
        <MainText>
          When Tempur-Pedic® introduced their proprietary TEMPUR® material they changed the way the world sleeps.
          TEMPUR® material is infinitely adaptable, responding to your body temperature, adapting to your weight
          and unique shape, giving you personalized support and alignment for undisturbed sleep.
        </MainText>
        <Footer blue>Tempur-Pedic:<br/> Life-changing sleep.</Footer>
      </BrandWrapper>
      </StyledLink>
      <StearnsWrapper to='/brands/stearns' onMouseEnter={stearnsQuery()} onTouchStart={stearnsQuery()}>
      <BrandWrapper>
      <StearnsImg src={StearnsLogo} alt="Stearn & Foster mattress company Logo"/>
        <MainText>
        The enduring craftsmanship of Stearns & Foster is their legacy.
        Since 1846 their specially-trained craftsmen have been building mattresses by hand,
        using techniques they developed and spent decades perfecting.  
        They’re so dedicated to what they do, they sign every one.
        </MainText>
        <Footer blue>Stearns & Foster:<br/> Crafting the world’s finest bed.</Footer>
      </BrandWrapper>
      </StearnsWrapper>
      <StyledLink to='/brands/sealy' onMouseEnter={sealyQuery()} onTouchStart={sealyQuery()}>
      <BrandWrapper>
        <SealyImg src={SealyLogo} alt="Sealy Mattress company Logo"/>
        <MainText>
          At the heart of every Sealy mattress is the support that’s right for you.
          Only Sealy has Posturepedic Technology™ to provide more support where you
          need it most.  By precisely engineering the mattress into specific zones,
          they’re able to target reinforced support, while providing exceptional full-body support.
        </MainText>
        <Footer blue>Sealy:<br/> Proud supporter of you.</Footer>
      </BrandWrapper>
      </StyledLink>
    </Main>
  )
}

export default withApollo(BrandsComponent);