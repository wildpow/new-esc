import React from 'react';
import styled from 'styled-components';
import fbIcon from '../../images/FB.png';
import twitterIcon from '../../images/twitter.png';

const MainFooter = styled.footer`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  /* border: 2px solid black; */
  justify-content: center;
  justify-self: center;
  text-align: center;

 
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
`;

const Timage = styled.img`
max-width: 4.1rem;
padding-left: 10px;
`;
const Wrapper = styled.div`
align-self: center;
border: 2px solid black;
box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9);
@media(min-width: 1200px) {
  max-width: 75vw;
}

`
const Graph = styled.div``;

const Address = styled.div``;

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

