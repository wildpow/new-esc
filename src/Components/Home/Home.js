import React from 'react';
import { Helmet } from "react-helmet";

import { Carousel } from 'react-responsive-carousel'; 

import { Main, SaleWrapper, OneImg, Linky } from './HomeStyles';

import Sealy from '../../images/SealyPresDayCarouselRatio.jpg';
import Tempur from '../../images/TempurpedicPresDayCarouselRatio.jpg';
import Stearns from '../../images/StearnsPresDayCarouselRatio.jpg';
import Sale from '../../images/PresidentsDayBannerCorrected.jpg';

const HomeComponent = () => {
  return (
    <Main>
      <Helmet>
        <title>E.S.C. Mattress Center</title>
        <meta name="description" content="A licensed mattress retailer for Sealy, Stearns and Foster, and Tempur-Pedic offering almost fifty mattresses with prices to fit every budget.  ESC Mattress Center is a locally owned company in Everett WA with more than twenty years of mattress industry experience between our non-commissioned staff."/>
        <meta name="twitter:image:alt" content="E.S.C Matress Center"/>
        <meta property="og:image" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
        <meta property="og:url" content="https://www.escmattresscenter.com/"/>
        <meta property="og:description" content="Sleep like the experts do."/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="1200"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>

      </Helmet>
      <Carousel
        infiniteLoop={true} autoPlay={true} showThumbs={false}
        interval={6000} 
        centerMode={true}
        centerSlidePercentage={100}
        showStatus={false}
      >
        <SaleWrapper>
          <OneImg src={Sale} alt="this"/>
        </SaleWrapper>
        <Linky to='/brands/stearns'>
          <OneImg src={Stearns} alt="this"/>
        </Linky>
        <Linky to='/brands/tempurpedic'>
          <OneImg src={Tempur} alt="this"/>
        </Linky>
        <Linky to='/brands/sealy'>
          <OneImg src={Sealy} alt="this"/> 
        </Linky>
      </Carousel>
    </Main>
  )
}

export default HomeComponent;