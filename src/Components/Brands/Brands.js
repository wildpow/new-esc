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
  const stearnsQuery = () => {
    client.query({
      query: gql`
        query stearnsMattresses {
    Brands(brand:"Stearns&Foster") {
      mattresses { brandName uri id subName subBrand coverImg { handle } } } } ` }) 
  }
  const temperQuery = () => {
    client.query({
      query: gql`
      query tempurMattresses {
    Brands(brand:"Tempur-Pedic") {
      mattresses { uri brandName id subName subBrand coverImg { handle } } } }` })
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

      </Helmet>
      <StyledLink to='/brands/tempurpedic' onMouseEnter={temperQuery()} touchstart={temperQuery()}>
      <BrandWrapper>
        <TempurImg src={TempurLogo} alt="Tempur Logo"/>
        <MainText>
          When Tempur-Pedic® introduced their proprietary TEMPUR® material they changed the way the world sleeps.
          TEMPUR® material is infinitely adaptable, responding to your body temperature, adapting to your weight
          and unique shape, giving you personalized support and alignment for undisturbed sleep.
        </MainText>
        <Footer blue>Tempur-Pedic:<br/> Life-changing sleep.</Footer>
      </BrandWrapper>
      </StyledLink>
      <StearnsWrapper to='/brands/stearns' onMouseEnter={stearnsQuery()} touchstart={stearnsQuery()}>
      <BrandWrapper>
      <StearnsImg src={StearnsLogo} alt="Stearn Logo"/>
        <MainText>
        The enduring craftsmanship of Stearns & Foster is their legacy.
        Since 1846 their specially-trained craftsmen have been building mattresses by hand,
        using techniques they developed and spent decades perfecting.  
        They’re so dedicated to what they do, they sign every one.
        </MainText>
        <Footer blue>Stearns & Foster:<br/> Crafting the world’s finest bed.</Footer>
      </BrandWrapper>
      </StearnsWrapper>
      <StyledLink to='/brands/sealy' onMouseEnter={sealyQuery()} touchstart={sealyQuery()}>
      <BrandWrapper>
        <SealyImg src={SealyLogo} alt="Sealy Logo"/>
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