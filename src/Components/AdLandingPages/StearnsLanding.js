import React from 'react';
import { Helmet } from "react-helmet";
import StearnsLogo from '../../images/Stears_Logo_WarmGray_Cropped.png';
import MarriedLady from '../../images/Indulgent-Comfort-Square.jpg';
import StearnsIcon from '../../images/StearnsFleur_Cropped.png';
import StearnsBed from '../../images/StearnsImage700x390.jpg';
import Stars from '../../images/StearnsStars200x50.png';
import { MainLogo, FirstImg, BottomImg, Icon, StarImg,
  Header, Container, FlexWrapper, CallTOAction, Headline,
  Wrap, Row, Holder, BottomWrapper, Ratings, MainHeadline,
  BottomImgWrapper, RatingsWrap, FooterWraper, LGWrapper } from './LandingStyles';
import AdForm from './AdForm';
import GoogleMapContainer from './GoogleMap';
import { Link } from 'react-router-dom';
// import ResponsiveImg from './ResponsiveImg';

const StearnsLanding = () => {
  return (
    <Container>
      <Helmet>
          <title>ESC: Stearns & Foster</title>
          <meta name="description" content="Experience the height of luxury with Stearns & Foster mattresses.  Learn more about the top rated luxury innerspring mattress collection from Stearns and Foster at ESC Mattress Center in Everett WA.  Our local non-commission staff will be happy to show you the Estate and Estate Lux collections."/>
      </Helmet>
      <Header>
        <MainLogo src={StearnsLogo} alt="Stearns and Foster Mattress company logo for ESC mattress centers luxury landing page"/>
      </Header>
      <FlexWrapper>
        <FirstImg src={MarriedLady} alt="Consumer reports top rated mattress at you local mattress store"/>
        <LGWrapper>
        <MainHeadline>
          For over 165 years, Stearns & Foster has worked to build the perfect mattress.
          Every Stearns & Foster mattress is carefully crafted with the finest materials
          to provide you unsurpassed luxury and unparalleled 
          sleep. 
        </MainHeadline>
        <CallTOAction>
          Visit today or contact us to schedule a time to experience Consumer Reports 
          top rated Luxury Innerspring Mattress.
        </CallTOAction>
        <AdForm/>
        </LGWrapper>
      </FlexWrapper> 
      <Wrap>
        <Row>

          <Holder Cream>
            <h3>Authentic Craftsmanship</h3>
            <Headline bottom>
              Every Stearns & Foster mattress is handcrafted by certified craftsmen
              who have been especially trained and pay relentless attention to detail
              to build the best beds.
            </Headline>
          </Holder>

          <Icon src={StearnsIcon} alt="Icon you'll find on every luxury stearn and foster mattress Estate, estate lux and reserve"/>

          <Holder Cream>
            <h3>Indulgent Comfort</h3>
            <Headline bottom>
              Nothing is as supremely comfortable as a Stearns & Foster bed, offering
              you that perfect “ahh” moment every time you lie down.
            </Headline>
          </Holder>

        </Row>
        <Holder Cream Last>
          <h3>Exceptional Quality</h3>
          <Headline bottom>
            Each Stearns & Foster mattress is precisely engineered to meet the highest
            standards to deliver you exceptional, lasting quality.
          </Headline>
        </Holder>
      </Wrap>
      <BottomWrapper>
        <BottomImgWrapper>
          <BottomImg src={StearnsBed} alt="Top rated luxury mattress from stearn and foster at ESC mattress center"/>
        </BottomImgWrapper>
        <h3>The Stearns & Foster Experience</h3>
        <RatingsWrap>
          <Ratings>
            <p>Love our S&F Mattress!<br/> - Howie C.</p>
            <StarImg src={Stars} alt="Rating for mattresses found in you local Everett washington ESC mattress center"/>
          </Ratings>
          <Ratings>
            <p>Wake up with no back pain and well rested!<br/> - Penny S.</p>
            <StarImg src={Stars} alt="Rating for mattresses found in you local Everett washington ESC mattress center"/>
          </Ratings>
          <Ratings Bottom>
            <p>A dreamers paradise!<br/> -Houston T.</p>
            <StarImg src={Stars} alt="Rating for mattresses found in you local Everett washington ESC mattress center"/>
          </Ratings>
        </RatingsWrap>
        
      </BottomWrapper>
      <FooterWraper>
      <p>
        <Link to='/brands/stearns'>Click here</Link> to view the Stears & Foster collection
        or vist us to experience them in person
      </p>
      <GoogleMapContainer />
      </FooterWraper>
    </Container>
  )
}
export default StearnsLanding;