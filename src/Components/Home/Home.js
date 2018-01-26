import React from 'react';
import styled from 'styled-components';
import '../../app.css'
import { Carousel } from 'react-responsive-carousel'; 
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'
import Sealy from '../../images/SealyLogo.png'
import Tempur from '../../images/TempurLogo2.png'
import Stearns from '../../images/StearnsLogo.png'
import Sale from '../../images/grandOpening.png'
import './home.css';

const Main = styled.div`
background-color: white;
margin-right: 150px;
margin-left: 150px;
`

const Img = styled.img`
background-color: white;
max-width: 20rem;
max-height: 15rem;
`
const SaleImg = styled.img`
  max-width: 40rem;
  max-height: 35rem;
  margin: auto;
`
const TempurImg = styled.img`
  max-width: 50rem;
  max-height: 35rem;
  margin: auto;
  
`
const TempurWrapper = styled.div`
 margin-bottom: -50px !important;
`
const SaleWrapper = styled.div`
 background-color: #eb1c24;
`
const StearnsImg = styled.img`
  max-width: 35rem;
  max-height: 35rem;
  align-self: center;
  margin: auto;
`
const StearnsWrapper = styled.div`
  display: flex;
 justify-content: space-around;
 flex-direction: column;
 align-items: center;
 justify-self: center;
 justify-content: center;
 width: 500px;
 height: 500px;

`
const StearnsP = styled.p`
margin-top: 150px !important;
text-align: center;

font-size: 2rem;
`
const TempurP = styled.p`

text-align: center;
margin-top: 120px !important;

font-size: 2rem;
`

const SealyP = styled.p`
text-align: center;
margin-top: 100px !important;

font-size: 2rem;
`
const HomeComponent = () => {
  return (
    <Main className="animated fadeIn">
      <Carousel
      infiniteLoop={true} autoPlay={true} showThumbs={false}
      interval={7000} 
      centerMode={true}
      centerSlidePercentage={100}>
      <SaleWrapper>
        <SaleImg src={Sale} alt="this"/>
      </SaleWrapper>
      <div>
        <StearnsImg src={Stearns} alt="this"/>
        <StearnsP >Stearns & Foster:<br/> Crafting the world’s finest bed.</StearnsP>
      </div>
      <TempurWrapper>
      <TempurImg src={Tempur} alt="this"/>
      <TempurP>Tempur-Pedic:<br/> Life-changing sleep.</TempurP>
      </TempurWrapper>
        <div>
        <Img src={Sealy} alt="this"/>
        <SealyP>Sealy:<br/> Proud supporter of you.</SealyP>
        </div>
        
      </Carousel>
    </Main>
  )
}

export default HomeComponent;