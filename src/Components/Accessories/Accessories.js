import React from 'react';

import { Helmet } from "react-helmet";
import { Main } from '../Adjustable/AdjustableStyles';
import styled from 'styled-components';

import Frame from '../../images/frame.jpg';
import Pillows from '../../images/PillowCollage.jpg';
import Protector from '../../images/Protector.jpg';
import Sheets from '../../images/SheetStack.jpg';
import { BoxShadow, Border, FlexRow, MainFont2, Blue, TextShadow, MainFont1 } from '../../Styles';

const P = styled.p`
  margin-top: 0;
  /* max-width: 500px; */
  align-self: center;
  /* margin-right: 60px; */
  font-size: 1rem;
  line-height: 1.5rem;
  padding-left: 5px;
  padding-right: 5px;
  align-self: flex-start;
  font-family: ${MainFont2};
  @media(min-width: 360px) {
    padding-left: 7px;
    padding-right: 7px;
  }
  @media(min-width: 411px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media(min-width: 660px) and (max-width: 767px) {
    margin-right: 30px;
    margin-left: 30px;
  }
  
  @media(min-width: 768px) {
    margin-right: 0px;
    padding-top: 20px;
    margin-left: 20px;
    font-size: 1.3rem;
    line-height: 1.7rem;
    max-width: 500px;
  }
  @media(min-width: 1024px) {
    line-height: 1.9rem;
  }
  @media(min-width: 1300px) {
    margin-right: 60px;
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;
const AccWrapper = styled.article`
  box-shadow: ${BoxShadow};
  border: ${Border};
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 15px;
  border-radius: .14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  @media(min-width: 660px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media(min-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;

const AccWrapper2 = AccWrapper.extend`
  margin-bottom: 0px;
`;

const H3 = styled.h3`
  text-shadow: ${TextShadow};
  font-family: ${MainFont1};
  background-color: ${Blue};
  color: white;
  margin-top: 0;
  text-align: center;
  margin-bottom: 0;
  font-size: 1rem;
  padding: 10px 5px 10px 5px;
  letter-spacing: .12rem;
  @media(min-width: 581px) {
    font-size: 1.2rem;
    padding: 10px 30px 10px 30px;
  }
  @media(min-width: 692px) {
    text-align: left;
    word-spacing: .18rem;
    letter-spacing: .17rem;
  }
  @media(min-width: 1028px) {
    letter-spacing: .2rem;
    word-spacing: .17rem;
    font-size: 1.4rem;
  }
`;

const InfoWrapper = FlexRow.extend`
  flex-wrap: wrap;
  justify-content: space-around;
  @media(min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  } 
  @media(min-width: 1024px) {
    justify-content: space-between;
  }
`;
const Img = styled.img`
  color: white;
  max-height: 10rem;
  align-self: center;
  margin-top: 8px;
  margin-bottom: 8px;
  @media(min-width: 640px) and (max-width: 767px) {
    max-height: 14rem;
  }
  @media(min-width: 768px) {
    align-self: center;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-top: 10px; 
    max-height: 12rem;
  }
  @media(min-width: 1024px) {
    align-self: flex-start;
    max-height: 16rem;
  }
  /* @media(min-width: 1300px) {
    align-self: flex-end;
  } */
`;
const AccessoriesComponent = () => {
  return (
    <Main>
      <Helmet>
        <title>ESC: Accessories</title>
        <meta name="description" content="Sleep system means more than a mattress and box, let us help you find a Pillow, Sheets, and Protector that will help you sleep better. We carry Dream Fit Sheets, Protect a bed Pillows & Protectors, Tempurpedic pillows, and Thecnogel Pillows. We can help with cooling as well if needed."/>
        <meta property="og:type"   content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center"/>
        <meta property="og:url" content="https://www.escmattresscenter.com/"/>
        <meta property="og:image" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="627"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
        <meta property="og:title" content="E.S.C. Mattress Center"/>
        <meta property="og:description" content="Sleep system means more than a mattress and box, let us help you find a Pillow, Sheets, and Protector that will help you sleep better. We carry Dream Fit Sheets, Protect a bed Pillows & Protectors, Tempurpedic pillows, and Thecnogel Pillows. We can help with cooling as well if needed."/>
      </Helmet>
      <AccWrapper>
        <H3>Pillows</H3>
        <InfoWrapper>
          <Img src={Pillows}/>
          <P>We carry a wide range of pillows from Tempur-Pedic, Technogel, Protect-A-Bed, Sealy, and Stearns & Foster to others. Offering a large selection of heights and firmnesses to compliment any sleeping style and body type.</P>
        </InfoWrapper>
      </AccWrapper>
      <AccWrapper2>
        <H3>Sheets</H3>
        <InfoWrapper>
          <Img src={Sheets}/>
          <P>We proudly carry the full collection of DreamFit sheets. Ranging from a basic microfiber to luxurious Micro Tencel. All DreamFit sheets are of the upmost quality and are guaranteed not to "pop off" your mattress during the night.</P>
        </InfoWrapper>
      </AccWrapper2>
      <AccWrapper2>
        <H3>Mattress Protectors</H3>
        <InfoWrapper>
          <Img src={Protector}/>
          <P>I'm lazy to figure out what to type here. Make Joshua or Bill come up with something for you. I'm sure they'll think of something amazing, my brain is pretty fried right now. Keywords ar key.</P>
        </InfoWrapper>
      </AccWrapper2>
      <AccWrapper2>
        <H3>Bed Frames</H3>
        <InfoWrapper>
          <Img src={Frame}/>
          <P>Leggett & Platt makes some of the highest quality bed frames on the market, but see what I wrote up there about protectors? Same holds true here for frames. You're smart kids, you'll figure it out.</P>
        </InfoWrapper>
      </AccWrapper2>
    </Main>
  )
}

export default AccessoriesComponent;