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
          <meta name="description" content="TODO: words and stuff"/>
      </Helmet>
      <Header>
        <MainLogo src={StearnsLogo} alt="this"/>
      </Header>
      <FlexWrapper>
        <FirstImg src={MarriedLady} alt="this"/>
        <LGWrapper>
        <MainHeadline>
          For over 165 years, Stearns & Foster has worked to build the perfect mattres.
          Every Stearns & Foster mattress is carefully crafted with the finest materials
          to provide you unsurpassed luxury and unparalleled 
          sleep. 
        </MainHeadline>
        <CallTOAction>
          Visit today or contact us to schedule a time to experience Consumer Reports 
          top rated Luxury Inneerspring Mattress.
        </CallTOAction>
        <AdForm/>
        </LGWrapper>
      </FlexWrapper> 
      <Wrap>
        <Row>

          <Holder Cream>
            <h3>Authentic Craftsmanship</h3>
            <Headline>
              Every Stearns & Foster mattress is handcrafted by certified craftsmen
              who have been specialy trained and pay relentless attention to detail
              to build the best beds.
            </Headline>
          </Holder>

          <Icon src={StearnsIcon} alt="this"/>

          <Holder Cream>
            <h3>Indulgent Comfort</h3>
            <Headline>
              Nothing is as supremely comfortable as a Stearns & Foster bed, offering
              you that perfect “ahh” moment every time you lie down.
            </Headline>
          </Holder>

        </Row>
        <Holder Cream Last>
          <h3>Exceptional Quality</h3>
          <Headline>
            Each Stearns & Foster mattress is precisely engineered to meet the highest
            standards to deliver you exceptional, lasting quality.
          </Headline>
        </Holder>
      </Wrap>
      <BottomWrapper>
        <BottomImgWrapper>
          <BottomImg src={StearnsBed} alt="this"/>
        </BottomImgWrapper>
        <h3>The Stearns & Foster Experience</h3>
        <RatingsWrap>
          <Ratings>
            <p>Love our S&F Mattress!<br/> - Howie C.</p>
            <StarImg src={Stars} alt="this"/>
          </Ratings>
          <Ratings>
            <p>Wake up with no back pain and well rested!<br/> - Penny s.</p>
            <StarImg src={Stars} alt="this"/>
          </Ratings>
          <Ratings Bottom>
            <p>A dreamers paradise!<br/> -Houston T.</p>
            <StarImg src={Stars} alt="this"/>
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