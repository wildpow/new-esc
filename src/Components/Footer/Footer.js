import React from 'react';
import styled from 'styled-components';



const MainFooter = styled.footer`
  display: flex;
  flex-direction: row;
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
`;

const Graph = styled.div``;

const Address = styled.div``;

const Footer = () => {
  return(
    <MainFooter>
      <Social>
      <a href="https://www.facebook.com/ESCMattressCenter/" class="fb__holder">
      <img src={fbicom} alt="facebook" class="fb__img"></a>
      <a class="twitter-follow-button" href="https://twitter.com/CenterEsc?ref_src=twsrc%5Etfw" data-size="large">
      </a>
      </Social>
      <Address>
      
      </Address>
      <Graph>

      </Graph>
      <a class="twitter-follow-button" href="https://twitter.com/CenterEsc?ref_src=twsrc%5Etfw" data-size="large"></a>
      
    </MainFooter>
  )
}
export default Footer

