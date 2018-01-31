import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'; 
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import '../../app.css';
import './home.css';
import { Main, SaleWrapper, SaleImg, TempurImg, SealyImg, StearnsImg } from './HomeStyles';

import Sealy from '../../images/SealyLifestyleRatio.jpg';
import Tempur from '../../images/TempurLifestyleRatio.jpg';
import Stearns from '../../images/StearnsLifestyleRatio.jpg';
import Sale from '../../images/grandOpening.png';

const HomeComponent = () => {
  return (
    <Main className="animated fadeIn">
      <Carousel
        infiniteLoop={true} autoPlay={true} showThumbs={false}
        interval={7000} 
        centerMode={true}
        centerSlidePercentage={100}
        showStatus={false}
      >
        <SaleWrapper>
          <SaleImg src={Sale} alt="this"/>
        </SaleWrapper>
        <Link to='/brands/stearns'>
          <StearnsImg src={Stearns} alt="this"/>
        </Link>
        <Link to='/brands/tempurpedic'>
          <TempurImg src={Tempur} alt="this"/>
        </Link>
        <Link to='/brands/sealy'>
          <SealyImg src={Sealy} alt="this"/> 
        </Link>
      </Carousel>
    </Main>
  )
}

export default HomeComponent;