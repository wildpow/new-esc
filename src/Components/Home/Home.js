import React from 'react';
import { Helmet } from "react-helmet";

import { Carousel } from 'react-responsive-carousel'; 

import { Main, OneImg, Linky } from './HomeStyles';

import Sealy from '../../images/SealyMemorial980x450.jpg';
import Tempur from '../../images/TempurMemorial980x450.jpg';
import Stearns from '../../images/StearnsMemorial980x450.jpg';
import Sale from '../../images/MPWMain980x450.jpg';
import Fifth from '../../images/GildedBreathSpecialBuy980x450.jpg'
import Front from '../FrontInfo/front';

const HomeComponent = () => {
  return (
    <Main>
      <Helmet>
        <title>E.S.C. Mattress Center</title>
        <meta name="description" content="A licensed mattress retailer for Sealy, Stearns and Foster, and Tempur-Pedic offering almost fifty mattresses with prices to fit every budget.  ESC Mattress Center is a locally owned company in Everett WA with more than twenty years of mattress industry experience between our non-commissioned staff."/>
        <meta property="og:type"   content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center"/>
        <meta property="og:url" content="https://www.escmattresscenter.com/"/>
        <meta property="og:image" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
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
        <div>
          <OneImg src={Sale} alt="Image of E.S.C Mattress Center's Spring Sales Event on all mattresses and adjustable bases."/>
        </div>
        <Linky to='/brands/stearns'>
          <OneImg src={Stearns} alt="Image of Stearns and Foster top rated inner spring mattress"/>
        </Linky>
        <Linky to='/brands/tempurpedic'>
          <OneImg src={Tempur} alt="Image of Tempurpedic JD power award for #1 in confort, support and value"/>
        </Linky>
        <Linky to='/brands/sealy'>
          <OneImg src={Sealy} alt="Image of Sealy's number one best rated hybrid mattress"/> 
        </Linky>
        <Linky to='/brands/sealy/Sealy-Golden-Elegance-Gilded-Breath-Plush-PT'>
          <OneImg src={Fifth} alt="Image of Sealy's Golden Elegance Giled Breath plush pilltop mattress"/> 
        </Linky>
      </Carousel>
      <Front/>
    </Main>
  )
}

export default HomeComponent;