import React from 'react';
import { Main, Header, HeaderText, PicHolder, StoreImg1,
          MapImg, StoreImg2, Address, Span, RegularParagraph,
          BlueWrapper, SecondP, PopImg, PopHolder, PopNameHolder,
          H4, Col, HH4
        } from './AboutStyles';
import '../../app.css';

import store1 from '../../images/outsideNight.jpg';
import store2 from '../../images/OutsideOfStore.jpg';
import map from '../../images/StoreMap.jpg';
import pop from '../../images/funCo.png';

const AboutComponent = () => {
  return (
    <Main className="animated fadeIn">
      <Header>
        <HeaderText> Our goal is to help Snohomish County sleep like the experts do and wake up feeling better.</HeaderText>
      </Header>
      <PicHolder>
        <StoreImg1 src={store1} alt="store"/>
        <MapImg src={map} alt="store"/>
        <StoreImg2 src={store2} alt="map"/>
      </PicHolder>
      
      <Address>
        <Span>We are located at 10121 Evergreen Way #30, Everett WA 98204.</Span><br/>
        We are on Everett Mall Way next to Outback Steakhouse
        and across the street from Enterprise car rentals.
      </Address>

      <RegularParagraph>
        We started our own mattress store to do things differently.  Instead of focusing on commissions or the lowest 
        priced rectangle, we want to focus on you and getting you the best night’s sleep possible.
        With over twenty years of combined industry experience we take pride in helping you find the
        “bed of your dreams” so that you can wake up feeling rested and ready to take on all that 
        your day has to offer.
      </RegularParagraph>

      <RegularParagraph>
        We’re here to help advise you by having our non-commissioned staff
        ask you some questions and listen to your answers to help recommend products that suit your needs.
        We believe sleep is an important part of everyone’s day, and people have a better life when they’re waking
        up every morning feeling rested, rejuvenated and refreshed.
      </RegularParagraph>

      <BlueWrapper>
        <SecondP>
          We offer almost fifty mattresses in a wide range of prices to fit every budget.  Our mattresses are made in the USA 
          -- with most of them coming from local manufacturing plants -- 
          and are brands that most people know and trust <br/>(Sealy, Stearns & Foster, TempurPEDIC).  
        </SecondP>
      </BlueWrapper>

      <RegularParagraph>
        We are locally owned and operated, and use a highly rated local delivery service for our white glove delivery.
        While our main area of focus is our local community, we can arrange delivery to most of Western Washington,
        so if you’re willing to make the trip we’re probably willing to find a way to get your bed to you 
        (but you can always call ahead and check).  Come on down and visit us so we can help you start waking
        up feeling great and “sleep like the experts do”.
      </RegularParagraph>
      
      <PopHolder>  
        <Col>
          <PopNameHolder>
            <HH4>Billy</HH4><H4>Joshua</H4><HH4>Willy</HH4>
          </PopNameHolder>
          <PopImg src={pop} alt="pops"/>
        </Col>
      </PopHolder>
    </Main>
  )
}

export default AboutComponent;