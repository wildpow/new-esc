import React from 'react';
import Helmet from 'react-helmet';
import { Main } from '../Adjustable/AdjustableStyles';
import styled from 'styled-components';
import { BoxShadow, Border, FlexRow, MainFont2, Blue, TextShadow, MainFont1 } from '../../Styles';
import Synchrony from '../../images/Synchrony_Card_Image.jpg';
import Acima from '../../images/Acima_Logo.png';

const CompanyWrapper = styled.article`
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
  @media(min-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;

const CompanyWrapper2 = CompanyWrapper.extend`
  margin-bottom: 0px;
`

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

const Img = styled.img`
  color: white;
  max-height: 10rem;
  align-self: center;
  margin-top: 8px;
  margin-bottom: 8px;
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
    padding-left: 10px;
    padding-right: 10px;
  }
  @media(min-width: 768px) {
    margin-right: 0px;
    padding-top: 20px;
    margin-left: 20px;
  font-size: 1.3rem;
  line-height: 1.7rem;
  max-width: 500px;
  }
`;
const P2 = P.extend`

`;
const Footer = styled.footer`
display: flex;
justify-content: center;
`
const Footer2 = Footer.extend`
justify-content: flex-end;
`
const ApplyNow = styled.a`
  font-size: 1rem;
  float: right;
  margin-top: -30px;
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 10px 15px 10px 15px;
  background-color: #66ccff;
  font-family: ${MainFont2};
  color: white;
  border: none;
  cursor: pointer;
  border-radius: .17rem;
  transition: all .25s ease-in;
  &:hover {
    transform: scale3d(1.1,1.1,1);
  }
  @media(min-width: 360px) {
    margin-top: -10px;
  }
  @media(min-width: 768px) {
    padding: 10px 15px 10px 15px;
    margin-top: -10px;
    margin-right: 20px;
    font-size: 1.2rem;
  }
  @media(min-width: 1028px) {
    font-size: 1.3rem;
  }
`;

const BottomP = styled.p`
  font-size: .8rem;
  margin-top: 0;
  padding-right: 5px;
  padding-left: 5px;
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 5px;
  font-family: ${MainFont2};
`;
const FinancingComponent = () => {
  return (
    <Main>
      <Helmet>
        <title>ESC: Financing</title>
        <meta name="description" content="Why spend your own money? We have 2 different financing options to suit your needs: Synchrony offers interest free financing, while Ascima offers a no credit needed option. Ask your local store for details."/>
        <meta property="og:type"   content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center"/>
        <meta property="og:url" content="https://www.escmattresscenter.com/"/>
        <meta property="og:image" content="https://www.escmattresscenter.com/static/media/logo.952ae51d.png"/> 
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="627"/>
        <meta property="og:image:alt" content="E.S.C Mattress Center's logo of a panda"/>
        <meta property="og:title" content="E.S.C. Mattress Center"/>
        <meta property="og:description" content="Why spend your own money? We have 2 different financing options to suit your needs: Synchrony offers interest free financing, while Ascima offers a no credit needed option. Ask your local store for details."/>
      </Helmet>
      <CompanyWrapper>
        <H3>Synchrony Financing</H3>
        <InfoWrapper>
          <Img src={Synchrony} />
          <P>
          We partner with Synchrony Financial to offer 0% interest* financing options on approved credit.  The Synchrony Home card offers convenient monthly payments, 24/7 access to online account management, and is accepted at many retailers nationwide.
          </P>
        </InfoWrapper>
        <Footer><BottomP>*Subject to credit approval. Minimum monthly payments required. See store for details.</BottomP></Footer>
      </CompanyWrapper>
      <CompanyWrapper2>
        <H3>Acima no-credit needed financing</H3>
        <InfoWrapper>
          <Img src={Acima} />
          <P>
          Even if you have low or no credit we partner with Acima Financing to extend financing and help you purchase the bed of your dreams.  With the option to pay off your account in 90-day, or take time to repay your account over 12 months with payments scheduled to align with your payday.
          </P>
        </InfoWrapper>
        <div><ApplyNow href="https://www.img-media.net/customer/leases/new?merchant_id=910493">APPLY NOW</ApplyNow></div>
      </CompanyWrapper2>
    </Main>
  )
}

export default FinancingComponent;