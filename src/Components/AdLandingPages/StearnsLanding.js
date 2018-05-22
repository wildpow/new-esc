import React from 'react';
import StearnsLogo from '../../images/Stears_Logo_WarmGray_Cropped.png';
import MarriedLady from '../../images/StearnsTopImage600x400.jpg';
import StearnsIcon from '../../images/StearnsFleur_Cropped.png';
import StearnsBed from '../../images/StearnsAboveReviews600x400.jpg';
import Stars from '../../images/StearnsStars200x50.png';
import { MainLogo, FirstImg, BottomImg, Icon, StarImg,
  Header, Container, FlexWrapper, CallTOAction, Headline } from './LandingStyles';
import AdForm from './AdForm';

const StearnsLanding = () => {
  return (
    <Container>
      <Header>
        <MainLogo src={StearnsLogo} alt="this"/>
      </Header>
      <FlexWrapper>
        <FirstImg src={MarriedLady} alt="this"/>
        <Headline>
          For over 165 years, Stearns & Foster has worked to build the perfect mattres.
          Every Stearns & Foster mattress is carefully crafted with the finest materials
          to provide you unsurpassed luxury and unparalleled 
          sleep. 
        </Headline>
        <CallTOAction>
          Visit today or contact us to schedule a time to experience Consumer Reports 
          top rated Luxury Inneerspring Mattress.
        </CallTOAction>
        <AdForm/>
      </FlexWrapper> 
      <div className="col">
        <div className="row">
          <div className="col">
            <h3>Authentic Craftsmanship</h3>
            <p>
              Every Stearns & Foster mattress is handcrafted by certified craftsmen
              who have been specialy trained and pay relentless attention to detail
              to build the best beds.
            </p>
          </div>
          <Icon src={StearnsIcon} alt="this"/>
          <div className="col">
            <h3>Indulgent Comfort</h3>
            <p>
              Nothing is as supremely comfortable as a Stearns & Foster bed, offering
              you that perfect “ahh” moment every time you lie down.
            </p>
          </div>
        </div>
        <div className="col">
          <h3>Exceptional Quality</h3>
          <p>
            Each Stearns & Foster mattress is precisely engineered to meet the highest
            standards to deliver you exceptional, lasting quality.
          </p>
        </div>
      </div>
      <div className="col">
        <BottomImg src={StearnsBed} alt="this"/>
        <h3>The Stearns & Foster Experience</h3>
        <div className="row">
          <div className="col">
            <p>Love our S&F Mattress! - Howie C.</p>
            <StarImg src={Stars} alt="this"/>
          </div>
          <div className="col">
            <p>Wake up with no back pain and well rested! - Penny s.</p>
            <StarImg src={Stars} alt="this"/>
          </div>
          <div className="col">
            <p>A dreamers paradise! -Houston T.</p>
            <StarImg src={Stars} alt="this"/>
          </div>
        </div>
      </div>
    </Container>
  )
}
export default StearnsLanding;