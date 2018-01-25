import React from 'react';
import styled from 'styled-components';
import fbIcon from '../../images/FB.png';
import twitterIcon from '../../images/twitter.png';
import Yelp from '../../images/Yelp_burst_negative_RGB.png';
import Insta from '../../images/glyph-logo_May2016.png';
import Google from '../../images/Google_Maps_App_3.png';

const MainFooter = styled.footer`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 5px;
  /* border: 2px solid black; */
  justify-content: center;
  justify-self: center;
  text-align: center;
  flex-wrap: nowrap;
  @media (min-width: 768px) {
    margin-top: 15px;
    margin-bottom: 30px;
  }

 
/* }@media(min-width: 1200px) {
  margin-right: 104px;
  margin-left: 104px;
} */
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
  padding: 7px 7px 4px 7px;
`;

const FBimage = styled.img`
max-width: 3.5rem;
transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;

const Timage = styled.img`
max-width: 4.1rem;
padding-left: 10px;
transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;
const Wrapper = styled.div`
align-self: center;
background-color: white;
border: 2px solid black;
box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9);
@media(min-width: 1200px) {
  max-width: 75vw;
}
`

const YelpImg = styled.img`
  width: 3.54rem;
  max-height: 3.15rem;
`;
const Graph = styled.div``;

const Address = styled.div``;
const YelpHolder = styled.div`
  background-color: #d32323;
  margin-left: 10px;
  border-top-left-radius: .2rem;
  border-top-right-radius: .2rem;
  border-bottom-right-radius: .2rem;
  border-bottom-left-radius: .2rem;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`
const InstaImg = styled.img`
  max-width: 3.5rem;
  margin-left: 10px;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;
const MapsImg = styled.img`
  max-width: 3.5rem;
  margin-left: 10px;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
`;
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
      <Address>
        
      </Address>
      <Graph>

      </Graph>
      </Wrapper>
    </MainFooter>
  )
}
export default Footer

