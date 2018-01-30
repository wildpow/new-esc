import React from 'react';
import styled from 'styled-components';
import '../../app.css'
import { Carousel } from 'react-responsive-carousel'; 
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
import Sealy from '../../images/SealyModal.jpg'
import Tempur from '../../images/TempurModal.jpg'
import Stearns from '../../images/StearnsModal.jpg'
import Sale from '../../images/grandOpening.png'
import './home.css';

const Main = styled.div`
background-color: white;
margin-right: 0;
margin-left: 0;
@media (min-width: 1300px) {
  margin-right: 50px;
margin-left: 50px;
}

`

const Img = styled.img`
background-color: white;
width: 360px;
height: 320px;
@media(min-width: 768px) {
  width: 500px;
  height: 450px;
}
@media(min-width: 1024px) {
    width: 1000px;
    height: 600px;
  }
`
const SaleImg = styled.img`
  width: 300px !important;
  height: 320px;
  @media(min-width: 768px) {
    width: 500px;
    height: 450px;
  }
  @media(min-width: 1024px) {
      width: 500px !important;
      height: 600px;
    }
  margin: auto;
`
const TempurImg = styled.img`
 width: 360px;
 height: 320px;
 @media(min-width: 768px) {
   width: 500px;
   height: 450px;
 }
 @media(min-width: 1024px) {
    width: 1000px;
    height: 600px;
  }
  margin: auto;
  align-self: center;
  
`

const SaleWrapper = styled.div`
 background-color: #eb1c24;
`
const StearnsImg = styled.img`
  width: 360px;
  height: 320px;
  @media(min-width: 768px) {
    width: 500px;
    height: 450px;
  }
  @media(min-width: 1024px) {
    width: 1000px;
    height: 600px;
  }
  
  margin: auto;
`

const HomeComponent = () => {
  return (
    <Main className="animated fadeIn">
      <Carousel
      infiniteLoop={true} autoPlay={true} showThumbs={false}
      interval={7000} 
      centerMode={true}
      centerSlidePercentage={100}
      showStatus={false}>
      <SaleWrapper>
        <SaleImg src={Sale} alt="this"/>
      </SaleWrapper>
      <div>
        <StearnsImg src={Stearns} alt="this"/>
        
      </div>
      <div>
      <TempurImg src={Tempur} alt="this"/>
     
      </div>
        <div>
        <Img src={Sealy} alt="this"/>
       
        </div>
        
      </Carousel>
    </Main>
  )
}

export default HomeComponent;