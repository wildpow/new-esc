import React from 'react';
import { MainFooter, Social, FBimage, Timage, Wrapper, YelpHolder, YelpImg, InstaImg, MapsImg, Graph, Hours} from './FooterStyles';
import fbIcon from '../../images/FB.png';
import twitterIcon from '../../images/twitter.png';
import Yelp from '../../images/Yelp_burst_negative_RGB.png';
import Insta from '../../images/glyph-logo_May2016.png';
import Google from '../../images/Google_Maps_App_3.png';

const Footer = () => {
  return(
    <MainFooter>
      <Wrapper>
        <Social>
          <a href="https://www.facebook.com/ESCMattressCenter/" target="_blank" rel="noopener noreferrer">
            <FBimage src={fbIcon} alt="facebook" class="fb__img"/>
          </a>
          <a href="https://twitter.com/CenterEsc?ref_src=twsrc%5Etfw" data-size="large" target="_blank" rel="noopener noreferrer">
            <Timage src={twitterIcon} alt="twitter"/>
          </a>
          <a href="https://www.instagram.com/escmattresscenter/" target="_blank" rel="noopener noreferrer">
            <InstaImg src={Insta} alt="Instagram"/>
          </a>
          <a href="https://www.yelp.com/biz/esc-mattress-center-everett-3" target="_blank" rel="noopener noreferrer">
            <YelpHolder>
              <YelpImg src={Yelp} alt="yelp"/>
            </YelpHolder>
          </a>
          <a href="https://goo.gl/maps/87hmC4TV4cv" target="_blank" rel="noopener noreferrer">
            <MapsImg src={Google} alt="google"/>
          </a>
        </Social>
        <Hours>
        
        </Hours>
        <Graph>

        </Graph>
      </Wrapper>
    </MainFooter>
  )
};
export default Footer;

