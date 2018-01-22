import React from 'react';
import styled from 'styled-components';
import SealyLogo from '../../images/SealyLogo.png';
import StearnsLogo from '../../images/StearnsLogo.png';
import TempurLogo from '../../images/TempurLogo2.png';
import { Link } from 'react-router-dom';
import '../../app.css'
const Main = styled.div`
  display: flex;
  /* justify-content: center;
  justify-self: center; */
  
  flex-direction: column;
  text-align: center;
  
  @media(min-width: 1022px) {
   flex-direction: row; 
   justify-content: center;
    
  }
`
const TempurImg = styled.img`
  max-width: 21rem;
  align-self: center;
  padding-top: 22px;
  @media(min-width: 768px) {
    max-width: 25rem;
  }
  @media(min-width: 1022px) {
    max-width: 20rem;
    margin: auto;
  }
  
`;
const StearnsImg = styled.img`
  align-self: center;
  max-width: 17rem;
  padding-top: 30px;
  padding-bottom: 15px;
  @media(min-width: 1022px) {
  max-width: 15rem;
  /* margin: auto; */
  padding-top: 30px;
}
`;
const SealyImg = styled.img`
align-self: center;
max-width: 11rem;
padding-top: 30px;
padding-bottom: 15px;
@media(min-width: 1022px) {
  max-width: 9rem;
  /* margin: auto; */
  padding-top: 15px;
  padding-bottom: 10px;
}
`;


const MainText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  font-size: 1.2rem;
  line-height: 1.5rem;
`
const Footer = styled.p`
  background-color: ${props => props.blue ? '#1565c0' : '#eb1c24'};
  margin-bottom: 0;
  padding: 10px 0 10px 0;
  color: white;
  border-top: 2px solid black;
  font-family: 'Roboto', sans-serif;
  letter-spacing: .12rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
`
const StyledLink = styled(Link)`
      text-decoration: none;
      flex-basis: 100%;
      color: black;
      border: 2px solid black;
      box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .9); 
      border-top-left-radius: .11rem;
      border-top-right-radius: .11rem;
      margin-bottom: 20px;
      font-family: 'Open Sans', sans-serif;
      display: flex;
      transition: all .25s ease-in-out;
      &:hover {
        transform: scale(1.01);
      }
      @media(min-width: 1022px) {
        margin: 0 auto;
        flex-wrap: wrap;
        display: flex;
        flex-direction: row;
        flex-grow: 1;
      }

`
const BrandWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media(min-width: 1022px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
  }
`
const StearnsWrapper = StyledLink.extend`
  @media(min-width: 1022px) {
    margin-right: 10px;
    margin-left: 10px; 
}

`;

// const Mfooter = Footer.extend`
//   @media(min-width: 1022px) {
//     padding-left: 20px;
//     padding-right: 20px;
//   }
// `

const BrandsComponent = () => {
  return (
    <Main className="animated fadeIn">
      <StyledLink to='/brands/tempurpedic'>
      <BrandWrapper>
        <TempurImg src={TempurLogo} alt="Tempur Logo"/>
        <MainText>
          When Tempur-Pedic® introduced their proprietary TEMPUR® material they changed the way the world sleeps.
          TEMPUR® material is infinitely adaptable, responding to your body temperature, adapting to your weight
          and unique shape, giving you personalized support and alignment for undisturbed sleep.
        </MainText>
        <Footer>Tempur-Pedic:<br/> Life-changing sleep.</Footer>
      </BrandWrapper>
      </StyledLink>
      <StearnsWrapper to='/brands/stearns'>
      <BrandWrapper>
      <StearnsImg src={StearnsLogo} alt="Stearn Logo"/>
        <MainText>
        The enduring craftsmanship of Stearns & Foster is their legacy.
        Since 1846 their specially-trained craftsmen have been building mattresses by hand,
        using techniques they developed and spent decades perfecting.  
        They’re so dedicated to what they do, they sign every one.
        </MainText>
        <Footer blue>Stearns & Foster:<br/> Crafting the world’s finest bed.</Footer>
      </BrandWrapper>
      </StearnsWrapper>
      <StyledLink to='/brands/sealy'>
      <BrandWrapper>
        <SealyImg src={SealyLogo} alt="Sealy Logo"/>
        <MainText>
          At the heart of every Sealy mattress is the support that’s right for you.
          Only Sealy has Posturepedic Technology™ to provide more support where you
          need it most.  By precisely engineering the mattress into specific zones,
          they’re able to target reinforced support, while providing exceptional full-body support.
        </MainText>
        <Footer>Sealy:<br/> Proud supporter of you.</Footer>
      </BrandWrapper>
      </StyledLink>
    </Main>
  )
}

export default BrandsComponent;