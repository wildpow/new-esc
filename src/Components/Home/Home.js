import React from 'react';
import { Helmet } from "react-helmet";

import { Carousel } from 'react-responsive-carousel'; 

import { Main, SaleWrapper, OneImg, Linky } from './HomeStyles';

import Sealy from '../../images/SealyFMCOCarouselRatio.jpg';
import Tempur from '../../images/TempurFMCOCarouselRatio.jpg';
import Stearns from '../../images/StearnsTopRatedCarouselRatio.jpg';
import Sale from '../../images/FMCOCarouselRatio.png';

const HomeComponent = () => {
  return (
    <Main>
      <Helmet>
        <title>E.S.C. Mattress Center</title>
        <meta name="description" content="A licensed mattress retailer for Sealy, Stearns and Foster, and Tempur-Pedic offering almost fifty mattresses with prices to fit every budget.  ESC Mattress Center is a locally owned company in Everett WA with more than twenty years of mattress industry experience between our non-commissioned staff."/>
        <meta property="og:type"   content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center"/>
        <meta property="og:url" content="https://www.escmattresscenter.com/"/>
        <meta property="og:image:secure_url" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="627"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
        <meta property="og:title" content="E.S.C. Mattress Center"/>
        <meta property="og:description" content="A licensed mattress retailer for Sealy, Stearns and Foster, and Tempur-Pedic offering almost fifty mattresses with prices to fit every budget.  ESC Mattress Center is a locally owned company in Everett WA with more than twenty years of mattress industry experience between our non-commissioned staff."/>
      </Helmet>
      <Carousel
        infiniteLoop={true} autoPlay={true} showThumbs={false}
        interval={6000} 
        centerMode={true}
        centerSlidePercentage={100}
        showStatus={false}
      >
        <SaleWrapper>
          <OneImg src={Sale} alt="Image of E.S.C Mattress Center's Floor model close out mattress and adjustable base sale."/>
        </SaleWrapper>
        <Linky to='/brands/stearns'>
          <OneImg src={Stearns} alt="Image of Stearns and Foster top rated inner spring mattress"/>
        </Linky>
        <Linky to='/brands/tempurpedic'>
          <OneImg src={Tempur} alt="Image of Tempurpedic 50% off mattress floor model close out sale"/>
        </Linky>
        <Linky to='/brands/sealy'>
          <OneImg src={Sealy} alt="Image of Sealy's 50% off mattress floor model close out sale"/> 
        </Linky>
      </Carousel>
    </Main>
  )
}

export default HomeComponent;