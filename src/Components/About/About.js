import React from 'react';
import styled from 'styled-components';
import '../../app.css';
import store1 from '../../images/outsideNight.jpg';
import store2 from '../../images/OutsideOfStore.jpg';
import map from '../../images/StoreMap.jpg';
import pop from '../../images/funCo.png';


const Main = styled.div`
  display: flex;
  flex-direction: column;
  
  border: 2px solid black;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
  @media(min-width:1200px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`
const Header = styled.header`
  font-family: 'Roboto', sans-serif;
  background-color: #1565c0;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`
const PicHolder = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const STOREIMG1 = styled.img`
  width: 105px;
  height: 100px;
  @media(min-width: 375px) {width: 110px; height: 100px;}
  @media(min-width:412px) { width:125px ;height:100px ;}
  @media(min-width: 768px) {width: 218px; height: 200px; }
  @media(min-width: 993px) { width: 288px; height: 230px; }
  @media(min-width:1200px) { width: 358px; height: 280px;}
  @media(min-width: 1300px) {
    width: 383px;
    height: 300px;}
  @media(min-width: 1400px) {
    width: 420px;
    height: 350px;}
`
const Map = styled.img`
  width: 130px;
  height: 100px;
  @media(min-width: 375px) {width: 135px; height: 100px;}
  @media(min-width:412px) { width:145px ;height: 100px ;}
  @media(min-width: 768px) {width: 250px; height: 200px; }
  @media(min-width: 993px) { width: 340px; height: 230px; }
  @media(min-width:1200px) { width: 420px; height: 280px;}
  @media(min-width: 1300px) {
    width: 470px;
    height: 300px;}
  @media(min-width: 1400px) {
    width: 496px;
    height: 350px;}
`
const STOREIMG3 = styled.img`
width: 105px;
height: 100px;
@media(min-width: 375px) {width: 110px; height: 100px;}
@media(min-width:412px) { width:125px;height:100px ;}
@media(min-width: 768px) {width: 218px; height: 200px; }
@media(min-width: 993px) { width: 288px; height: 230px; }
@media(min-width:1200px) {width: 358px; height: 280px;}
@media(min-width: 1300px) {
  width: 383px;
  height: 300px;}
@media(min-width: 1400px) {
    width: 420px;
    height: 350px;}
`

const HeaderText = styled.h2`
font-size: .9rem;
padding-right: 5px;
padding-left: 5px;
@media(min-width: 768px) {
  font-size: 1.2rem;
}
@media(min-width: 1024px) {
  font-size: 1.4rem;
}
@media(min-width: 1300px) {
  font-size: 1.8rem;
  letter-spacing: .1rem;
}

`
const Address = styled.p`
  font-family: 'Open Sans', sans-serif;
  background: #eb1c24;
  color: white;
  text-align: center;
  font-size: 1.3rem;
  padding: 10px;
  line-height: 2rem;
  margin-top: 0;
  font-variant: small-caps;
  margin-bottom: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`
const Span = styled.span`
  font-size: 1.8rem;
`
const FirstP = styled.p`
 font-family: 'Open Sans', sans-serif;
  padding-left: 80px;
  padding-right: 80px;
  line-height: 1.7rem;
  font-size: 1.2rem;
  text-indent: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
`
const Blue = styled.div`
background-color: #1565c0;
color: white;
`
const SecondP = styled.p`
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-family: 'Open Sans', sans-serif;
  padding-left: 30px;
  padding-right: 30px;
  line-height: 1.7rem;
  font-size: 1.4rem;
  letter-spacing: .1rem;
  font-variant: small-caps;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
`
const PopImg = styled.img`
  max-width: 50rem;
  margin: auto;
`
const PopHolder = styled.div`
  display: flex;
  flex-direction: column;
`
const Div = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;

`
const H4 = styled.h4`
justify-content: space-around;
padding-right: 145px;
padding-left: 145px;
margin-bottom: 10px;
`
const Col = styled.div`
display: flex;
flex-direction: column;
`
const HH4 = styled.h4`
margin-bottom: 10px;
`
const AboutComponent = () => {
  return (
    <Main className="animated fadeIn">
      <Header>
        <HeaderText> Our goal is to help Snohomish County sleep like the experts do and wake up feeling better.</HeaderText>
      </Header>
      <PicHolder>
        <STOREIMG1 src={store1} alt="store"/>
        <Map src={map} alt="store"/>
        <STOREIMG3 src={store2} alt="map"/>
      </PicHolder>
      
      <Address>
        <Span>We are located at 10121 Evergreen Way #30, Everett WA 98204.</Span><br/>
        We are on Everett Mall Way next to Outback Steakhouse
        and across the street from Enterprise car rentals.

      </Address>
      <FirstP>
      We started our own mattress store to do things differently.  Instead of focusing on commissions or the lowest 
      priced rectangle, we want to focus on you and getting you the best night’s sleep possible.
      With over twenty years of combined industry experience we take pride in helping you find the
      “bed of your dreams” so that you can wake up feeling rested and ready to take on all that 
      your day has to offer.   We’re here to help advise you by having our non-commissioned staff
      ask you some questions and listen to your answers to help recommend products that suit your needs.
      We believe sleep is an important part of everyone’s day, and people have a better life when they’re waking
      up every morning feeling rested, rejuvenated and refreshed.
      </FirstP>
      <Blue>
      <SecondP>
        We offer almost fifty mattresses in a wide range of prices to fit every budget.  Our mattresses are made in the USA 
        -- with most of them coming from local manufacturing plants -- 
        and are brands that most people know and trust <br/>(Sealy, Stearns & Foster, TempurPEDIC).  
      </SecondP>
    </Blue>
      <FirstP>
        We are locally owned and operated, and use a highly rated local delivery service for our white glove delivery.
        While our main area of focus is our local community, we can arrange delivery to most of Western Washington,
        so if you’re willing to make the trip we’re probably willing to find a way to get your bed to you 
        (but you can always call ahead and check).  Come on down and visit us so we can help you start waking
        up feeling great and “sleep like the experts do”.
      </FirstP>
    <PopHolder>
        
        <Col>
          <Div>
            <HH4>Billy</HH4><H4>Joshua</H4><HH4>Willy</HH4>
          </Div>
          <PopImg src={pop} alt="pops"/>
        </Col>
    </PopHolder>
    </Main>
  )
}

export default AboutComponent;