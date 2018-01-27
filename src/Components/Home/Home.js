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
margin-right: 10px;
margin-left: 10px;
@media (min-width: 1300px) {
  margin-right: 150px;
margin-left: 150px;
}

`

const Img = styled.img`
background-color: white;
max-width: 80rem;
max-height: 70rem;
`
const SaleImg = styled.img`
  max-width: 40rem;
  max-height: 35rem;
  margin: auto;
`
const TempurImg = styled.img`
 max-width: 80rem;
 max-height: 100rem;
  margin: auto;
  align-self: center;
  
`

const SaleWrapper = styled.div`
 background-color: #eb1c24;
`
const StearnsImg = styled.img`
  max-width: 80rem;
  max-height: 70rem;
  
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