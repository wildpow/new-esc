import React from 'react';
import { MainFooter, Wrapper,
          Hours, HoursSpan, HoursPara,
          Contact, GraphImg, GraphLink, MapLink, Divy, BottomLinkWrapper,
          BottomLinks
        } from './FooterStyles';

import GraphCMS from '../../images/powered_by_graphcms.svg';
import SocialIcons from './SocialIcons';


const Footer = () => {
  return(
    <MainFooter>
      <Wrapper>
        <SocialIcons/>
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
          <MapLink href="https://goo.gl/maps/AivxRZEWVwm" target="_blank" rel="noopener noreferrer">
            10121 Evergreen Way<br/> #30<br/>
            Everett, Washington 98204
            </MapLink>
          </HoursPara>
        </Hours>
      </Contact>
      <BottomLinkWrapper>
        <BottomLinks to="/current-sale">Current Sale</BottomLinks>
        <BottomLinks to="/warranty">Warranty Infomation</BottomLinks>
        <BottomLinks to="/sitemap" >Site Map</BottomLinks>
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

