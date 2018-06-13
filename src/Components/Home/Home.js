import React from 'react';
import { Helmet } from "react-helmet";

import { Carousel } from 'react-responsive-carousel'; 

import { Main, Linky } from './HomeStyles';
import SealyWebp from '../../images/SealyDefault980x450.webp'
import TempurWebp from '../../images/TempurDefault980x450.webp'
import SaleWebp from '../../images/Freex3_980x450.webp'
import StearnsWebp from '../../images/StearnsDefault980x450.webp'
import Sealy from '../../images/SealyDefault980x450.jpg';
import Tempur from '../../images/TempurDefault980x450.jpg';
import Stearns from '../../images/StearnsDefault980x450.jpg';
import Sale from '../../images/Freex3_980x450.jpg';
// import Fifth from '../../images/GildedBreathSpecialBuy980x450.jpg'
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
        <Linky to='/current-sale'>
        <picture>
          <source type="image/webp" srcSet={SaleWebp}/>
          <img src={Sale} alt="E.S.C Mattress Center's Mattress Wars Sales Event on a selection of mattresses and adjustable bases."/>
        </picture>
        </Linky>
        <Linky to='/brands/stearns'>
        <picture>
          <source type="image/webp" srcSet={StearnsWebp}/>
          <img src={Stearns} alt="Save up to 1000 dollars off Stearns and Foster top rated inner spring mattress"/>
        </picture>
        </Linky>
        <Linky to='/brands/tempurpedic'>
        <picture>
          <source type="image/webp" srcSet={TempurWebp}/>
          <img src={Tempur} alt="Save up to 600 dollars off Tempurpedic the winner of the JD power award for #1 in confort, support and value"/>
        </picture>
        </Linky>
        <Linky to='/brands/sealy'>
        <picture>
          <source type="image/webp" srcSet={SealyWebp}/>
          <img src={Sealy} alt="Sealy's Memorial day savings event save up to 300 off selected mattresses"/> 
        </picture>
        </Linky>
        {/* <Linky to='/brands/sealy/Sealy-Golden-Elegance-Gilded-Breath-Plush-PT'>
          <OneImg src={Fifth} alt="Image of Sealy's Golden Elegance Giled Breath plush pilltop mattress"/> 
        </Linky> */}
      </Carousel>
      <Front/>
    </Main>
  )
}

export default HomeComponent;