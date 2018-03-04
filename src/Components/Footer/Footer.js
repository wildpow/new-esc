import React from 'react';
import { MainFooter, Social, FBimage, Timage,
          Wrapper, YelpHolder, YelpImg, InstaImg,
          MapsImg, Hours, HoursSpan, HoursPara,
          Contact, GraphImg, GraphLink, MapLink, Divy, BottomLinkWrapper,
          BottomLinks
        } from './FooterStyles';
import fbIcon from '../../images/FB.png';
import twitterIcon from '../../images/twitter.png';
import Yelp from '../../images/Yelp_burst_negative_RGB.png';
import Insta from '../../images/glyph-logo_May2016.png';
import Google from '../../images/Google_Maps_App_3.png';
import GraphCMS from '../../images/powered_by_graphcms.svg';


const Footer = () => {
  return(
    <MainFooter>
      <Wrapper>
        <Social>
          <a href="https://www.facebook.com/ESCMattressCenter/" target="_blank" rel="noopener noreferrer">
            <FBimage src={fbIcon} alt="Face Book logo" class="fb__img"/>
          </a>
          <a href="https://twitter.com/CenterEsc?ref_src=twsrc%5Etfw" data-size="large" target="_blank" rel="noopener noreferrer">
            <Timage src={twitterIcon} alt="twitter logo"/>
          </a>
          <a href="https://www.instagram.com/escmattresscenter/" target="_blank" rel="noopener noreferrer">
            <InstaImg src={Insta} alt="Instagram logo"/>
          </a>
          <a href="https://www.yelp.com/biz/esc-mattress-center-everett-3" target="_blank" rel="noopener noreferrer">
            <YelpHolder>
              <YelpImg src={Yelp} alt="yelp logo"/>
            </YelpHolder>
          </a>
          <a href="https://goo.gl/maps/87hmC4TV4cv" target="_blank" rel="noopener noreferrer">
            <MapsImg src={Google} alt="google maps logo"/>
          </a>
          
        </Social>
        
        <Contact>
          <Hours>
            <HoursSpan>Hours</HoursSpan>
            <HoursPara>
                Mon-Fri 10am - 8pm<br/>
                Saturday 10am - 7pm<br/>
                Sunday 10am - 6pm
            </HoursPara>
          </Hours>
        <Hours>
          <HoursSpan>Address</HoursSpan>
          <HoursPara>
          <MapLink href="https://goo.gl/maps/k4NJFiCyoFF2" target="_blank" rel="noopener noreferrer">
            10121 Evergreen Way<br/> #30<br/>
            Everett, Washington 98204
            </MapLink>
          </HoursPara>
        </Hours>
      </Contact>
      <BottomLinkWrapper>
        <BottomLinks to="/sitemap" >Site Map</BottomLinks>
        <BottomLinks to="/warranty">Warranty Infomation</BottomLinks>
        <BottomLinks to="/policies">Terms and Policies</BottomLinks>
      </BottomLinkWrapper>
      </Wrapper>
      <Divy>
        <GraphLink href="https://graphcms.com/" target="_blank" rel="noopener noreferrer">
            <GraphImg src={GraphCMS} alt="GraphCMS Company logo"/>
          </GraphLink>
          </Divy>
    </MainFooter>
  )
};
export default Footer;

